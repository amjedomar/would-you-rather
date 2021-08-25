import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA';
import {hideLoading, showLoading} from 'react-redux-loading-bar';

export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const addQuestions = (questions) => ({
  type: ADD_QUESTIONS,
  questions
});

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question
});

const answerQuestion = ({authedUser, qid, answer}) => ({
  type: ANSWER_QUESTION,
  authedUser,
  qid,
  answer
});

export const handleSaveQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
  const {authedUser} = getState();

  dispatch(showLoading());

  _saveQuestion({
    optionOneText,
    optionTwoText,
    author: authedUser
  }).then(question => {
    dispatch(addQuestion(question));
    dispatch(hideLoading());
  }).catch(() => {
    dispatch(hideLoading());
    alert('An error occurred, try again');
  });
};

export const handleAnswerQuestion = (qid, answer) => (dispatch, getState) => {
  const {authedUser} = getState();

  const payload = {
    authedUser,
    qid,
    answer
  };

  dispatch(showLoading());

  _saveQuestionAnswer(payload).then(() => {
    dispatch(answerQuestion(payload));
    dispatch(hideLoading());
  }).catch(() => {
    dispatch(hideLoading());
    alert('An error occurred, try again');
  });
};
