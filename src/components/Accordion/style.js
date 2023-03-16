import styled from "styled-components";

export const SelectCategory = styled.select`
  width: 16rem;
  padding: 7px;
  border-radius: 16px;
  border: 1px solid #3333338f;
  color: #333333b0;
  outline: none;
`;

export const Pfilter = styled.p`
  margin-bottom: 1rem;
  font-size: 22px;
  font-weight: 500;
  margin-top: -1rem;
  line-height: 22px;
  letter-spacing: 1px;
`;

export const AccordionCardBox = styled.div`
  padding: 14px 0px 15px;
  border-bottom: 1px solid #e3e8ee;
`;

export const AccordionName = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FiltersSelection = styled.div`
  width: 294px;
  padding-left: 1rem;
`;

export const AccordionContent = styled.div`
  display: ${(props) => (props.display === "block" ? "block" : "none")};
  padding-top: 24px;
  & ul li {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    margin-bottom: 16px;
    cursor: pointer;
  }
  & ul li.blue {
    color: #0d6efd;
  }
`;

export const MinBox = styled.div`
  & h4 {
    font-weight: 400;
    color: black;
    margin-bottom: 5px;
  }
  margin-bottom: 5px;
`;
export const MaxBox = styled(MinBox)``;
export const ListInput = styled.input`
  background: #fff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 110px;
  padding: 10px;
  outline: none;
`;

export const ListSubmit = styled.input`
  background: #fff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  padding: 10px;
  outline: none;
  cursor: pointer;
  width: 229px;
  height: 40px;
  color: #0d6efd;
`;
