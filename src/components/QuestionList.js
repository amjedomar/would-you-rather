import {Component} from 'react';
import {connect} from 'react-redux';
import Tabs from './Tabs';
import Question from './Question';

class QuestionList extends Component {
  state = {
    activeTab: 0
  };

  handleNavigate = (activeTab) => {
    this.setState({activeTab});
  }

  render() {
    const {activeTab} = this.state;

    const {unansweredQuestionIds, answeredQuestionIds} = this.props;
    const questionIds = activeTab === 0 ? unansweredQuestionIds : answeredQuestionIds;

    return (
      <div>
        <Tabs
          tabs={['Unanswered Questions', 'Answered Questions']}
          activeTab={activeTab}
          onNavigate={this.handleNavigate}
        />

        {questionIds.map(questionId => (
          <Question key={questionId} id={questionId} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  const questionIds = Object.keys(questions).sort((a, b) => {
    return questions[b].timestamp - questions[a].timestamp;
  });

  const unansweredQuestionIds = [];
  const answeredQuestionIds = [];

  questionIds.forEach(questionId => {
    const question = questions[questionId];

    if (
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    ) {
      answeredQuestionIds.push(questionId);
    } else {
      unansweredQuestionIds.push(questionId);
    }
  });

  return {
    unansweredQuestionIds,
    answeredQuestionIds
  };
};


export default connect(mapStateToProps)(QuestionList);
