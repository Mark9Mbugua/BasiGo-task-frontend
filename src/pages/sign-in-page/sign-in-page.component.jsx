import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/auth";
import { clearErrors } from "../../redux/actions/errors";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const SignInPage = ({ isAuthenticated, signIn, clearErrors }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    clearErrors();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sign In User
    const user = {
      email,
      password,
    };
    signIn(user);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Sign In Component</h2>

      <SignInForm
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

// export default SignIn;
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.errors,
});

export default connect(mapStateToProps, { signIn, clearErrors })(SignInPage);
