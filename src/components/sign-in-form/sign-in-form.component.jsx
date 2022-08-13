import React from "react";

import {
  FormWrapper,
  FormInput,
  SignUpButton,
  PageTitle,
} from "./sign-in-form.styles";

const SignInForm = ({ handleSubmit, setEmail, setPassword }) => {
  return (
    <>
      <FormWrapper onSubmit={(e) => handleSubmit(e)}>
        <PageTitle>Sign In Form</PageTitle>
        <FormInput
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          type="text"
          placeholder="Password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <SignUpButton type="submit">Sign In</SignUpButton>
        </div>
      </FormWrapper>
    </>
  );
};

export default SignInForm;
