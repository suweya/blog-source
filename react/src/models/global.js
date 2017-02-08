import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { auth, getSelfInfo, createUser } from '../services/users';
import TOKEN_KEY from '../constants/constants';
import { set, remove } from '../utils/storageUtil';

export default {
  namespace: 'global',
  state: {
    isLogin: false,
    account: {
      userName: null,
      ability: null,
      userId: null,
      email: null,
    },
  },
  effects: {
    // 授权
    *auth({ payload: { username, password } }, { call, put }) {
      try {
        const { data } = yield call(auth, { username, password });
        if (data) {
          const { user, accessToken: { token } } = data;
          // save accessToken
          set(TOKEN_KEY, token);
          yield put({
            type: 'authSuccess',
            payload: { account: user },
          });
          yield put(routerRedux.push('/posts'));
        }
      } catch (e) {
        message.error('登录失败...');
      }
    },
    // 注册
    *register({ payload: { username, password, email } }, { put, call }) {
      const { data } = yield call(createUser, username, password, email);
      if (data) {
        yield put({
          type: 'auth',
          payload: { username, password },
        });
      }
    },
    // 注销
    *logout(_, { put }) {
      yield put({
        type: 'authFail',
      });
      remove(TOKEN_KEY);
      yield put(routerRedux.push('/login'));
    },
  },
  reducers: {

  },
  subscriptions: {

  },
};
