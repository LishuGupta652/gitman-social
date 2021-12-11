import { Chat, Notifications, Search } from "@mui/icons-material/";
import Person from "@mui/icons-material/Person";
import styled from "styled-components";

const TopbarContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: #1277f2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  .topbarLeft {
    flex: 3;
  }

  .topbarCenter {
    flex: 5;
  }

  .topbarRight {
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
  }
  .topbarLink {
    margin-right: 10px;
    font-style: 13px;
    cursor: pointer;
  }
  .topbarIcons {
    display: flex;
  }
  .topbarIconItem {
    margin-right: 15px;
    cursor: pointer;
    position: relative;
  }
  .topbarIconBadge {
    width: 15px;
    height: 15px;
    background-color: red;
    color: white;

    position: absolute;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    top: -5px;
    right: -5px;
  }

  .topbarImg {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
  }
  .logo {
    font-size: 24px;
    margin-left: 20px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }

  .searchbar {
    width: 100%;
    height: 30px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    outline: none;
  }
  .seachIcon {
    font-size: 20px !important;
    margin-left: 10px;
  }

  .searchInput {
    border: none;
    width: 70%;
  }
  .searchInput:focus {
    outline: none;
  }
`;

const Topbar = () => {
  return (
    <TopbarContainer>
      <div className="topbarLeft">
        <span className="logo">GitmanSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Search for friends, post or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/lishu.jpg" alt="lishugupta" className="topbarImg" />
      </div>
    </TopbarContainer>
  );
};

export default Topbar;
