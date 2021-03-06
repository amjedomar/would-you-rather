import {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {handleInitialData} from '../actions/shared';
import LoadingBar from './LoadingBar';
import Nav from './Nav';
import Login from './Login';
import QuestionList from './QuestionList';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Attributions from './Attributions';

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(handleInitialData());
  }

  render() {
    if (!this.props.initialized) {
      return <p className="center">Loading...</p>;
    }

    return (
      <>
        <LoadingBar />

        <Nav />

        <div className="container">
          {this.props.authed ? (
            <>
              <Route path="/" exact component={QuestionList} />
              <Route path="/questions/:questionId" exact component={QuestionPage} />
              <Route path="/add" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
            </>
          ) : (
            <Login />
          )}

          <Attributions />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({initialized, authedUser}) => ({
  initialized,
  authed: authedUser !== null
});

export default connect(mapStateToProps)(App);
