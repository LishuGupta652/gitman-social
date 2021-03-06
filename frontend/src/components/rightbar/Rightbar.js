import { CardGiftcard } from "@mui/icons-material";
import styled from "styled-components";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const RightBarStyled = styled.div`
  flex: 4;
  gird-area: rightbar;
  .wrapper {
    padding: 20px 20px 0 0;
    padding: 20px 50px;

    .birthdayContainer {
      display: flex;
      align-items: center;
    }
    .birthdayImg {
      width: 60px;
      color: red;
    }
    .birthdayText {
      font-weight: 300;
      font-size: 15px;
    }

    .rightbarAd {
      border-radius: 10px;
      margin: 20px 0;
      max-width: 100%;
      margin-left: 10px;
      border-radius: 20px;
      max-height: 400px;
      width: 100%;
      object-fit: cover;
    }
    .rightbarTitle {
      margin-bottom: 20px;
    }

    .rightbarFriendList {
      padding: 0;
      margin: 0;
      list-style: none;
      margin-left: 20px;
    }
    .rightbarProfileImgContainer {
      margin-right: 10px;
      position: relative;
    }
    .rightbarProfileImg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .rightbarFriend {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    .rightbarOnline {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: limegreen;
      position: absolute;
      top: -5px;
      right: 0;
      border: 2px solid white;
    }
    .rightbarUsername {
      font-weight: bold;
      text-transform: capitalize;
    }

    .rightbarTitle {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .rightbarInfo {
      margin-bottom: 30px;
    }
    .rightbarInfoItem {
      margin-bottom: 10px;
    }
    .rightbarInfoKey {
      font-weight: 500;
      margin-right: 15px;
      color: #555;
    }
    .rightbarInfoValue {
      font-weight: 300;
    }
    .rightbarFollowings {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .rightbarFollowing {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    .rightbarFollowingImg {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <CardGiftcard className="birthdayImg" />
          <span className="birthdayText">
            <b>Lishu gupta</b> and <b>2 other friend </b> have a birthday today!
          </span>
        </div>

        <img className="rightbarAd" alt="" src="/assets/add.jpg" />

        <ul className="rightbarFriendList">
          {Users.map((user, index) => (
            <Online user={user} key={index} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h1 className="rightbarTitle">User Information</h1>
        <div className="rightbarInfo">
          <div className="righbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="righbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Gwalior</span>
          </div>
          <div className="righbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="lishu.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lishu gupta</span>
          </div>
          <div className="rightbarFollowing">
            <img src="lishu.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lishu gupta</span>
          </div>
          <div className="rightbarFollowing">
            <img src="lishu.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lishu gupta</span>
          </div>
          <div className="rightbarFollowing">
            <img src="lishu.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lishu gupta</span>
          </div>
          <div className="rightbarFollowing">
            <img src="lishu.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lishu gupta</span>
          </div>
          <div className="rightbarFollowing">
            <img src="lishu.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lishu gupta</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <RightBarStyled>
      <div className="wrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </RightBarStyled>
  );
};

export default Rightbar;
