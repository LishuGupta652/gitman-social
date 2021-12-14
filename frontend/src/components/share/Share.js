import styled from "styled-components";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
const ShareStyled = styled.div`
  flex: 6;
  background: #fff;
  width: 100%;
  height: 170px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  .wrapper {
    padding: 10px;
    .top {
      display: flex;
      align-items: center;
    }
    .top img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }
    .shareInput {
      width: 80%;
      border: none;
    }
    .shareInput:focus {
      outline: none;
    }
    hr {
      margin: 20px;
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .options {
        display: flex;
        margin-left: 20px;

        .option {
          display: flex;
          align-items: center;
          margin: 15px;
          cursor: pointer;

          .icon {
            font-size: 18px;
            margin-right: 10px;
          }
          .optionText {
            font-size: 14px;
            fotnt-weight: 500;
          }
        }
      }

      .shareButton {
        padding: 7px;
        border: none;
        border-radius: 5px;
        background-color: green;
        font-weight: 500;
        margin-right: 20px;
        cursor: pointer;
        color: white;
      }
    }
  }
`;

const Share = () => {
  return (
    <ShareStyled>
      <div className="wrapper">
        <div className="top">
          <img className="profilePicture" src="/lishu.jpg" alt="" />
          <input
            type="text"
            className="shareInput"
            placeholder="What's in your mind ? "
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="options">
            <div className="option">
              <PermMedia htmlColor="tomato" className="icon" />
              <div className="optionText">Photos or video</div>
            </div>
            <div className="option">
              <Label htmlColor="blue" className="icon" />
              <div className="optionText">Tag</div>
            </div>
            <div className="option">
              <Room htmlColor="green" className="icon" />
              <div className="optionText">Location</div>
            </div>
            <div className="option">
              <EmojiEmotions htmlColor="goldenrod" className="icon" />
              <div className="optionText">Feelings</div>
            </div>
          </div>

          <button className="shareButton">share</button>
        </div>
      </div>
    </ShareStyled>
  );
};

export default Share;
