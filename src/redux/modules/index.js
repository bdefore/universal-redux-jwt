import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import auth from './auth';
import api from './api';

export default combineReducers({
  auth: auth,
  api: api,
  reduxAsyncConnect,
  routing: routeReducer
});
