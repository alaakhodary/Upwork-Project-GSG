import React from "react";
import styled from "styled-components";
import { Flex } from "../../global/Container";

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 5px;
  border-radius: 15px;
  &:checked {
    background: #0d6efd;
  }
`;

const CheckLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: black;
  cursor: pointer;
`;

export default function CheckboxInput(props) {
  if (props.imgLabel) {
    return (
      <Flex style={{ paddingRight: "17px" }} gap="13">
        <CheckBox id={props.id} type="checkbox" />
        <CheckLabel htmlFor={props.id}>
          <img src={props.imgLabel} alt="rating" />
        </CheckLabel>
      </Flex>
    );
  } else {
    return (
      <Flex style={{ paddingRight: "17px" }} gap="13">
        <CheckBox id={props.id} type="checkbox" />
        <CheckLabel htmlFor={props.id}>{props.label}</CheckLabel>
      </Flex>
    );
  }
}
