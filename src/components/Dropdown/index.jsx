import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LiList = styled.li`
  margin-top: 0.5rem;
  padding: 9px;
`;

const UlList = styled.ul`
  background-color: white;
  border: none;
  width: 12rem;
  height: 9rem;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgb(0 30 0 / 15%);
  position: absolute;

  & li:hover {
    background-color: #00000033;
  }
`;

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <UlList className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <LiList key={index}>
          <NavLink to={submenu.url} style={{ color: "black" }}>
            {submenu.title}
          </NavLink>
        </LiList>
      ))}
    </UlList>
  );
};

export default Dropdown;
