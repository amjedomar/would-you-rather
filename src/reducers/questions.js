import {ANSWER_QUESTION, ADD_QUESTION, ADD_QUESTIONS} from '../actions/questions';

const questions = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id] : action.question
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
      };
    default:
      return state;
  }
};

export default questions;
