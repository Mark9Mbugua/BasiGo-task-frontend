import React from "react";

import UserRoleDropDown from "../user-role-dropdown/user-role-dropdown.component";

import {
  FormWrapper,
  FormInput,
  SignUpButton,
  PageTitle,
} from "./sign-up-form.styles";

const SignUpForm = ({
  handleSubmit,
  setFullName,
  role,
  setRole,
  setEmail,
  setPassword,
}) => {
  return (
    <FormWrapper onSubmit={(e) => handleSubmit(e)}>
      <PageTitle>Sign Up Form</PageTitle>
      <FormInput
        type="text"
        placeholder="Full Names"
        id="fullName"
        name="fullName"
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <UserRoleDropDown role={role} setRole={setRole} />
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
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </div>
    </FormWrapper>
  );
};

export default SignUpForm;
