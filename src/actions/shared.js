import {_getQuestions, _getUsers} from '../utils/_DATA';
import {setUsers} from './users';
import {setQuestions} from './questions';
import {setInitialized} from './initialized';

export const handleInitialData = () => dispatch => {
  Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([ users, questions ]) => {
    dispatch(setUsers(users));
    dispatch(setQuestions(questions));
    dispatch(setInitialized());
  });
};
