import {combineReducers} from 'redux';

import {loadingBarReducer as loadingBar} from 'react-redux-loading-bar';
import authedUser from './authedUser';
import initialized from './initialized';
import questions from './questions';
import users from './users';

const rootReducer = combineReducers({
  loadingBar,
  authedUser,
  initialized,
  questions,
  users
});

export default rootReducer;
