import React from "react";
import { Alert } from "reactstrap";

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
  error,
}) => {
  return (
    <FormWrapper onSubmit={(e) => handleSubmit(e)}>
      <PageTitle>BasiGo Sign Up</PageTitle>
      {error.message ? <Alert color="danger">{error.message}</Alert> : null}
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
        type="email"
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
