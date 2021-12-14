import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import styled from "styled-components";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

const HomeContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 2.5fr 6fr 3.5fr;
  grid-template-rows: 1fr;
  gap: 0px 14px;
  grid-template-areas: "sidebar feed rightbar";
  justify-items: stretch;
`;

const Home = () => {
  return (
    <div>
      <Topbar />
      <HomeContainer>
        <Sidebar />
        <Feed />
        <Rightbar />
      </HomeContainer>
    </div>
  );
};

export default Home;
