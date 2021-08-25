import {Component} from 'react';
import UserSelect from './UserSelect';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

class Login extends Component {
  state = {
    userId: null
  };

  handleChange = (userId) => {
    this.setState({userId});
  };

  handleSubmit = () => {
    this.props.dispatch(setAuthedUser(this.state.userId));
  };

  render() {
    return (
      <div>
        <h3 style={{marginBottom: 4}} className="center">Login</h3>
        <p style={{marginBottom: 24}} className="center">please login to continue</p>

        <UserSelect onChange={this.handleChange} />

        <button
          style={{marginTop: 16}}
          disabled={this.state.userId === null}
          className="button contained fullwidth md"
          onClick={this.handleSubmit}
        >
          Login
        </button>
      </div>
    );
  }
}

export default connect()(Login);
