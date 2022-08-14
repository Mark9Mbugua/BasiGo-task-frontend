import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

// const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//       if (!isAuthenticated) {
//         // return <Navigate to="/sign-in" />;m
//         return <Navigate to="/" />;
//       } else {
//         return <Component {...props} />;
//       }
//     }}
//   />
// );

// const mapStateToProps = (state) => ({
//   auth: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps)(ProtectedRoute);

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    console.log("Is User Authenticated?", isAuthenticated);
    return <Navigate to="/" replace />;
  }

  return children;
};
const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
