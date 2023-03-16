import React from "react";

import styled from "styled-components";

import { useAuthContext } from "../../contexts/AuthContext";

export const Recent = styled.div`
  display: flex;
  margin: 10px;
  & span {
    color: #108a00;
    margin-right: 10px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const RecentSearch = () => {
  const { searchValue } = useAuthContext();

  return (
    <Recent>
      Recent Searches:
      {searchValue.slice(-3).map((value, index) => (
        <span key={index}>{value + ","}</span>
      ))}
    </Recent>
  );
};

export default RecentSearch;
