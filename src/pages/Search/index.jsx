import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_URLS } from "../../config/api";

import Accordion from "../../components/Accordion";
import Layout from "../../components/Layout";
import JobSaved from "../../components/JobSaved";
import Searchbox from "../../components/Searchbox";
import Cards from "../../components/Cards";

import { Container } from "../../global/Container";

import { DivAllFlex, DivContent } from "./style";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useJobContext } from "../../contexts/jobContext";

const Search = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [filterJob, setFilterJob] = useState([]);

  useEffect(() => {
    (async () => {
      const q = localStorage.getItem("search");
      try {
        const res = await axios.get(`${API_URLS}jobs?title_like=${q}`);
        if (res) {
          setFilterJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const {
    state: { count },
  } = useJobContext();
  const size = `saved Jobs (${count})`;

  return (
    <Layout>
      <Container>
        <DivAllFlex>
          <div>
            <Accordion />
          </div>
          <DivContent>
            <Box
              sx={{
                "& .MuiBox-root": {
                  padding: "0",
                  width: "100%",
                },
              }}
            >
              <Box sx={{ borderBottom: 1 }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  style={{ padding: "15px 20px 0 20px" }}
                >
                  <Tab label="Search" {...a11yProps(0)} />
                  <Tab label={size} {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div style={{ marginBottom: "1rem", padding: "20px" }}>
                  <Searchbox width="765px" />
                </div>
                <Cards Jobdetails={filterJob} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <JobSaved />
              </TabPanel>
            </Box>
          </DivContent>
        </DivAllFlex>
      </Container>
    </Layout>
  );
};

export default Search;
