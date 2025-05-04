import { Player } from '../Player/Player';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { DSVEditorContainer } from './style';

export const Home = () => {
  return (
    <DSVEditorContainer>
      <CodeEditor />
      <Player />
    </DSVEditorContainer>
  );
};
