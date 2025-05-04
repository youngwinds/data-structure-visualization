import { Schema } from "schema";
import VChart from "@visactor/vchart";
import { useEffect, useRef } from "react";
interface ChartProps {
  schema: Schema;
}

export const Chart = (props: ChartProps) => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<VChart | null>(null);

  console.log(props)
  useEffect(() => {
    const spec = {
      type: "bar",
      data: {
        values: [
          {
            time: "2:00",
            value: 8,
          },
          {
            time: "4:00",
            value: 9,
          },
          {
            time: "6:00",
            value: 11,
          },
          {
            time: "8:00",
            value: 14,
          },
          {
            time: "10:00",
            value: 16,
          },
          {
            time: "12:00",
            value: 17,
          },
          {
            time: "14:00",
            value: 17,
          },
          {
            time: "16:00",
            value: 16,
          },
          {
            time: "18:00",
            value: 15,
          },
        ],
      },
      xField: "time",
      yField: "value",
    };

    if (!domRef.current) {
      return;
    }

    if (!chartRef.current) {
      // 初始化

      const chartInstance = new VChart(spec, {
        dom: domRef.current,
      });
      chartInstance.renderSync();
      chartRef.current = chartInstance;
    } else {
      chartRef.current.updateSpec(spec);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.release();
        chartRef.current = null;
      }
    };
  }, []);

  return <div ref={domRef} style={{ width: "100%", height: "100%" }} />;
};
