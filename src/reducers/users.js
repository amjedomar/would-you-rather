import {RECEIVE_USERS} from '../actions/users';
import {ANSWER_QUESTION, SAVE_QUESTION} from '../actions/questions';

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          questions: state[action.userId].questions.concat([action.question.id])
        }
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.questionId]: action.answer
          }
        }
      };
    default:
      return state;
  }
};

export default users;
