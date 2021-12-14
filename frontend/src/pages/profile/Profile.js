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

  .profileRight {
    flex: 9;
  }

  .profileCover {
    height: 320px;
    position: relative;
  }
  .profileCoverImg {
    width: 100%;
    height: 250px;
    object-fit: cover;
    background-attachment: fixed;
  }
  .profileUserImg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 150px;
    border: 3px solid white;
  }

  .profileInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .profileInfoName {
    font-size: 24px;
  }
  .profileInfoDesc {
    font-weight: 300;
  }
  .profileRightBottom {
    display: flex;
  }
`;

const Profile = () => {
  return (
    <div>
      <Topbar />
      <ProfileContainer>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="https://unsplash.it/1024"
                className="profileCoverImg"
                alt=""
              />
              <img src="/lishu.jpg" className="profileUserImg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Lishu gupta</h4>
              <h4 className="profileInfoDesc">hey there </h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </ProfileContainer>
    </div>
  );
};

export default Profile;
