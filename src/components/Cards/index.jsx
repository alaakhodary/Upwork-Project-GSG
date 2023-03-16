import React, { useEffect } from "react";
/* import { useNavigate } from "react-router-dom"; */

import ReadMore from "../ReadMore";
import Skills from "../Skills";
import Canvas from "../Cards/Canvas";

import { useJobContext } from "./../../contexts/jobContext";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  Cardjob,
  Jobdetail,
  JobTitle,
  Pproposal,
  ToggleSaveButton,
} from "./style";

const Cards = ({ Jobdetails }) => {
  const { state, addToSaved, removeFromSaved } = useJobContext();

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(state.jobs));
    localStorage.setItem("count", state.count);
  }, [state.jobs, state.count]);

  const handleToggleSaved = (detail) => {
    if (state.jobs.find((item) => item.id === detail.id)) {
      removeFromSaved(detail.id);
    } else {
      addToSaved(detail);
    }
  };

  /*   const navigate = useNavigate(); */

  return (
    <>
      {Jobdetails?.map((detail) => (
        <Canvas detail={detail}>
          <Cardjob key={detail.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <JobTitle /* onClick={() => navigate(`/details/${detail.id}`)} */>
                {detail.title}
              </JobTitle>
              <ToggleSaveButton onClick={() => handleToggleSaved(detail)}>
                {state.jobs.find((item) => item.id === detail.id) ? (
                  <FavoriteIcon color="success" />
                ) : (
                  <FavoriteBorderIcon color="success" />
                )}
              </ToggleSaveButton>
            </div>
            <Jobdetail>
              {detail.hourlyRate} - {detail.expertiseLevel} - Est.
              {detail.estimatedTime},{detail.hoursPerWeek} - Budget:
              {detail.budget} - Posted in:{detail.posted}
            </Jobdetail>
            <ReadMore>{detail.description}</ReadMore>
            <div style={{ marginLeft: "-9px" }}>
              <Skills technologiesOfItem={detail?.technologies} />
            </div>
            <Pproposal>
              Proposals: <span>{detail.proposals}</span>
            </Pproposal>
            <div style={{ fontSize: "12px" }}>
              {detail.amountSpent}
              <span style={{ color: "rgb(0 30 0 / 72%)", marginLeft: "4px" }}>
                spent
              </span>
              <span style={{ marginLeft: "5px", fontSize: "14px" }}>
                {detail.location}
              </span>
            </div>
          </Cardjob>
        </Canvas>
      ))}
    </>
  );
};

export default Cards;
