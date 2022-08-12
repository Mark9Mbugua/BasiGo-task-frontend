import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { connect } from "react-redux";
// import { signUp } from "../../api/main";
import { signUp } from "../../redux/actions/auth";
import { clearErrors } from "../../redux/actions/errors";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

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
    signUp(user);
    // if (isAuthenticated) {
    //   navigate("/", { replace: true });
    // }
    // Attempt to register
    // if (user.fullName && user.role && user.email && user.password) {
    // signUp(user).then((res) => {
    //   if (res.data.success === "true") {
    //     console.log("registration successful");
    //     console.log(res.data);
    //     localStorage.setItem("accesstoken", res.data.accesstoken);
    //     // history.push("/");
    //     setFullName("");
    //     setEmail("");
    //     setRole("");
    //     setPassword("");
    //     navigate("/", { replace: true });
    //   } else {
    //     // setVisible(true);
    //     // setErrorMessage(res.data.message);
    //     console.log("registration failed");
    //     console.log(res.data.message);
    //   }
    // });
    // console.log("Well And Good!");
    // }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Sign Up Component</h2>

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
    </div>
  );
};

// export default SignUp;
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.errors,
});

export default connect(mapStateToProps, { signUp, clearErrors })(SignUpPage);
