import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  Form {
    width: 35%;
    box-shadow: 0px 8px 10px 5px #e6e0e0;
    padding: 2rem;
    height: 80%;
    margin-top: 3rem;
  }
`;

export const FormHeader = styled.h2`
  color: #1c4587;
  font-weight: 650;
`;
