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
      border-radius: 10px;
      margin: 20px 0;
      max-widht: 100px;
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
      font-weight: 500;
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

        <div className="rightbarAd"></div>

        <ul className="rightbarFriendList">
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
        </ul>
      </div>
    </RightBarStyled>
  );
};

export default Rightbar;
