import React from "react";
import styled from "styled-components";

const RegisterStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;

  .registerWrapper {
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

  .registerLogo{
      font-size: 50px;
      font-weight: bold;
      color: #1775ee;

  }
  .registerDesc {
      font-size: 24px;
  }

  .registerBox {
      height: 300px;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .registerInput {
      height: 50px;
      border-radius: 10px;
      border: 1px solid gray;
      font-size: 18px;
      padding: 20px;
  }
  .registerInput:foucs {
      outline: none;
  }
  .registerButton{ 
      height: 50px;
      border-radius: 10px;
      border: none;
      background-color: #1775ee;
      color: white;
      font-size: 18px;
      font-weight: bold; 
      curson: pointer;
  }
  .registerForgot{ 
      text-align:center;
      color: #1775ee;
  }
  .registerRegisterButton{
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
    <RegisterStyled>
      <div className="registerWrapper">
        <div className="left">
          <h3 className="registerLogo">GitmanSocial</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on GitmanSocial.
          </span>
        </div>
        <div className="right">
          <div className="registerBox">
            <input
              type="text"
              placeholder="Username"
              className="registerInput"
            />
            <input type="email" placeholder="Email" className="registerInput" />
            <input type="email" placeholder="Email" className="registerInput" />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>
            <span className="registerForgot">Forgot Password ? </span>
            <button className="registerRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </RegisterStyled>
  );
};

export default Register;
