import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import Page1 from './views/Page1';

/**
 * Define bundles for Code Splitting and Lazy loading.
 * 
 */

const Page2 =  Loadable({
  loader: () => import('./views/Page2' /* webpackChunkName: "page2" */),
  loading: () => <span> Loading... </span>,
});

const Page3 =  Loadable({
  loader: () => import('./views/Page3' /* webpackChunkName: "page3" */),
  loading: () => <span> Loading... </span>,
});

const Page4 =  Loadable({
  loader: () => import('./views/Page4' /* webpackChunkName: "page4" */),
  loading: () => <span> Loading... </span>,
});

/**
 * A complete Shell with all routes and views.
 * 
 */

const Shell = () => {
  return (
    <div>

      <Link to = '/page1'> page1 </Link>
      <Link to = '/page2'> page2 </Link>
      <Link to = '/page3'> page3 </Link>
      <Link to = '/page4'> page4 </Link>

      <Switch>

        <Route exact path = '/'>
          <Redirect to = '/page1' />
        </Route>

        <Route path = '/page1' component = { () => <Page1 /> }></Route>
        <Route path = '/page2' component = { () => <Page2 /> }></Route>
        <Route path = '/page3' component = { () => <Page3 /> }></Route>
        <Route path = '/page4' component = { () => <Page4 /> }></Route>

      </Switch>

    </div>
  );
};

export default Shell;