import React from 'react';

export class Question extends React.Component{
  render() {
    return (
      <div className='Question'>
        <div className='Question-prompt'>
          <h4>{this.props.question.prompt}</h4>
        </div>
        <div className='Question-answers'>
          <input type="radio" value={this.props.question.answer[0]} name={this.props.question.prompt} id='a' />a.) {this.props.question.answer[0]} <br/>
          <input type="radio" value={this.props.question.answer[1]} name={this.props.question.prompt} id='b' />b.) {this.props.question.answer[1]} <br/>
          <input type="radio" value={this.props.question.answer[2]} name={this.props.question.prompt} id='c' />c.) {this.props.question.answer[2]} <br/>
          <input type="radio" value={this.props.question.answer[3]} name={this.props.question.prompt} id='c' />d.) {this.props.question.answer[3]} <br/>
        </div>
      </div>
    )
  }
}

export default Question;


