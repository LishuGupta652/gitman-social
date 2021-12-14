import React from "react";
import styled from "styled-components";

const LoginStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginWrapper {
    width: 70%;
    height: 70%;
    display: flex;
  }

  .left, .right{
      flex; 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
  }
  .right{
  }

  .loginLogo{
      font-size: 50px;
      font-weight: bold;
      color: #1775ee;

  }
  .loginDesc {
      font-size: 24px;
  }

  .loginBox {
      height: 300px;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .loginInput {
      height: 50px;
      border-radius: 10px;
      border: 1px solid gray;
      font-size: 18px;
      padding: 20px;
  }
  .loginInput:foucs {
      outline: none;
  }
  .loginButton{ 
      height: 50px;
      border-radius: 10px;
      border: none;
      background-color: #1775ee;
      color: white;
      font-size: 18px;
      font-weight: bold; 
      curson: pointer;
  }
  .loginForgot{ 
      text-align:center;
      color: #1775ee;
  }
  .loginRegisterButton{
      align-self: center;;
      padding: 10px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #42b72a;
    color: white;
    font-size: 18px;
    font-weight: bold; 
    curson: pointer;
  }

`;
const Register = () => {
  return (
    <LoginStyled>
      <div className="loginWrapper">
        <div className="left">
          <h3 className="loginLogo">GitmanSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on GitmanSocial.
          </span>
        </div>
        <div className="right">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Register</button>
            <span className="loginForgot">Forgot Password ? </span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Register;
