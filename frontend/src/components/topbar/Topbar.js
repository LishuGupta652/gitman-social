import "./topbar.css";
import { Chat, Notifications, Search } from "@mui/icons-material/";
import Person from "@mui/icons-material/Person";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">GitmanSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input
            type="searchInput"
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
        <img src="/lishu.jpg" alt="lishugupta" />
      </div>
    </div>
  );
};

export default Topbar;
