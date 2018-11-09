
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import blogNewReducer from 'views/BlogNew/reducer';

export default combineReducers({
  routing: routerReducer,
  blogNewReducer
});
