import React from 'react';
import { Router, Route } from 'dva/router';
import Login from './routes/login/login'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
