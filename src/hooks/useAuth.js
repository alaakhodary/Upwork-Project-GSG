import { useState } from "react";

const useAuth = () => {
  const searchedValues = JSON.parse(localStorage.getItem("recentSearch")) || [];
  const [searchValue, setSearchValue] = useState(searchedValues);
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  const logout = () => {
    setToken("");
    setUsername("");
    setAuthorized(false);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  };

  return {
    authorized,
    setAuthorized,
    loading,
    setLoading,
    errors,
    setErrors,
    token,
    setToken,
    username,
    setUsername,
    logout,
    searchValue,
    setSearchValue,
  };
};

export default useAuth;
