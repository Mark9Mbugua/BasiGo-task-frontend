import React from "react";

import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

const AuthPage = () => {
  return (
    <div>
      <h1>Authentication Page</h1>
      <SignUp />
      <SignIn />
    </div>
  );
};

export default AuthPage;
