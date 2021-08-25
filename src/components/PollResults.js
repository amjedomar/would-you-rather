import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import QuestionOption from './QuestionOption';

const PollResults = props => {
  const {
    optionOne,
    optionTwo
  } = props.question;

  const totalVotes = optionOne.votes + optionTwo.votes;

  return (
    <div>
      <h2 className="poll-results-title">
        Results
      </h2>

      <div className="question-options">
        <QuestionOption {...optionOne} totalVotes={totalVotes} />
        <QuestionOption {...optionTwo} totalVotes={totalVotes} />
      </div>
    </div>
  );
};

PollResults.propTypes = {
  questionId: PropTypes.string.isRequired
};

const mapStateToProps = ({ questions, authedUser }, { questionId }) => {
  const question = questions[questionId];

  return {
    question: {
      id: question.id,
      optionOne: {
        text: question.optionOne.text,
        votes: question.optionOne.votes.length,
        isVoted: question.optionOne.votes.includes(authedUser)
      },
      optionTwo: {
        text: question.optionTwo.text,
        votes: question.optionTwo.votes.length,
        isVoted: question.optionTwo.votes.includes(authedUser)
      }
    }
  }
};

export default connect(mapStateToProps)(PollResults);
