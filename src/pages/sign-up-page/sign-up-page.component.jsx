import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { connect } from "react-redux";
// import { signUp } from "../../api/main";
import { signUp } from "../../redux/actions/auth";
import { clearErrors } from "../../redux/actions/errors";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { PageWrapper } from "./sign-up-page.styles";

const SignUpPage = ({ isAuthenticated, signUp, clearErrors }) => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    clearErrors();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create user object
    const user = {
      fullname: fullName,
      role,
      email,
      password,
    };
    console.log(user);
    signUp(user);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <PageWrapper>
      <SignUpForm
        handleSubmit={handleSubmit}
        fullName={fullName}
        setFullName={setFullName}
        role={role}
        setRole={setRole}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </PageWrapper>
  );
};

// export default SignUp;
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.errors,
});

export default connect(mapStateToProps, { signUp, clearErrors })(SignUpPage);
