import React from 'react';
import QuestionList from './QuestionList';
import styled from 'styled-components';

const Styles = styled.div`
  .Question-prompt {
    color: black;
    margin: 1.5rem auto;
  }

  .Question-answers {
    margin: 1rem auto;
    color: #616565;
  }

  input {
    margin: 0rem 1rem;
  }

  .btn-primary {
    margin: 0 0 1rem 1.5rem;
  }
`;

export class MCQ extends React.Component{
  render() {
    return (
      <Styles>
        <QuestionList questions={this.props.questions} quizName={this.props.quizName} />
      </Styles>
    )
  }
}

export default MCQ;