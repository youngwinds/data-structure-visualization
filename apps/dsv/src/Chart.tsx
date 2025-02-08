import * as VStory from '@visactor/vstory';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FC } from 'react';
VStory.registerAll();

interface ChartProps {
  schema: any;
}
export const Chart: FC<ChartProps> = (props) => {
  const { schema } = props;
  console.log(schema);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    let top = 10;
    let left = 10;
    const characters = schema.structures.map(
      (structure: any, index: number) => {
        return {
          type: 'VChart',
          id: structure.id,
          zIndex: 1,
          position: {
            top: top + 200 * index,
            left: left,
            width: 580,
            height: 190,
          },
          options: {
            // 图表的背景板配置
            panel: {
              fill: '#ffffff',
              shadowColor: 'rgba(0, 0, 0, 0.05)',
              shadowBlur: 10,
              shadowOffsetX: 4,
              shadowOffsetY: 4,
              cornerRadius: 8,
            },
            spec: {
              data: [
                {
                  id: 'barData',
                  values: structure.array.map((y, x) => {
                    return {
                      x: y,
                      y: 1,
                    };
                  }),
                },
              ],
              axes: [
                {
                  orient: 'bottom',
                  type: 'band',
                },
                {
                  orient: 'bottom',
                  type: 'linear',
                  visible: false,
                },
              ],
              type: 'bar',
              xField: 'x',
              yField: 'y',
            },
          },
        };
      },
    );
    // 生成一个DSL，该DSL只包含一个VChart元素
    const dsl = {
      characters: characters,
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
                  characterId: 'array-fad29a',
                  characterActions: [
                    {
                      action: 'appear',
                      payload: {
                        animation: {
                          duration: 1000,
                        },
                      },
                    },
                  ],
                },
                {
                  characterId: 'array-7d8dc9',
                  characterActions: [
                    {
                      action: 'appear',
                      payload: {
                        animation: {
                          duration: 1000,
                        },
                      },
                    },
                  ],
                },
                {
                  characterId: 'array-94718b',
                  characterActions: [
                    {
                      action: 'appear',
                      payload: {
                        animation: {
                          duration: 1000,
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

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
