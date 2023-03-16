import styled from "styled-components";

export const DivInput = styled.div`
  margin-bottom: 25px;
`;

export const Input = styled.input`
  margin-top: 8px;
  width: ${(props) => (props.width ? props.width : "360")}px;
  height: 40px;
  background: #ffffff;
  border: 2px solid rgb(217 217 217 / 45%);
  border-radius: 8px;
  outline: none;
  padding-left: ${(props) => (props.padding ? props.padding : "10")}px;
  display: block;
  font-size: 16px;
  accent-color: #108a00;
`;
