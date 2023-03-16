import React from "react";
import styled from "styled-components";
import { Flex } from "../../global/Container";

const RadioBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 5px;
  border-radius: 15px;
  &:checked {
    background: #0d6efd;
  }
`;

const RadioLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: black;
  cursor: pointer;
`;

export default function RadioInput(props) {
  return (
    <Flex style={{ paddingRight: "17px" }} gap="13">
      <RadioBox name="condition" id={props.id} type="radio" />
      <RadioLabel htmlFor={props.id}>{props.label}</RadioLabel>
    </Flex>
  );
}
