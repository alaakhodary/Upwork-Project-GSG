import styled from "styled-components";

export const DivRightSide = styled.div`
  width: 18rem;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgb(228, 235, 228);
  height: fit-content;
`;

export const DivLinkPro = styled.div`
  text-align: center;
  text-decoration: underline;
  font-size: 21px;
  margin-top: 1rem;
  & a {
    color: black;
  }
  & a:hover {
    color: green;
  }
  &:hover {
    color: green;
  }
`;
