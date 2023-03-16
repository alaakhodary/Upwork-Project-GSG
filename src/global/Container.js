import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10%;
  margin: auto;
`;
export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap + "px"};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
  flex-direction: ${(props) => props.direction};
`;
