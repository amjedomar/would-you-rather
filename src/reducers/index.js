import {combineReducers} from 'redux';

import authedUser from './authedUser';
import initialized from './initialized';
import questions from './questions';
import users from './users';

const rootReducer = combineReducers({
  authedUser,
  initialized,
  questions,
  users
});

export default rootReducer;
