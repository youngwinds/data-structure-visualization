import { TreeChart } from '@dsv-charts/index';
import { useEffect, useRef } from 'react';

export default function Detail() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) {
      return () => {};
    }

    const chart = new TreeChart(ref.current, { type: 'tree' });
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
