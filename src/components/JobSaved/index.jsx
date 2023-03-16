import React from "react";
import { useJobContext } from "../../contexts/jobContext";
import Cards from "../Cards";

const JobSaved = () => {
  const { state } = useJobContext();
  return <Cards Jobdetails={state.jobs} />;
};

export default JobSaved;
