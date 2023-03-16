import React from "react";

import { DivInput, Input } from "./style";

const InputCard = ({
  disc,
  typeInput,
  id,
  value,
  onChangeFunction,
  width,
  padding,
}) => {
  if (width) {
    return (
      <DivInput>
        <Input
          id={id}
          type={typeInput}
          value={value}
          placeholder={disc}
          onChange={onChangeFunction}
          width={width}
          padding={padding}
        />
      </DivInput>
    );
  } else {
    return (
      <DivInput>
        <Input
          id={id}
          type={typeInput}
          value={value}
          placeholder={disc}
          onChange={onChangeFunction}
        />
      </DivInput>
    );
  }
};

export default InputCard;
