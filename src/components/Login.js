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
        <h3 className="login-title">Login</h3>
        <p className="login-description">please login to continue</p>

        <div className="login-select">
          <UserSelect onChange={this.handleChange} />
        </div>

        <button
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
