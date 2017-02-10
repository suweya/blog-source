import React from 'react';
import { Router, Route } from 'dva/router';
import Login from './routes/login/login';
import Register from './routes/register/register'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default RouterConfig;
