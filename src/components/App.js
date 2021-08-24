import {Component} from 'react';
import Copyright from './Copyright';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import Login from './Login';
import Nav from './Nav';
import {Route} from 'react-router-dom';
import QuestionList from './QuestionList';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';

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
        <Nav />

        <div className="container">
          {this.props.authed ? (
            <>
              <Route path="/" exact component={QuestionList} />
              <Route path="/new" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
            </>
          ) : (
            <Login />
          )}

          <Copyright />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ initialized, authedUser }) => ({
  initialized,
  authed: authedUser !== null
});

export default connect(mapStateToProps)(App);
