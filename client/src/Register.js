import React from 'react';
import styled from 'styled-components';
import LoginImage from './assets/inner-6.jpg';

const Styled = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}

.body {
  background-image: url(${LoginImage});
  background-repeat: no-repeat;
  background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  font-family: 'Montserrat', sans-serif;
	height: 100vh;
}

h1 {
	font-weight: bold;
	margin: 0;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #222222;
	background-color: #222222;
	color: #BBBBAD;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	margin: 0.5rem 0 0 0;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 480px;
	max-width: 100%;
	min-height: 380px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
}

.log-in-container {
	left: 0;
	width: 100%;
	z-index: 2;
}
`;

export class Register extends React.Component{
  render() {
    return(
      <Styled>
        <div className="body">
          <div className="container" id="container">
           <div className="form-container log-in-container">
              <form action='/auth/register' method="POST">
                <h1>Register</h1>
                <input type="email" placeholder="Email" name="email" required/>
                <input type="text" placeholder="Username" name="username" required/>
                <input type="password" placeholder="Password" name="password" required/>
                <button>Register</button>
                <a href="/login">Already have an account?</a>
              </form>
            </div>
          </div>
        </div>
      </Styled>
    )
  }
}