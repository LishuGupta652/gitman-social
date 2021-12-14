import React from "react";
import styled from "styled-components";

const LoginStyled = styled.div``;
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
        <div className="right"></div>
      </div>
    </LoginStyled>
  );
};

export default Login;
