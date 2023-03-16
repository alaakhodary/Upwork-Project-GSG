import styled from "styled-components";

export const DivProfile = styled.div`
  border: 1px solid rgb(228, 235, 228);
  border-radius: 10px;
  height: fit-content;
  width: 90%;
  margin: 4rem auto;
  display: grid;
`;
export const Button = styled.button`
  padding: 5px;
  width: 12rem;
  height: 40px;
  border: 2px solid green;
  border-radius: 30px;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
  color: green;
  cursor: pointer;
  &:hover {
    background-color: rgb(228, 235, 228);
  }
`;
export const ButtonProSitting = styled(Button)`
  background-color: green;
  color: white;
  &:hover {
    background-color: #1ec608;
    border: 2px solid #1ec608;
  }
`;
export const DivRight = styled.div`
  width: 35%;
  border-right: 1px solid rgb(228, 235, 228);
`;
export const DivLeft = styled.div`
  width: 65%;
`;
export const DivIcon = styled.div`
  border: 1px solid #00000042;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgb(228, 235, 228);
  }
`;
export const DivIcons = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  & svg:hover {
    background-color: rgb(228, 235, 228);
  }
`;
