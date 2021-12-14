import styled from "styled-components";
import { feed, PermMedia } from "@mui/icons-material";
const ShareStyled = styled.div`
  flex: 6;
  background: #fff;
  width: 100%;
  height: 170px;
  border-radius: 10px;
  background-color: #ccc;
  wrapper {
  }
`;

const Share = () => {
  return (
    <ShareStyled>
      <div className="wrapper">
        <div className="top">
          <img className="profilePicture" src="/assets/person/1.jpeg" alt="" />
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
              <PermMedia className="icon" />
              <div className="optionText">Photos or video</div>
            </div>
          </div>
        </div>
      </div>
    </ShareStyled>
  );
};

export default Share;
