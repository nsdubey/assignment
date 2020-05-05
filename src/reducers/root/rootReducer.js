import { combineReducers } from 'redux';

import itunesReducer from '../itunes/itunesReducer';


export const rootReducer = combineReducers({
  itunes: itunesReducer
});
