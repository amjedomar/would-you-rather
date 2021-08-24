import PropTypes from 'prop-types';

const QuestionOption = props => {
  const {
    text,
    votes,
    totalVotes,
    isVoted
  } = props;

  const rootClassName = [
    'question-option',
    isVoted ? 'voted' : ''
  ].join(' ');

  const percentage = Math.floor((votes / totalVotes) * 100);

  return (
    <div className={rootClassName}>
      <p className="question-option-text">
        {text}
      </p>

      <div className="progress">
        {percentage > 0 && (
          <div
            className="progress-bar"
            style={{
              width: `${percentage}%`,
              paddingRight: percentage > 6 ? 6 : 0
            }}
          >
            {percentage}%
          </div>
        )}
      </div>

      <p className="question-option-votes">
        {votes} out of {totalVotes} votes
      </p>

      <div className="question-option-vote-mark">
        Your vote
      </div>
    </div>
  );
};

QuestionOption.propTypes = {
  text: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  isVoted: PropTypes.bool.isRequired
};

export default QuestionOption;