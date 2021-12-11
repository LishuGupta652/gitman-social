import "topbar.css";
import { Search } from "@mui/icons-material/";

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
        <div className="topbarLinks"></div>
      </div>
    </div>
  );
};

export default Topbar;
