import React, { useState, useEffect } from "react";
import axios from "axios";

import Cards from "../Cards";

import { API_URLS } from "../../config/api";

import styled from "styled-components";

import Loading from "../Loading";

import { useAuthContext } from "../../contexts/AuthContext";

const Btn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: green;
    color: white;
    cursor: pointer;
  }
`;

function BestMatches() {
  const [job, setJob] = useState([]);
  const [count, setCount] = useState(4);
  const handleLoadJobs = () => {
    setCount((prevCount) => prevCount + 3);
  };
  const { loading } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_URLS}jobs?_page=1&_limit=${count}`);
        if (res) {
          setJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [count]);

  return (
    <div>
      <p style={{ padding: "20px 20px" }}>
        Browse jobs that match your experience to a client's hiring preferences.
        Ordered by most relevant.
      </p>
      {loading ? <Loading /> : <Cards Jobdetails={job} />}
      <Btn onClick={handleLoadJobs}>load more</Btn>
    </div>
  );
}

export default BestMatches;
