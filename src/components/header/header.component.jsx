import React from "react";

import SignOut from "../sign-out/sign-out.component";

import { HeaderWrapper, NavList, TitleWrapper, Title } from "./header.styles";
import { CustomLink } from "../common/global-styles.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>BasiGO Tech Challenge</Title>
      </TitleWrapper>
      <NavList>
        <CustomLink to="/leads">Leads</CustomLink>
        <CustomLink to="/customers">Customers</CustomLink>
        <NavList>
          <SignOut />
        </NavList>
      </NavList>
    </HeaderWrapper>
  );
};

export default Header;
