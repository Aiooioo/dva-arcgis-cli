
import {
  INIT_MAP,
} from '../constants/action-types';

export default {

  namespace: 'agsmap',

  state: {

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    *init({ payload }, { call, put }) { // eslint-disable-line
      yield put({ type: INIT_MAP, payload });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
