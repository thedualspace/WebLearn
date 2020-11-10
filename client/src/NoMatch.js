import React from 'react';
import Container from 'react-bootstrap/Container';

//No return statement reqd as brackets indicate that the statement within () is on a single line.
export const NoMatch = () => {
  return (
    <Container>
      <h1>Oops! Looks like that URL doesn't exist</h1>
    </Container>
  )
}