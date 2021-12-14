import { CardGiftcard } from "@mui/icons-material";
import styled from "styled-components";

const RightBarStyled = styled.div`
  flex: 4;

  .wrapper {
    padding: 20px 20px 0 0;

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
      width: 100%;
      border-radius: 10px;
      margin: 20px 0;
    }

    .rightbarFriendList {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .rightbarFriend {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    .rightbarProfileImgContainer {
      margin-right: 10px;
      postion: relative;
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
        <img src="rightbarAd" alt="" src="/background.jpg" />

        <h4 className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/background.jpg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">lishu gupta</span>
          </li>
        </h4>
      </div>
    </RightBarStyled>
  );
};

export default Rightbar;
