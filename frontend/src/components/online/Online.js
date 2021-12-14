import React from "react";
import styled from "styled-components";

const OnlineStyled = styled.div``;
const Online = ({ user }) => {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img src="/background.jpg" className="rightbarProfileImg" alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">lishu gupta</span>
      </li>
    </div>
  );
};

export default Online;
