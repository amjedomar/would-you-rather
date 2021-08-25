import {_getQuestions, _getUsers} from '../utils/_DATA';
import {addUsers} from './users';
import {addQuestions} from './questions';
import {setInitialized} from './initialized';

export const handleInitialData = () => dispatch => {
  Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([ users, questions ]) => {
    dispatch(addUsers(users));
    dispatch(addQuestions(questions));
    dispatch(setInitialized());
  });
};
