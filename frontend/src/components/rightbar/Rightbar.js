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
    .rightbarFriend {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
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
  }
`;

const Rightbar = () => {
  return (
    <RightBarStyled>
      <div className="wrapper">
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
      </div>
    </RightBarStyled>
  );
};

export default Rightbar;
