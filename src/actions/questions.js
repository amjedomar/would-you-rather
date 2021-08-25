import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA';
import {hideLoading, showLoading} from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions
});

const saveQuestion = ({userId, question}) => ({
  type: SAVE_QUESTION,
  question,
  userId
});

const answerQuestion = ({userId, questionId, answer}) => ({
  type: ANSWER_QUESTION,
  userId,
  questionId,
  answer
});

export const handleAddQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
  const {authedUser} = getState();

  dispatch(showLoading());

  _saveQuestion({
    optionOneText,
    optionTwoText,
    author: authedUser
  }).then(question => {
    dispatch(saveQuestion({
      question,
      userId: authedUser
    }));
    dispatch(hideLoading());
  }).catch(() => {
    dispatch(hideLoading());
    alert('An error occurred, try again');
  });
};

export const handleAnswerQuestion = (questionId, answer) => (dispatch, getState) => {
  const {authedUser} = getState();

  dispatch(showLoading());

  _saveQuestionAnswer({
    authedUser,
    qid: questionId,
    answer
  }).then(() => {
    dispatch(answerQuestion({
      userId: authedUser,
      questionId,
      answer
    }));
    dispatch(hideLoading());
  }).catch(() => {
    dispatch(hideLoading());
    alert('An error occurred, try again');
  });
};
