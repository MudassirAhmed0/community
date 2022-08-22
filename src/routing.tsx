import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import 'app/index.scss';
import { Layout } from 'app/ui-kit';
import { Main } from 'app/containers/main';
import Community from 'community';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>

          <Route path='/courses'>
            <Redirect to={'/'} />
          </Route>

          <Route path='/jobs'>
            <Redirect to={'/'} />
          </Route>
          <Route path='/community'>
            <Community/>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
