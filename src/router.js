import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/login/IndexPage';
import Main from './routes/main/index.js'
import MainIndex from './routes/main/helloMain'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Main>
          <Route exact path="/main" component={MainIndex} />
        </Main>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
