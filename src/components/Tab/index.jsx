import * as React from "react";

import PropTypes from "prop-types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import MostRecent from "../MostRecent";
import JobSaved from "../JobSaved";
import BestMatches from "../BestMatches";
import { useJobContext } from "../../contexts/jobContext";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    state: { count },
  } = useJobContext();
  const size = `saved Jobs (${count})`;

  return (
    <Box
      sx={{
        "& .MuiBox-root": {
          padding: "0",
          width: "820px",
        },
      }}
    >
      <Box sx={{ borderBottom: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="black"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab label="Best Matches" {...a11yProps(0)} />
          <Tab label="Most Recent" {...a11yProps(1)} />
          <Tab label={size} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BestMatches />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MostRecent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <JobSaved />
      </TabPanel>
    </Box>
  );
}
