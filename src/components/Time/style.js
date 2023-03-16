import styled from "styled-components";

export const StatusOfTime = styled.div`
  display: flex;
  height: 10rem;
  padding: 8px;
  gap: 18rem;
  border-radius: 10px;
  width: 822px;
  border: 1px solid #e4ebe4;
  margin-bottom: 2rem;
  & img {
    width: 180px;
    height: 140px;
  }
`;

export const Status = styled.h3`
  letter-spacing: 2px;
  font-size: 28px;
  margin-left: 10px;
  font-weight: 700;
  margin-top: 10px;
  width: 21rem;
`;

export const Time = styled.p`
  margin-top: 40px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
`;
