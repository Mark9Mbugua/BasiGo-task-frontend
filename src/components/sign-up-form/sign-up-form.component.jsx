import React from "react";

import { FormWrapper, FormInput } from "./sign-up.styles";

const SignUpForm = ({
  handleSubmit,
  setFullName,
  setRole,
  setEmail,
  setPassword,
}) => {
  return (
    <>
      <FormWrapper onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign Up Form</h3>
        <FormInput
          type="text"
          placeholder="Full Names"
          id="fullName"
          name="fullName"
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <FormInput
          type="text"
          placeholder="Role"
          id="role"
          name="role"
          onChange={(e) => setRole(e.target.value)}
          required
        />
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
          <button type="submit">Sign Up</button>
        </div>
      </FormWrapper>
    </>
  );
};

export default SignUpForm;
