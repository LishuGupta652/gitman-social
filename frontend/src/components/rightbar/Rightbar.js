import { CardGiftcard } from "@mui/icons-material";
import styled from "styled-components";

const RightBarStyled = styled.div`
  flex: 4;
`;

const Rightbar = () => {
  return (
    <RightBarStyled>
      <div className="wrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/like.png" alt="" />
          <CardGiftcard className="birthdayImg" />
          <span className="birthdayText">
            <b>Lishu gupta</b> and <b>2 other friend </b> have a birthday today!
          </span>
        </div>
      </div>
    </RightBarStyled>
  );
};

export default Rightbar;
