import {_saveQuestionAnswer} from '../utils/_DATA';
import {hideLoading, showLoading} from 'react-redux-loading-bar';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions
});

const answerQuestion = ({authedUser, qid, answer}) => ({
  type: ANSWER_QUESTION,
  authedUser,
  qid,
  answer
});

export const handleAnswerQuestion = (qid, answer) => (dispatch, getState) => {
  const {authedUser} = getState();

  dispatch(showLoading());

  const payload = {
    authedUser,
    qid,
    answer
  };

  _saveQuestionAnswer(payload).then(() => {
    dispatch(answerQuestion(payload));
    dispatch(hideLoading());
  }).catch(() => {
    dispatch(hideLoading());
    alert('An error occurred, try again');
  });
};
