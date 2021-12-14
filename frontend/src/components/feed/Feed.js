import styled from "styled-components";
import Share from "../share/Share";

const FeedStyled = styled.div`
  flex: 6;
  background: #fff;
  .wrapper {
    padding: 20px;
  }
`;

const Feed = () => {
  return (
    <FeedStyled>
      <div className="wrapper">
        <Share />
      </div>
    </FeedStyled>
  );
};

export default Feed;
