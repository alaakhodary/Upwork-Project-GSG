import React from "react";
import styled from "styled-components";

const DivFormCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid rgb(0 0 0 / 16%);
  border-radius: 10px;
  width: 33%;
  padding: 2rem 3rem;
  margin: 5rem auto;
`;

const FormCard = ({ children }) => {
  return <DivFormCard>{children}</DivFormCard>;
};

export default FormCard;
