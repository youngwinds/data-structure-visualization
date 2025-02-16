import { Chart } from './Chart';
import { StructureType } from 'schema';
import { CodeEditor } from './CodeEditor/CodeEditor';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CodeEditor />
      <Chart />
    </div>
  );
}

export default App;
