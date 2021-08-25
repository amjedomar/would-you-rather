import {connect} from 'react-redux';
import UserDetails from './UserDetails';

const LeaderBoard = props => {
  const {userIds} = props;

  return (
    <div>
      {userIds.map(id => (
        <UserDetails id={id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({users}) => {
  const userIds = Object.keys(users).sort((a, b) => {
    const aScore = users[a].questions.length + Object.keys(users[a].answers).length;
    const bScore = users[b].questions.length + Object.keys(users[b].answers).length;
    return bScore - aScore;
  });

  return {
    userIds
  };
};

export default connect(mapStateToProps)(LeaderBoard);
