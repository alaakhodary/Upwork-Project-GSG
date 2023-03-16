import styled from "styled-components";

export const DivInputFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;
`;
export const DivCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const LabelCheck = styled.label`
  font-size: 14px;
  line-height: 1.4rem;
  font-family: arial;
`;
export const Span = styled.span`
  color: #108a00;
  font-weight: 600;
`;
export const Button = styled.button`
  background-color: #108a00;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 1rem;
`;
export const Switcher = styled.div`
  margin: 30px auto 30px;
  width: fit-content;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: -0.1px;
  color: black;
  & .link {
    color: #108a00;
    margin-left: 0.3rem;
    font-weight: 600;
  }
`;
export const DivLog = styled.div`
  display: flex;
  align-items: center;
  gap: 87rem;
  width: 100%;
  padding: 10px;
`;
export const SpanSwitch = styled.span`
  color: #108a00;
  font-weight: 500;
  cursor: pointer;
`;
