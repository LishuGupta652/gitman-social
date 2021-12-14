import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import styled from "styled-components";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

const HomeContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 600px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 2.5fr 6fr 3.5fr;
    gap: 0px 14px;
    justify-items: center;
    align-items: center;
  }
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
