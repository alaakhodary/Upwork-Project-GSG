import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #108a00;
  &:hover {
    text-decoration: underline;
  }
`;

export const Openjob = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Div = styled.div`
  cursor: pointer;
`;

export const DivAll = styled.div`
  border: 1px solid rgb(228, 235, 228);
  border-radius: 10px;
  height: fit-content;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 2rem;
  display: flex;
`;
export const HeadingTitle = styled.h1`
  margin-bottom: 1rem;
  margin-left: 2rem;
  margin-top: 2rem;
`;
export const ContentLocation = styled.div`
  display: grid;
  margin-top: 1rem;
  gap: 1rem;
  padding: 20px 30px;
  border-bottom: 1px solid rgb(228, 235, 228);
`;
export const ButtonApplay = styled.button`
  width: 213px;
  height: 40px;
  border: none;
  border-radius: 30px;
  color: white;
  background-color: green;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
export const ButtonSaved = styled(ButtonApplay)`
  color: green;
  background-color: white;
  border: 2px solid green;
  margin-top: 1rem;
`;
export const Input = styled.input`
  width: 213px;
  height: 40px;
  padding: 2px 15px 0px;
  background-color: #e4ebe4;
  border: 1px solid rgb(228, 235, 228);
  outline: none;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const Pcopy = styled.p`
  color: green;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
