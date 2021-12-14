import styled from "styled-components";
import { HeartBroken, MoreVert } from "@mui/icons-material";
const PostStyled = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: 30px 0;

  .wrapper {
    padding: 10px;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .topLeft {
    display: flex;
    align-items: center;
  }
  .postProfileImage {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
  .postUsername {
    font-size: 15px;
    fot-weight: 600;
    margin: 0 10px;
  }
  .postDate {
    font-size: 12px;
  }
  .heartIcon {
    color: red;
  }
  .center {
    margin: 20px 0;
  }
  .postImage {
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .postBottomLeft {
    display: flex;

    img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      cursor: pointer;
    }
    .postLikeCounter {
      font-size: 15px;
    }
  }
  .postCommentText {
    cursor: pointer;
    border-bottom: 1px dashed gray;
    font-size: 15px;
  }
`;

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
          <div className="topRight">
            <MoreVert />
          </div>
        </div>
        <div className="center">
          <span className="postText">Hey! This is my first post.</span>
          <img className="postImage" src="/background.jpg" alt="lishu gupta" />
        </div>
        <div className="bottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.webp" alt="" />
            <span className="likeCounter">23 people liked it </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">10 comments</span>
          </div>
        </div>
      </div>
    </PostStyled>
  );
};

export default Post;
