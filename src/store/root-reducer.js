import { combineReducers } from 'redux';
import { data } from './reducers/data/data';
import { app } from './reducers/app/app';
import { user } from './reducers/user/user';

export const NameSpace = {
  DATA: `data`,
  APP: `app`,
  USER: `user`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
  [NameSpace.USER]: user,
});
