import * as VStory from '@visactor/vstory';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FC } from 'react';
import { ArrayBar } from 'data-structure';
import { Schema } from 'schema';
VStory.registerAll();

interface ChartProps {
  schema: Schema;
}
export const Chart: FC<ChartProps> = (props) => {
  const { schema } = props;
  console.log(schema);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const interval = 1000;
    const arrayBar = new ArrayBar<number>([...schema.structures[0].array], {
      id: schema.structures[0].id,
      interval: interval,
      structure: {
        position: {
          top: 10,
          left: 10,
          width: 580,
          height: 300,
        },
      },
    });

    schema.actions.forEach((action) => {
      if (action.structureId === arrayBar.id) {
        if (action.type === 'set') {
          arrayBar.set(action.args[0], action.args[1]);
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
            // 场景数组，可以包含多个场景，场景与场景是有先后顺序的串联结构
            {
              id: 'scene0',
              // 场景中包含的动作数组，动作中描述了一个或多个character的具体行为，一个场景中可以包含多个动作，动作之间是并行执行的
              actions: [
                {
                  characterId: 'array-94718b',
                  characterActions: [
                    {
                      action: 'appear',
                      startTime: 0,
                      payload: {
                        animation: {
                          duration: interval,
                        },
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: 'scene1',
              actions: arrayBar.actions,
            },
          ],
        },
      ],
    };

    console.log(dsl);

    const story = new VStory.Story(dsl, {
      dom: ref.current,
      background: 'pink',
    });
    const player = new VStory.Player(story);
    story.init(player);

    player.play(0);

    return () => {
      story?.release();
    };
  }, []);

  return (
    <>
      <div>test</div>
      <div style={{ width: '600px', height: '600px' }} ref={ref}></div>
    </>
  );
};
