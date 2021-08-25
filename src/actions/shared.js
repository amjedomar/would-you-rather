import {_getQuestions, _getUsers} from '../utils/_DATA';
import {receiveUsers} from './users';
import {receiveQuestions} from './questions';
import {setInitialized} from './initialized';

export const handleInitialData = () => dispatch => {
  Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([ users, questions ]) => {
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setInitialized());
  });
};
