import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Search } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../../config/api";
import { useAuthContext } from "../../contexts/AuthContext";

const Searchbox = ({ width, marginLift }) => {
  const [search, setSearch] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const { searchValue, setSearchValue } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_URLS}jobs`);

        if (res) {
          setAllJobs(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
    localStorage.setItem("search", search);
    const searched = [...searchValue, search];
    setSearchValue((prevState) => [...prevState, search]);
    localStorage.setItem("recentSearch", JSON.stringify(searched));
  };
  if ((width, marginLift)) {
    return (
      <Search width={width} onSubmit={handleSubmit} marginLeft={marginLift}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={allJobs.map((job) => job.title)}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.8rem",
                  width: width,
                  marginLeft: marginLift,
                },
                "& .MuiInputLabel-root": {
                  left: "11rem",
                },
              }}
              {...params}
              label="Search for Job..."
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <SearchIcon
          sx={{
            width: "40px",
            margin: "4px auto",
            color: "white",
            position: "absolute",
            right: "1px",
            backgroundColor: "rgb(60, 130, 36)",
            borderTopRightRadius: "3px",
            borderBottomRightRadius: "3px",
            height: "2.8rem",
            padding: "5px",
            bottom: "-4px",
          }}
        />
      </Search>
    );
  } else {
    return (
      <Search width={width} onSubmit={handleSubmit}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={allJobs.map((job) => job.title)}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "2.8rem",
                  width: width,
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #e4ebe4",
                },
              }}
              {...params}
              label="Search for Job..."
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <SearchIcon
          sx={{
            width: "40px",
            margin: "4px auto",
            color: "white",
            position: "absolute",
            right: "1px",
            backgroundColor: "rgb(60, 130, 36)",
            borderTopRightRadius: "3px",
            borderBottomRightRadius: "3px",
            height: "2.8rem",
            padding: "5px",
            bottom: "-4px",
          }}
        />
      </Search>
    );
  }
};

export default Searchbox;
