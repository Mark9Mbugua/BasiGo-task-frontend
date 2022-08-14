import React from "react";

import SignOut from "../sign-out/sign-out.component";

import { HeaderWrapper, NavList, TitleWrapper } from "./header.styles";
import { CustomLink, HeaderTitle } from "../common/global-styles.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <HeaderTitle>BasiGO Tech Challenge</HeaderTitle>
      </TitleWrapper>
      <NavList>
        <CustomLink to="/">Leads</CustomLink>
        <CustomLink to="/customers">Customers</CustomLink>
        <NavList>
          <SignOut />
        </NavList>
      </NavList>
    </HeaderWrapper>
  );
};

export default Header;
