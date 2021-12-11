import {
  Chat,
  Event,
  Feed,
  Group,
  HelpOutline,
  RssFeed,
  School,
  VideoCallRounded,
  WorkOutline,
} from "@mui/icons-material";
import styled from "styled-components";

const SidebarStyled = styled.div`
  flex: 3;
  height: calc(100vh - 50px);
  background-color: #fafafa;

  .wrapper {
    padding: 20px;
  }
  ul,
  li {
    list-style: none;
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
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
