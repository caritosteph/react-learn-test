import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './route';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const app = document.getElementById('app');

render(
  <Router history = {browserHistory} routes = {routes}/>,
  app
);
