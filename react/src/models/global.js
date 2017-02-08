import { authentication, fetchUser, createUser } from '../services/users'
import { routerRedux } from 'dva/router'
import { message } from 'antd'
import LOCAL_STORAGE_TOKEN_KEY from '../constants/constants'

export default {
  namespace: 'global',
  state: {
    isLogin: false,
    account: {
      userName: null,
      ability: null,
      userId: null,
      email: null
    }
  },
  effects: {
    authentication: function *({ payload: { username, password } }, { call, put }) {
      try {
        const { data } = yield call(authentication, { username, password })
        if (data) {
          const { user, accessToken: { token } } = data

          window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
          yield put({
            type: 'AUTH_SUCCESS',
            payload: { account: user }
          })
        }
      } catch(e) {

      }
    }
  },
  reducers: {

  },
  subscriptions: {

  }
}
