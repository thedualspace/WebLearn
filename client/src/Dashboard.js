import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import SQLImage from './assets/SQLimage.jpg';
import NOSQLImage from './assets/NOSQLimage.jpg';
import XSSImage from './assets/XSSimage.jpg';
import CSRFImage from './assets/CSRFimage.jpg';

const Styled = styled.div`
h2 {
  display: block;
  text-align: center;
  margin: 1.5rem 0 auto;
}

.card-deck .card {
  transition: all .2s ease-in-out;
  margin: 2rem;

  &:hover {
    border: 1px solid rgba(0,0,0,.375);
  }
} 

.card-deck .card a {
   color: #007bff;
   transition: all .2s ease-in-out;

   &:hover {
    color: #0056b3;
   }
 }
`;


//No return statement reqd as brackets indicate that the statement within () is on a single line.
export const Dashboard = (props) => (
  <Styled>
    <Container>
      <h2>Dashboard</h2>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={SQLImage} />
          <Card.Body>
            <Card.Title>SQL Injection</Card.Title>
            <Card.Text>
              Learn about one of the most common web hacking techniques with this introductory SQL injection lesson.
            </Card.Text>
            <Card.Link href="/modules/SQL" className="stretched-link">SQL Module</Card.Link>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={NOSQLImage} />
          <Card.Body>
            <Card.Title>NoSQL Injection</Card.Title>
            <Card.Text>
              Expand your database security skillset with exploits focused on NoSQL databases.
            </Card.Text>
            <Card.Link href="/modules/NOSQL" className="stretched-link">NoSQL Module</Card.Link>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={XSSImage} />
          <Card.Body>
            <Card.Title>XSS</Card.Title>
            <Card.Text>
              Cross-site scripting (XSS) attacks enable attackers to inject client-side scripts into web pages viewed by other users.
            </Card.Text>
            <Card.Link href="/modules/XSS" className="stretched-link">XSS Module</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={CSRFImage} />
          <Card.Body>
            <Card.Title>CSRF</Card.Title>
            <Card.Text>
              Learn how to execute unauthorised commands with Cross-site request forgery (CSRF).
            </Card.Text>
            <Card.Link href="/modules/CSRF" className="stretched-link">CSRF Module</Card.Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  </Styled>
)