import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import styled from "styled-components";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
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
