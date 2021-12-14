import styled from "styled-components";
import Post from "../post/Post";
import Share from "../share/Share";
import { Posts } from "../../dummyData";

const FeedStyled = styled.div`
  flex: 6;
  gird-area: feed;
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
        {Posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </FeedStyled>
  );
};

export default Feed;
