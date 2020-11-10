import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


export const ResultTable = (props) => {
  return(
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SQL</th>
            <th>NoSQL</th>
            <th>XSS</th>
            <th>CSRF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.nameList.SQL}%</td>
            <td>{props.nameList.NOSQL}%</td>
            <td>{props.nameList.XSS}%</td>
            <td>{props.nameList.CSRF}%</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}