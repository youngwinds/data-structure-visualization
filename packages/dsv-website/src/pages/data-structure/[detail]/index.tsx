import { ArrayChart } from '@dsv-charts/index';
import { useEffect, useRef } from 'react';

export default function Detail() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) {
      return () => {};
    }

    const chart = new ArrayChart(ref.current, {
      type: 'tree',
      layout: {
        padding: {
          top: 10,
          bottom: 15,
          left: 20,
          right: 30,
        },
      },
    });

    console.log(chart);

    chart.render();
    return () => {
      chart.destroy();
    };
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
