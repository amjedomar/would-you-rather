import {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {handleAnswerQuestion} from '../actions/questions';

class AnswerQuestion extends Component {
  state = {
    answer: null
  };

  handleChange = e => {
    this.setState({ answer: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {id} = this.props.question;
    const {answer} = this.state;

    this.props.dispatch(handleAnswerQuestion(id, answer));
  };

  render() {
    const {optionOne, optionTwo} = this.props.question;

    return (
      <div>
        <h3 className="question-title">
          Would You Rather
        </h3>

        <form onSubmit={this.handleSubmit}>
          <div className="question-option-field">
            <input
              className="question-option-field-radio"
              id="optionOne"
              type="radio"
              name="option"
              value="optionOne"
              checked={this.state.answer === 'optionOne'}
              onChange={this.handleChange}
            />

            <label
              className="question-option-field-label"
              htmlFor="optionOne"
            >
              {optionOne.text}
            </label>
          </div>

          <div className="question-option-field">
            <input
              className="question-option-field-radio"
              id="optionTwo"
              type="radio"
              name="option"
              value="optionTwo"
              checked={this.state.answer === 'optionTwo'}
              onChange={this.handleChange}
            />

            <label
              className="question-option-field-label"
              htmlFor="optionTwo"
            >
              {optionTwo.text}
            </label>
          </div>

          <button
            disabled={this.state.answer === null}
            className="button contained fullwidth md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

AnswerQuestion.propTypes = {
  questionId: PropTypes.string.isRequired
};

const mapStateToProps = ({questions, users}, {questionId}) => {
  const {id, optionOne, optionTwo} = questions[questionId];

  return {
    question: {
      id,
      optionOne,
      optionTwo
    }
  };
};

export default connect(mapStateToProps)(AnswerQuestion);
