import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/auth";
import { clearErrors } from "../../redux/actions/errors";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { PageWrapper } from "./sign-in-page.styles";
import { CustomLink } from "../../components/common/global-styles.styles";

const SignInPage = ({ isAuthenticated, signIn, clearErrors, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    clearErrors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sign In User
    const user = {
      email,
      password,
    };
    await signIn(user);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <PageWrapper>
      <SignInForm
        error={error}
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <p>
        Don't have an account? <CustomLink to="/sign-up">Sign Up</CustomLink>
      </p>
    </PageWrapper>
  );
};

// export default SignIn;
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.errors,
});

export default connect(mapStateToProps, { signIn, clearErrors })(SignInPage);
