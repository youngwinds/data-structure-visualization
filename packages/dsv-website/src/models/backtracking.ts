import { runCode } from '@dsv-website/utils/run-code';

interface IBacktrackingState {
  percent: number;
  progressFormat: string;
  queue: [];
  currentIndex: number;
  disableBackward: boolean;
  disableForward: boolean;
  disablePlay: boolean;
  disableBuild: boolean;
  isRunning: boolean;
}

const initState: IBacktrackingState = {
  percent: 0,
  progressFormat: '',
  queue: [],
  currentIndex: 0,
  disableBackward: true,
  disableForward: true,
  disablePlay: false,
  disableBuild: false,
  isRunning: false,
};

export default {
  namespace: 'backtracking',

  state: { ...initState },

  effects: {
    *build(action: any, { select, put }: any) {
      const { editor } = yield select((store: any) => store.monaco);
      yield put({
        type: 'destroy',
      });

      runCode(editor.getValue(), () => {
        console.log('Error');
      });

      yield put({
        type: 'init',
      });
    },

    *run(action: any, { select, put, call }: any) {
      const state: IBacktrackingState = yield select(
        (store: any) => store.backtracking,
      );

      const { currentIndex, queue } = state;

      yield put({
        type: 'update',
        payload: {
          disableForward: true,
          disableBackward: true,
          disablePlay: true,
          disableBuild: true,
          isRunning: true,
        },
      });

      for (let i = currentIndex; i < queue.length - 1; i++) {
        const newState: IBacktrackingState = yield select(
          (store: any) => store.backtracking,
        );
        if (newState.currentIndex !== i) {
          break;
        }
        yield put.resolve({
          type: 'forward',
        });
      }

      yield put({
        type: 'update',
        payload: {
          disableForward: true,
          disableBackward: false,
          disablePlay: false,
          disableBuild: false,
          isRunning: false,
        },
      });
    },

    *backward(action: any, { put, select }: any) {
      const state: IBacktrackingState = yield select(
        (store: any) => store.backtracking,
      );

      const { currentIndex, queue, isRunning } = state;
      const prevIndex = currentIndex - 1;

      const [instance, config] = queue[prevIndex] as any;

      yield put({
        type: 'update',
        payload: {
          currentIndex: prevIndex,
          percent: Math.floor((100 * (prevIndex + 1)) / queue.length),
          progressFormat: `${prevIndex + 1}/${queue.length}`,
          disableForward: isRunning ? true : false,
          disableBackward: isRunning ? true : prevIndex === 0,
        },
      });

      yield instance.renderAsync(config.data);
    },

    *forward(action: any, { put, select }: any) {
      const state: IBacktrackingState = yield select(
        (store: any) => store.backtracking,
      );
      const { currentIndex, queue, isRunning } = state;

      const nextIndex = currentIndex + 1;

      const [instance, config] = queue[nextIndex] as any;

      yield put({
        type: 'update',
        payload: {
          currentIndex: nextIndex,
          percent: Math.floor((100 * (nextIndex + 1)) / queue.length),
          progressFormat: `${nextIndex + 1}/${queue.length}`,
          disableBackward: isRunning ? true : false,
          disableForward: isRunning ? true : nextIndex === queue.length - 1,
        },
      });

      yield instance.renderAsync(config.data);
    },
  },

  reducers: {
    push(state: IBacktrackingState, { payload }: any) {
      console.log('push');

      const [instance, chartState] = payload;
      return {
        ...state,
        disableForward: Math.floor(100 * (1 / (state.queue.length + 1))) >= 100,
        queue: [...state.queue, [instance, chartState]],
        percent: Math.floor(100 * (1 / (state.queue.length + 1))),
        progressFormat: `${1}/${state.queue.length + 1}`,
      };
    },

    update(state: IBacktrackingState, { payload }: any) {
      return { ...state, ...payload };
    },

    init(state: IBacktrackingState) {
      return {
        ...state,
        disableForward: Math.floor(100 * (1 / state.queue.length)) >= 100,
        percent: Math.floor(100 * (1 / state.queue.length)),
        progressFormat: `${1}/${state.queue.length}`,
      };
    },

    destroy() {
      return { ...initState };
    },
  },
};
