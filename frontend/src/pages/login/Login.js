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
`;
const Login = () => {
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
          <div className="loginBox"></div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
