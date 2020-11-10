import React from 'react';
import Question from './Question';

export class QuestionList extends React.Component {
  setAnswerEvent(e) {
    console.log(e.target)
  }
  
  render() {
    return (
      <form onSubmit={this.setAnswerEvent} method="POST" action={`/mcqsubmit/${this.props.quizName}`} name="MCQ">
        <div className="Question-list">
          {
            this.props.questions.map( question => {
              return <Question
                key={question.key}
                question={question}
              />
            })
          }
        </div>
        <hr />
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    )
  }
}

export default QuestionList;