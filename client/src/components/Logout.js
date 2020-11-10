import React from 'react';
import Button from 'react-bootstrap/button';

export class Logout extends React.Component {
  contructor (props) {
    this.logout = this.logout.bind(this);
  }
  
  logout = () => {
    fetch('/auth/logout', {credentials: 'include'})
    
  }
  
  render() {
    return (
      <Button onClick={this.logout} href="/" variant="outline-light">Logout</Button>
    )
  }
}