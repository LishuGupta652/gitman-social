import styled from "styled-components";
import Post from "../post/Post";
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </FeedStyled>
  );
};

export default Feed;
