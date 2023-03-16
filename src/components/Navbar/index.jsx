import styled from "styled-components";

import MenuItem from "../MenuItem";

import { menuItems } from "../../mock/menuItem";

const UList = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  gap: 3rem;
`;

const Navbar = () => {
  return (
    <UList>
      <Ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItem items={menu} key={index} />;
        })}
      </Ul>
    </UList>
  );
};
export default Navbar;
