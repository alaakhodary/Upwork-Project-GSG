import styled from "styled-components";

export const ToggleSaveButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  cursor: pointer;
  top: 40px;
  right: 30px;
`;

export const Cardjob = styled.div`
  position: relative;
  padding: 20px 20px;
  width: 100%;
  border-bottom: 1px solid #0000004f;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    & h3 {
      color: #3c8224;
    }
  }
`;

export const JobTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Jobdetail = styled.div`
  font-size: 14px;
  display: flex;
  color: rgb(0 30 0 / 61%);
  gap: 2px;
  margin-bottom: 10px;
`;

export const JobDescription = styled.p`
  line-height: 22px;
  font-size: 14px;
  color: rgb(0, 30, 0);
  font-family: Arial;
  margin-bottom: 10px;
`;
export const Pproposal = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #5e6d55;
  & span {
    color: black;
  }
`;
export const Button = styled.button`
  padding: 10px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  background-color: green;
  color: white;
  border-radius: 7px;
`;
