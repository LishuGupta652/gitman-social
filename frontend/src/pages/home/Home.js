import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Feed } from "@mui/icons-material";
import styled from "styled-components";
import Rightbar from "../../components/rightbar/Rightbar";

const HomeContainer = styled.div``;

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
