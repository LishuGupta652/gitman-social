import styled from "styled-components";

const PostStyled = styled.div``;

const Post = () => {
  return (
    <PostStyled>
      <div className="wrapper">
        <div className="top"></div>
        <div className="center"></div>
        <div className="bottom"></div>
      </div>
    </PostStyled>
  );
};

export default Post;
