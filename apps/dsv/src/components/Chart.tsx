import * as VStory from '@visactor/vstory';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FC } from 'react';
import { ArrayBar } from 'data-structure';
import { Schema } from 'schema';
import { useDsv } from '../model';
VStory.registerAll();

export const Chart: FC = () => {
  const schema = useDsv((state) => state.schema);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (schema.actions.length === 0 || schema.structures.length === 0) {
      return;
    }
    const arrayBar = new ArrayBar<number>([...schema.structures[0].array], {
      id: schema.structures[0].id,
      interval: 400,
      structure: {},
    });
    schema.actions.forEach((action) => {
      if (action.structureId === arrayBar.id) {
        if (action.type === 'set') {
          arrayBar.set(action.args[0], action.args[1]);
        }
        if (action.type === 'highlight') {
          arrayBar.highlight(action.args[0]);
        }
        // if (action.type === 'get') {
        //   arrayBar.get(action.args[0]);
        // }
        if (action.type === 'compare') {
          arrayBar.compare(action.args[0], action.args[1], action.args[2]);
        }
        if (action.type === 'swap') {
          arrayBar.swap(action.args[0], action.args[1]);
        }
        if (action.type === 'appear') {
          arrayBar.appear();
        }
        if (action.type === 'reverse') {
          arrayBar.reverse();
        }
      }
    });

    // 生成一个DSL，该DSL只包含一个VChart元素
    const dsl = {
      characters: [arrayBar.structure],
      // 图表的具体动画编排
      acts: [
        // 幕数组，一个故事可以包含多个幕，幕与幕之间是有先后顺序的串联结构
        {
          id: 'default-chapter',
          scenes: [
            {
              id: 'scene',
              actions: arrayBar.actions,
            },
          ],
        },
      ],
    };

    console.log('debug dsl', dsl);

    const story = new VStory.Story(dsl, {
      dom: ref.current,
      // background: 'pink',
    });
    const player = new VStory.Player(story);
    story.init(player);

    player.play(0);

    return () => {
      story?.release();
    };
  }, [schema]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
      ref={ref}
    ></div>
  );
};
