import React from "react";
import styled from "styled-components";

const DivProfile = styled.div`
  height: ${(props) => (props.height ? props.height : "32")}px;
  width: ${(props) => (props.width ? props.width : "32")}px;
  margin: ${(props) => (props.margin ? props.margin : "auto")};
`;

const ImageProfile = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;

const Profile = ({ imgageProfile, width, height, margin }) => {
  if ((width, height, margin)) {
    return (
      <DivProfile width={width} height={height} margin={margin}>
        <ImageProfile src={imgageProfile} alt="Personimage" />
      </DivProfile>
    );
  } else {
    return (
      <DivProfile>
        <ImageProfile src={imgageProfile} alt="Personimage" />
      </DivProfile>
    );
  }
};

export default Profile;
