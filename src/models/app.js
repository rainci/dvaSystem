import { message } from 'antd';
import { routerRedux } from 'dva/router';//路由跳转
import { fetchInit } from '../services/server'

export default {

  namespace: 'app',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location => {
        const reg = /main/;
        const pathval = location.pathname && location.pathname.match(reg)
        if (pathval) {
          dispatch({
            type: 'initData',
          })
        }
      })
    },
  },

  effects: {
    *initData({ payload }, { call, put, select }) {  // eslint-disable-line
      const menuData = yield select(({ data }) => data)//menu data
      if (menuData) return;//如果存在，就返回，不再发送请求
      const { data: { code, msg, ...data } } = yield call(fetchInit, payload)//call异步
      yield put({ type: 'save', payload: data });
    },
  },

  reducers: {
    save(state, action) {
      // 请求用户
      // 请求菜单
      return { ...state, ...action.payload };
    },
  },

};
