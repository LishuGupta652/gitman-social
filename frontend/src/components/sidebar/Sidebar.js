import {
  Chat,
  Event,
  Group,
  HelpOutline,
  RssFeed,
  School,
  VideoCallRounded,
  WorkOutline,
} from "@mui/icons-material";

import { Users } from "../../dummyData";

import styled from "styled-components";
import CloseFriend from "../closeFriend/CloseFriend";

const SidebarStyled = styled.div`
  flex: 2;
  height: calc(100vh - 50px);
  background-color: #fafafa;
  overflow-y: scroll;
  position: sticky;
  top: 50px;
  .wrapper {
    padding: 20px;
  }
  ul,
  li {
    list-style: none;
  }
  .listItem {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .icon {
    margin: 0 10px;
  }
  .button {
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
  }

  hr {
    margin: 20px auto;
  }
  .friendList {
    list-style: none;
  }
  .friendListItem {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .friendImage {
    width: 32px;
    height: 32px;
    margin: 0 10px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarStyled>
      <div className="wrapper">
        <ul className="list">
          <li className="listItem">
            <RssFeed className="icon" />
            <span className="listItemText">Feed</span>
          </li>
          <li className="listItem">
            <Chat className="icon" />
            <span className="listItemText">Chat</span>
          </li>
          <li className="listItem">
            <VideoCallRounded className="icon" />
            <span className="listItemText">Videos</span>
          </li>
          <li className="listItem">
            <Group className="icon" />
            <span className="listItemText">Groups</span>
          </li>
          <li className="listItem">
            <HelpOutline className="icon" />
            <span className="listItemText">Bookmarks</span>
          </li>
          <li className="listItem">
            <WorkOutline className="icon" />
            <span className="listItemText">Questions</span>
          </li>
          <li className="listItem">
            <Event className="icon" />
            <span className="listItemText">Jobs</span>
          </li>
          <li className="listItem">
            <School className="icon" />
            <span className="listItemText">Events</span>
          </li>
          <li className="listItem">
            <RssFeed className="icon" />
            <span className="listItemText">Courses</span>
          </li>
        </ul>
        <button className="button">Show more</button>
        <hr />
        <ul className="friendList">
          {Users.map((user, i) => {
            return <CloseFriend user={user} key={i} />;
          })}
        </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
