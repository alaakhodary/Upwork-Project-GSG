import React from "react";

import profileImg from "../../assests/profile.jpg";
import imgPortfolio from "../../assests/protfolioImg.PNG";

import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Profile from "../../components/Profile";
import Skills from "../../components/Skills";

import { API_URLS } from "../../config/api";

import { Container } from "../../global/Container";

import useFetch from "../../hooks/useFetch";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import {
  Button,
  ButtonProSitting,
  DivIcon,
  DivIcons,
  DivLeft,
  DivProfile,
  DivRight,
} from "./style";

const Profiles = () => {
  const { data, error, isLoading } = useFetch(`${API_URLS}user/1`);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <span>{error}</span>;
  }

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let status = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  return (
    <Layout>
      <Container>
        <DivProfile>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2rem",
              padding: "2rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <Profile
                imgageProfile={profileImg}
                width="90"
                height="90"
                margin="0"
              />
              <div style={{ display: "grid", gap: "1rem" }}>
                <h3>{data?.name}</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon />
                  <span>
                    {data?.location} - {hours}:{minutes} {status} local time
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Button>See Public View</Button>
              <ButtonProSitting>Profile Settings</ButtonProSitting>
            </div>
          </div>
          <div
            style={{
              padding: "20px 0px 0px 20px",
              display: "flex",
            }}
          >
            <DivRight>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <p style={{ fontWeight: "500" }}>Video introduction</p>
                <DivIcon>
                  <AddOutlinedIcon
                    style={{
                      color: "green",
                    }}
                  />
                </DivIcon>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "30px",
                }}
              >
                <p style={{ fontWeight: "500" }}>Hours per week</p>
                <DivIcon>
                  <EditIcon
                    style={{
                      color: "green",
                      fontSize: "23px",
                      padding: "2px",
                    }}
                  />
                </DivIcon>
              </div>
              <div style={{ color: "rgb(0 30 0 / 71%)", marginTop: "15px" }}>
                <p style={{ marginBottom: "0.3rem" }}>More than 30 hrs/week </p>
                <p>No contract-to-hire preference set</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "30px",
                }}
              >
                <p style={{ fontWeight: "500" }}>Languages</p>
                <DivIcon>
                  <AddOutlinedIcon
                    style={{
                      color: "green",
                    }}
                  />
                </DivIcon>
                <DivIcon>
                  <EditIcon
                    style={{
                      color: "green",
                      fontSize: "23px",
                      padding: "2px",
                    }}
                  />
                </DivIcon>
              </div>
              <div style={{ color: "rgb(0 30 0 / 71%)", marginTop: "15px" }}>
                <p style={{ marginBottom: "0.3rem" }}>
                  English: Conversational
                </p>
                <p>Arabic: Native or Bilingual</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "30px",
                }}
              >
                <p style={{ fontWeight: "500" }}>Education</p>
                <DivIcon>
                  <AddOutlinedIcon
                    style={{
                      color: "green",
                    }}
                  />
                </DivIcon>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "15px",
                }}
              >
                <p style={{ fontWeight: "500" }}>University of Palestine</p>
                <DivIcon>
                  <EditIcon
                    style={{
                      color: "green",
                      fontSize: "23px",
                      padding: "2px",
                    }}
                  />
                </DivIcon>
                <DivIcon>
                  <DeleteIcon
                    style={{
                      color: "green",
                      fontSize: "23px",
                      padding: "2px",
                    }}
                  />
                </DivIcon>
              </div>
              <div style={{ color: "rgb(0 30 0 / 71%)", marginTop: "15px" }}>
                <p style={{ marginBottom: "0.2rem", width: "180px" }}>
                  Bachelor of Science in Information Technology 2018-2022
                </p>
              </div>
            </DivRight>
            <DivLeft>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <p style={{ fontWeight: "700", fontSize: "21px" }}>
                    {data?.experience}
                  </p>
                  <DivIcon>
                    <EditIcon
                      style={{
                        color: "green",
                        fontSize: "23px",
                        padding: "2px",
                      }}
                    />
                  </DivIcon>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <p>$15.00/hr</p>
                    <DivIcon>
                      <EditIcon
                        style={{
                          color: "green",
                          fontSize: "23px",
                          padding: "2px",
                        }}
                      />
                    </DivIcon>
                  </div>
                  <div>
                    <DivIcon>
                      <LinkOutlinedIcon
                        style={{
                          color: "green",
                          fontSize: "23px",
                          padding: "2px",
                        }}
                      />
                    </DivIcon>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  gap: "15rem",
                  fontSize: "14px",
                  padding: "1rem",
                  borderBottom: "1px solid rgb(228, 235, 228)",
                }}
              >
                <p>{data?.discription}</p>
                <DivIcons>
                  <DeleteIcon
                    style={{
                      color: "green",
                      fontSize: "23px",
                      padding: "2px",
                      border: " 1px solid #00000042",
                      borderRadius: "50%",
                    }}
                  />
                </DivIcons>
              </div>
              <div
                style={{
                  padding: "2rem 1rem",
                  borderBottom: "1px solid rgb(228, 235, 228)",
                }}
              >
                <h3>Work History</h3>
                <p style={{ marginTop: "0.5rem", fontSize: "14px" }}>
                  No work yet. Once you start getting hired on Upwork, your work
                  with clients will show up here.
                </p>
              </div>

              <div
                style={{
                  padding: "2rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <h3>Portfolio</h3>
                <DivIcon>
                  <AddOutlinedIcon
                    style={{
                      color: "green",
                    }}
                  />
                </DivIcon>
              </div>
              <div
                style={{
                  width: "18rem",
                  height: "18rem",
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={imgPortfolio}
                  style={{ maxWidth: "100%" }}
                  alt="imgagePortfolio"
                />
              </div>
              <p
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid rgb(228, 235, 228)",
                  paddingBottom: "2rem",
                }}
              >
                Talent who add portfolios to their profile are more likely to
                win work. (+20%)
              </p>
              <div
                style={{
                  padding: "2rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <h3>Skills</h3>
                <DivIcon>
                  <EditIcon
                    style={{
                      color: "green",
                      fontSize: "23px",
                      padding: "2px",
                    }}
                  />
                </DivIcon>
              </div>
              <div
                style={{
                  marginTop: "-2rem",
                  padding: "1rem",
                  borderBottom: "1px solid rgb(228, 235, 228)",
                }}
              >
                <Skills technologiesOfItem={data?.Skills} />
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Your Project Catalog </h3>
                <Button>Manage Projects</Button>
              </div>
              <p
                style={{
                  padding: "1rem",
                  width: "548px",
                  fontSize: "14px",
                  lineHeight: "20px",
                  textAlign: "start",
                  color: "#001e00",
                }}
              >
                Projects are a new way to earn on Upwork that helps you do more
                of the work you love to do. Create project offerings that
                highlight your strengths and attract more clients.
              </p>
            </DivLeft>
          </div>
        </DivProfile>
      </Container>
    </Layout>
  );
};

export default Profiles;
