import {ANSWER_QUESTION, SAVE_QUESTION, SET_QUESTIONS} from '../actions/questions';

const questions = (state = {}, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION:
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
