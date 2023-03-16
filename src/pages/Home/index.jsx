import React from "react";
import { NavLink } from "react-router-dom";

import Layout from "../../components/Layout";
import Time from "../../components/Time";
import Joblike from "../../components/Jobslike";
import Searchbox from "../../components/Searchbox";
import Profile from "../../components/Profile";
import RecentSearch from "../../components/RecentSearch";

import { Container } from "../../global/Container";
import { DivLinkPro, DivRightSide } from "./style";

import profileImg from "../../assests/profile.jpg";

const Home = () => {
  const name = localStorage.getItem("name");
  return (
    <Layout>
      <Container>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <Time />
            <Searchbox width="821px" height="250px" />
            <RecentSearch />
            <Joblike />
          </div>
          <DivRightSide>
            <Profile
              imgageProfile={profileImg}
              width="70"
              height="70"
              margin="auto"
            />
            <DivLinkPro>
              <NavLink to="/profile">{name}</NavLink>
            </DivLinkPro>
            <p style={{ marginTop: "1rem", textAlign: "center" }}>
              Web Development | Front-end
            </p>
          </DivRightSide>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
