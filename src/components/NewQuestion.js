import {Component} from 'react';
import {connect} from 'react-redux';
import {handleSaveQuestion} from '../actions/questions';
import {Redirect} from 'react-router-dom';

class NewQuestion extends Component {
  state = {
    toHome: false,
    optionOneText: '',
    optionTwoText: ''
  };

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  };

  handleSubmit = e => {
    e.preventDefault();

    const {optionOneText, optionTwoText} = this.state;

    this.props.dispatch(handleSaveQuestion(optionOneText, optionTwoText));

    this.setState({toHome: true});
  };

  render() {
    if (this.state.toHome) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h2 className="new-question-title">Create New Question</h2>

        <h4 className="new-question-subtitle">Would You Rather...</h4>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Option One Text"
            name="optionOneText"
            value={this.state.optionOneText}
            onChange={this.handleChange}
          />

          <p className="new-question-or-text">OR</p>

          <input
            type="text"
            className="input"
            placeholder="Option Two Text"
            name="optionTwoText"
            value={this.state.optionTwoText}
            onChange={this.handleChange}
          />

          <br />

          <button
            className="button contained fullwidth md"
            disabled={this.state.optionOneText.length === 0 || this.state.optionTwoText.length === 0}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
