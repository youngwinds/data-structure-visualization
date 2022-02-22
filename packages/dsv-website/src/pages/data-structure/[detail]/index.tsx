import { ArrayChart, DsArray } from '@dsv-charts/index';
import { DataType } from '@dsv-charts/typings/config';
import { useEffect, useRef } from 'react';

export default function Detail() {
  const ref = useRef<HTMLDivElement>(null);

  const data: DataType = new Array(10).fill(0).map((d, i) => {
    return {
      key: i.toString(),
      name: i.toString(),
      value: i,
    };
  });

  useEffect(() => {
    if (ref.current === null) {
      return () => {};
    }

    const array = new DsArray(ref.current, {
      type: 'tree',
      data: data,
      layout: {
        padding: {
          top: 100,
          bottom: 100,
          left: 100,
          right: 100,
        },
      },
    });

    setTimeout(() => {
      array.pop();
    }, 1500);

    setTimeout(() => {
      array.push(1);
    }, 2000);
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{ border: '1px solid red', height: '600px', width: '970px' }}
      ></div>
    </div>
  );
}
