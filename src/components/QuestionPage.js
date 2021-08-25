import {connect} from 'react-redux';
import PollResults from './PollResults';
import AnswerQuestion from './AnswerQuestion';
import {Link} from 'react-router-dom';

const QuestionPage = ({question}) => {
  if (!question) {
    return (
      <div className="not-found">
        <p className="not-found-emoji">:'(</p>
        <p className="not-found-text">Sorry the question doesn't exists</p>
        <Link className="button contained md" to="/">Back to the Home</Link>
      </div>
    );
  }

  const {
    id,
    author,
    isAnswered
  } = question;

  return (
    <div className="question">
      <div className="question-head">
        <p className="bold">
          {isAnswered ? `Asked by ${author.name}` : `${author.name} asks:`}
        </p>
      </div>

      <div className="question-body">
        <div className="question-author-avatar-wrapper">
          <img
            src={author.avatarURL}
            alt={`${author.avatarURL}'s avatar`}
            width="96px"
            height="96px"
          />
        </div>

        <div className="question-details">
          {isAnswered ? <PollResults questionId={id} /> : <AnswerQuestion questionId={id} />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({questions, users, authedUser}, props) => {
  const {questionId} = props.match.params;

  const question = questions[questionId];

  return {
    question: !question ? null : {
      ...question,
      isAnswered: (
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)
      ),
      author: users[question.author]
    }
  };
};

export default connect(mapStateToProps)(QuestionPage);
