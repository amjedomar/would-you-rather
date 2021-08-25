import {connect} from 'react-redux';

const UserDetails = props => {
  const {
    name,
    avatarURL,
    answers,
    questions
  } = props.user;

  const score = answers + questions;

  return (
    <div className="user-details">
      <div className="user-details-head">
        <img
          src={avatarURL}
          alt={`${avatarURL}'s avatar`}
          width="80px"
          height="80px"
        />
      </div>

      <div className="user-details-body">
        <h3 className="user-details-name">{name}</h3>

        <div className="user-details-row">
          <p>Answered Questions</p>
          <p>{answers}</p>
        </div>

        <div className="user-details-row">
          <p>Created Questions</p>
          <p>{questions}</p>
        </div>
      </div>

      <div className="user-details-footer">
        <div className="score">
          <div className="score-head">
            Score
          </div>

          <div className="score-body">
            <div className="score-value">
              {score}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({users}, {id}) => {
  const user = users[id];

  return {
    user: {
      ...user,
      questions: user.questions.length,
      answers: Object.keys(user.answers).length
    }
  }
};

export default connect(mapStateToProps)(UserDetails);
