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
      <Main>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/main/hello" component={MainIndex} />
          <Route path="/main/user" component={User} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Main>
    </Router>
  );
}

export default RouterConfig;
