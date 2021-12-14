import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import styled from "styled-components";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const Profile = () => {
  return (
    <div>
      <Topbar />
      <ProfileContainer>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop"></div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </ProfileContainer>
    </div>
  );
};

export default Profile;
