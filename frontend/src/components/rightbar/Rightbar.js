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
            <div className="rightbarProfileImgContainer"></div>
          </li>
        </h4>
      </div>
    </RightBarStyled>
  );
};

export default Rightbar;
