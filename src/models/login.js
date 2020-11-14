
import { message } from 'antd';
import { routerRedux } from 'dva/router';//路由跳转
// import queryString from 'query-string';//url参数

export default {

  namespace: 'login',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetchLogin({ payload }, { call, put }) {  // eslint-disable-line
      // setTimeout(function*() {
       
      // },2000)
      yield put({ type: 'login',payload });
      yield put(routerRedux.push({//路由跳转
        pathname: '/main'
        // search: queryString.stringify({
        //   from: 'pro',
        //   to: 'main',
        // })
      }))
    },
  },

  reducers: {
    login(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
