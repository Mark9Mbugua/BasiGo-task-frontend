import React from "react";

import { FormWrapper, FormInput } from "./sign-in-form.styles";

const SignInForm = ({
  handleSubmit,
  setEmail,
  setPassword,
}) => {
  return (
    <>
      <FormWrapper onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign In Form</h3>
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
          <button type="submit">Sign In</button>
        </div>
      </FormWrapper>
    </>
  );
};

export default SignInForm;
