import React from 'react';
import Results from './components/Results';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const Styled = styled.div`
h1 {
  display: block;
  text-align: center;
  margin: 2rem auto;
}

.boldtext {
  font-weight: bold;
}

.notes {
  margin: 2.5rem 1.2rem;
}
`;

export const ResultsPage = () => (
  <Styled>
    <h1>Results</h1>
    <Container>
    <Results />
    <div className="notes">
      <p>This page is used to display your current MCQ scores for each module.</p>
      <p> <span className="boldtext">Note:</span> MCQs may be taken multiple times, but only your most recent result is recorded.  Unattempted MCQs are 0% by default.</p>
    </div>
    </Container>
  </Styled>
)