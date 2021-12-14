import styled from "styled-components";

const PostStyled = styled.div``;

const Post = () => {
  return (
    <PostStyled>
      <div className="wrapper">
        <div className="top">
          <div className="topLeft">
            <img src="/lishu.jpg" className="postProfileImage" alt="" />
            <span className="postUsername">Lishu Gupta</span>
            <span className="postDate">4 min ago</span>
          </div>
          <div className="topRight"></div>
        </div>
        <div className="center"></div>
        <div className="bottom"></div>
      </div>
    </PostStyled>
  );
};

export default Post;
