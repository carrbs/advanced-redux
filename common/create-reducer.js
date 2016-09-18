import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default function createReducer() {
  return combineReducers({
    app: (state = {}) => state,
    routing
  });
}
