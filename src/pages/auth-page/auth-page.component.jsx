import React from "react";

import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import { AuthPageWrapper } from "./auth-page.styles";

const AuthPage = () => {
  return (
    <AuthPageWrapper>
      <div>
        <h1>Authentication Page</h1>
      </div>
      <div>
        <SignUp />
        <SignIn />
      </div>
    </AuthPageWrapper>
  );
};

export default AuthPage;
