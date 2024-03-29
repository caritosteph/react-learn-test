import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './route';
import loadCourses from './actions/CourseActions';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const app = document.getElementById('app');
const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store = {store}>
    <Router history = {browserHistory} routes = {routes}/>
  </Provider>,
  app
);
