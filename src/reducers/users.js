import {SET_USERS} from '../actions/users';
import {ANSWER_QUESTION} from '../actions/questions';

const users = (state = {}, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    default:
      return state;
  }
};

export default users;
