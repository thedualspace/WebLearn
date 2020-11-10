import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'; //Recall this is not performant
import styled from 'styled-components';
import {Logout} from './Logout';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }

  .navbar-toggler #basic-navbar-nav {
    color: green;
  }

  .logout {
    margin: 0 1rem;
  }
`;

 export const NavigationBar = () => (
   <Styles>
     <Navbar expand='lg' variant="dark" >
       <Navbar.Brand href="/dashboard">WebLearn</Navbar.Brand>
       <Navbar.Toggle aria-controls='basic-navbar-nav' />
       <Navbar.Collapse id='basic-navbar-nav'>
         <Nav className='ml-auto' >
           <Nav.Item><Nav.Link href='/dashboard'>Home</Nav.Link></Nav.Item>
           <Nav.Item><Nav.Link href='/results'>Results</Nav.Link></Nav.Item>
           <Nav.Item className="logout"> <Logout /> </Nav.Item>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
   </Styles>
 )