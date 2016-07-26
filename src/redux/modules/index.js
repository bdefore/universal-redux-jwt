import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'fmp-redux-async-connect';
import auth from './auth';
import api from './api';

export default combineReducers({
  auth,
  api,
  reduxAsyncConnect,
  routing: routeReducer
});
