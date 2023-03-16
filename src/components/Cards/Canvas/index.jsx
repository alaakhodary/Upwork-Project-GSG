import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import {
  ButtonApplay,
  ButtonSaved,
  ContentLocation,
  Div,
  DivAll,
  HeadingTitle,
  Input,
  Openjob,
  Pcopy,
  StyledLink,
} from "./style";

import Skills from "../../Skills";
import ReadMore from "../../ReadMore";

const url = `https://www.upwork.com/home/details`;

export default function TemporaryDrawer(props) {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 1110, padding: "50px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Openjob>
        <ArrowBackIosNewIcon style={{ cursor: "pointer" }} />
        <StyledLink to={"/details/" + props.detail.id}>
          <OpenInNewIcon style={{ verticalAlign: "middle", width: "19px" }} />
          Open job in a new window
        </StyledLink>
      </Openjob>

      <div>
        <HeadingTitle>Job details</HeadingTitle>
        <DivAll>
          <div
            style={{
              width: "75%",
              borderRight: "1px solid  rgb(228, 235, 228)",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                fontWeight: "500",
                padding: "20px 30px",
              }}
            >
              {props.detail.title}
            </p>
            <ContentLocation>
              <Link
                to="/#"
                style={{ color: "green", textDecoration: "underline" }}
              >
                {props.detail.Specialization}
              </Link>
              <p>{props.detail.posted}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon style={{ fill: "blue" }} />
                <p>{props.detail.location}</p>
              </div>
            </ContentLocation>
            <div
              style={{
                padding: "30px 30px",
                borderBottom: "1px solid rgb(228, 235, 228)",
              }}
            >
              <ReadMore>{props.detail.description}</ReadMore>
            </div>
            <div
              style={{
                display: "flex",
                padding: "30px 30px",
                borderBottom: "1px solid rgb(228, 235, 228)",
                gap: "15rem",
              }}
            >
              <p>{props.detail.hourlyRate}</p>
              <p>{props.detail.expertiseLevel}</p>
            </div>
            <div
              style={{
                padding: "30px 30px",
                borderBottom: "1px solid rgb(228, 235, 228)",
              }}
            >
              <h3 style={{ marginBottom: "2rem" }}>Skills and Expertise</h3>
              <Skills technologiesOfItem={props.detail.technologies} />
            </div>
            <div
              style={{
                padding: "30px 30px",
              }}
            >
              <h3 style={{ marginBottom: "2rem" }}>Activity on this job</h3>
              <div style={{ display: "grid", gap: "1rem" }}>
                <div>
                  Proposals: <span>{props.detail.proposals}</span>
                </div>
                <div>Last viewed by client: 4 hours ago</div>
                <div>Interviewing: 1</div>
                <div>Invites sent: 0</div>
                <div>Unanswered invites: 0</div>
              </div>

              <h3 style={{ marginTop: "8rem" }}>
                Upgrade your membership to see the bid range
              </h3>
            </div>
          </div>
          <div style={{ width: "25%", padding: "20px 30px" }}>
            <div style={{ textAlign: "center" }}>
              <ButtonApplay type="">Apply Now</ButtonApplay>
            </div>
            <div style={{ textAlign: "center" }}>
              <ButtonSaved type="">Save Job</ButtonSaved>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <p>Send a proposal for: 4 Connects</p>
              <p style={{ marginTop: "0.8rem" }}>Available Connects: 70</p>
            </div>
            <hr style={{ marginTop: "2rem" }} />
            <div style={{ marginTop: "1rem" }}>
              <h3>About the client</h3>
              <p style={{ marginTop: "1rem" }}>
                Pakistan Hyderabad <br /> 11:34 pm
              </p>
              <p style={{ marginTop: "1rem" }}>
                3 jobs posted <br /> 100% hire rate, 2 open jobs
              </p>
              <p style={{ marginTop: "1rem" }}>
                $145 total spent <br /> 9 hires, 0 active
              </p>
              <p style={{ marginTop: "1rem" }}>Member since Jan 19, 2023</p>
              <hr style={{ marginTop: "2rem" }} />
              <div style={{ marginTop: "1rem" }}>
                <h3>Job link</h3>
                <Input type="text" placeholder={url} disabled />
                <Pcopy>Copy link</Pcopy>
              </div>
            </div>
          </div>
        </DivAll>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Div onClick={toggleDrawer("right", true)}>{props.children}</Div>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
