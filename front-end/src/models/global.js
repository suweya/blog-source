import { authentication, fetchUser, createUser } from '../services/users'
import { routerRedux } from 'dva/router'
import { message } from 'antd'

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
    authentication: function *({ payload: { userName, passWord } }, { call, put }) {

    }
  },
  reducers: {

  },
  subscriptions: {

  }
}
