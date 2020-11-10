import React from 'react';
import MCQ from './MCQ';
import styled from 'styled-components';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`
  .embed {
    display: block;
    max-width: 900px;
    height: auto;
    margin: 3rem auto;
  } 

  .MCQ {
    margin: auto;
    max-width: 800px;
  }
`;


export class ModuleLayout extends React.Component{
  render () {
    return ( 
      <Styles>
        <Container>
          <div class="embed">
            <ResponsiveEmbed aspectRatio="16by9">
              <iframe title={this.props.quiz.videoTitle} src={this.props.quiz.videoSrc} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ResponsiveEmbed>  
          </div>
          <div className="MCQ">
            <MCQ questions={this.props.quiz.questions} quizName={this.props.quiz.name}/>
          </div>
        </Container>
      </Styles>
    )
  }
}