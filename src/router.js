import React from 'react';
import { Router, Route, Switch, routerRedux } from 'dva/router';
import IndexPage from './routes/login/IndexPage';
import Main from './routes/main/index.js'
import MainIndex from './routes/main/helloMain'
import User from './routes/user/index'
import NotFound from './routes/404/index'
const { ConnectedRouter } = routerRedux;
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Main>
          <Route path="/main" component={MainIndex} />
          {/* <Route path="/main/user" component={User} />
          <Route path="/404" component={NotFound} /> */}
        </Main>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
