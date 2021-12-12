import styled from "styled-components";

const FeedStyled = styled.div`
  flex: 6;
  background: #fff;
  wrapper {
    padding: 20px;
  }
`;

const Feed = () => {
  return (
    <FeedStyled>
      <div className="wrapper">wrapper</div>
    </FeedStyled>
  );
};

export default Feed;
