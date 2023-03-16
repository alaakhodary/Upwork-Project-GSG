import React from "react";

import Footer from "../Footer";
import Header from "../Header";

import { Container } from "../../global/Container";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
