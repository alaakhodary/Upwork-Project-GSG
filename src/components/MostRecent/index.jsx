import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URLS } from "../../config/api";
import { useAuthContext } from "../../contexts/AuthContext";
import Cards from "../Cards";
import Loading from "../Loading";

const MostRecent = () => {
  const [mostJob, setMostJob] = useState([]);
  const { loading } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`
          ${API_URLS}jobs?_sort=id&_order=desc`);
        if (res) {
          setMostJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <p style={{ padding: "20px 20px" }}>
        Browse the most recent jobs that match your skills and profile
        description to the skills clients are looking for.
      </p>
      {loading ? <Loading /> : <Cards Jobdetails={mostJob} />}
    </>
  );
};

export default MostRecent;
