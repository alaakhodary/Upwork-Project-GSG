import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "../Dropdown";

const LIAll = styled.li`
  width: 6rem;
  cursor: pointer;
  font-size: 17px;
`;

const Btn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  width: 6rem;
  font-size: 17px;
  font-family: inter;
`;

const MenuItem = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <LIAll className="menu-items">
      {items.submenu ? (
        <>
          <Btn
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
          </Btn>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <NavLink to={items.url} style={{ color: "black" }}>
          {items.title}
        </NavLink>
      )}
    </LIAll>
  );
};

export default MenuItem;
