import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5.5rem;
  box-shadow: 0px 8px 10px 5px #e6e0e0;
  padding: 1rem;
  width: 35%;
  margin-bottom: 1rem;
`;

export const PageTitle = styled.h3`
  color: #1c4587;
  font-weight: 800;
  align-self: center;
`;

export const FormInput = styled.input`
  margin-block: 1rem;
  padding: 0.5rem;
  background: #e0e0e0;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const SignUpButton = styled.button`
  align-self: flex-end !important;
  padding: 0.5rem 1rem;
  outline: none;
  cursor: pointer;
  border: none;
  background: #1c4587;
  color: #fff;
`;
