
import { message } from 'antd';
import { routerRedux } from 'dva/router';//路由跳转
import { fetchLogin } from '../services/server'
export default {

  namespace: 'login',

  state: {
    remember: true
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetchLogin({ payload }, { call, put, select }) {  // eslint-disable-line
      const { data: { code, msg } } = yield call(fetchLogin, payload)//call异步
      // debugger
      if (code === 200) {//请求成功
        yield put({ type: 'login', payload });//同步到redux中
        yield put(routerRedux.push({//路由跳转
          pathname: '/main/hello'
        }))
        yield select(({ login: { username } }) => {
          sessionStorage.setItem('userInfo', username)//设置本地缓存
        })
        message.info(`login ${msg}`)
      } else {//请求失败
        message.warn(msg);
      }
      return code
    },
  },

  reducers: {
    login(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
