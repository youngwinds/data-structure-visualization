import { runCode } from '@dsv-website/utils/run-code';
import { message } from 'antd';

interface IBacktrackingState {
  percent: number;
  queue: [];
  currentIndex: number;
}

const initState: IBacktrackingState = {
  percent: 0,
  queue: [],
  currentIndex: 0,
};

export default {
  namespace: 'backtracking',

  state: { ...initState },

  effects: {
    *run(action: any, { select, put }: any) {
      const { editor } = yield select((store: any) => store.monaco);
      yield put({
        type: 'destroy',
      });
      runCode(editor.getValue(), () => {
        console.log('Error');
      });
    },
  },

  reducers: {
    push(state: IBacktrackingState, { payload }: any) {
      const [instance, chartState] = payload;

      return {
        ...state,
        queue: [...state.queue, [instance, chartState]],
      };
    },
    backward(state: IBacktrackingState) {
      const prevIndex = state.currentIndex - 1;

      if (prevIndex === -1) {
        message.info('无法后退');
        return { ...state };
      }

      const [instance, data] = state.queue[prevIndex] as any;
      instance.setData(data, true);
      instance.render(data);

      return {
        ...state,
        currentIndex: prevIndex,
        percent: Math.floor((100 * (prevIndex + 1)) / state.queue.length),
      };
    },
    forward(state: IBacktrackingState) {
      const nextIndex = state.currentIndex + 1;

      if (nextIndex === state.queue.length) {
        message.info('无法前进');
        return { ...state };
      }

      const [instance, data] = state.queue[nextIndex] as any;
      instance.setData(data, true);
      instance.render(data);

      return {
        ...state,
        currentIndex: nextIndex,
        percent: Math.floor((100 * (nextIndex + 1)) / state.queue.length),
      };
    },
    destroy() {
      return { ...initState };
    },
  },
};
