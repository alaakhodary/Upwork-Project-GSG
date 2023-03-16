import styled from "styled-components";

export const DivP = styled.div`
  position: relative;
  margin-top: 3rem;
`;
export const Paragraph = styled.p`
  text-align: center;
  width: fit-content;
  margin: auto;
  background-color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #00000094;
  font-size: 16px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    z-index: -1;
    top: 50%;
    left: 0;
    background-color: #8f8e8e;
  }
`;

export const DivInputImg = styled.div`
  position: relative;
`;

export const DivSwitch = styled.div`
  margin: 50px auto;
  width: 225px;
  height: 40px;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: -0.1px;
  color: green;
  border-radius: 25px;
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  & .link {
    color: #108a00;
    margin-left: 0.3rem;
    font-weight: 600;
  }
`;

export const SubmitButton = styled.button`
  width: 22.5rem;
  color: white;
  background: #3c8224;
  margin-top: 20px;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  &[disabled] {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const DivLogos = styled.div`
  width: 125px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const DivFoo = styled.div`
  margin: auto 24px 24px;
  background-color: #001e00;
  height: 119px;
  width: 1855px;
  padding: 48px 0;
  border-radius: 8px;
`;

export const ParagraphFoo = styled.p`
  color: white;
  text-align: center;
`;
export const ErrorMessage = styled.span`
  color: red;
  font-size: 16px;
  font-family: "Arial";
  margin: 10px;
`;
