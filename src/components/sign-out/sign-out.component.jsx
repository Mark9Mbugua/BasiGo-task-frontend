import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { CustomLink } from "../common/global-styles.styles";

const SignOut = ({ logout }) => {
  return (
    <CustomLink
      to="/"
      onClick={() => {
        logout();
      }}
    >
      Log Out
    </CustomLink>
  );
};

export default connect(null, { logout })(SignOut);
