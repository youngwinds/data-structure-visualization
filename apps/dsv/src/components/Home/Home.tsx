import { Chart } from '../Chart';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { ChartContainer, DSVEditorContainer } from './style';

export const Home = () => {
  return (
    <DSVEditorContainer>
      <CodeEditor />
      <ChartContainer>
        <Chart />
      </ChartContainer>
    </DSVEditorContainer>
  );
};
