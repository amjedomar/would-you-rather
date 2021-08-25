import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Question = ({question}) => {
  const {
    id,
    author,
    optionOne
  } = question;

  return (
    <div className="question">
      <div className="question-head">
        <p className="bold">
          {author.name} asks:
        </p>
      </div>

      <div className="question-body">
        <div className="question-author-avatar">
          <img
            src={author.avatarURL}
            alt={`${author.avatarURL}'s avatar`}
            width="80px"
            height="80px"
          />
        </div>

        <div className="question-details">
          <p className="question-title">
            Would You Rather
          </p>

          <p className="question-brief">
            ...{optionOne.text.slice(0, 15)}...
          </p>

          <Link className="button fullwidth outlined sm" to={`/questions/${id}`}>
            View Poll
          </Link>
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired
};

const mapStateToProps = ({questions, users}, {id}) => {
  const question = questions[id];

  return {
    question: {
      ...question,
      author: users[question.author]
    }
  }
};

export default connect(mapStateToProps)(Question);
