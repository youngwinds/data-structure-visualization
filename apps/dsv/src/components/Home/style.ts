import styled from 'styled-components';

export const DSVEditorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;

  height: 600px;

  border-radius: 8px;
  border: 1px solid #eee;

  & > *:first-child {
    border-right: 1px solid #eee;
  }

  margin: 12px;
`;
