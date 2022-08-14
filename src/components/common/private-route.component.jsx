import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ auth, children }) => {
  if (!auth.isAuthenticated) {
    console.log("Is User Authenticated?", auth);
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
