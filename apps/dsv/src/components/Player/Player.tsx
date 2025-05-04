import { FC } from 'react';
import { useDsv } from '../../model';
import { Chart } from 'player';

import * as S from './style';
import { executor } from 'data-structure';

export const Player: FC = () => {
  const schema = useDsv((state) => state.schema);
  debugger;
  const res = executor(schema);

  return (
    <S.PlayerContainer>
      <Chart schema={schema} />
    </S.PlayerContainer>
  );
};
