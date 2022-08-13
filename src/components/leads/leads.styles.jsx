import styled from "styled-components";

export const LeadsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* border: 1px solid red; */
  align-items: space-evenly;
  margin: 3rem 6rem;
`;

export const Title = styled.h2`
  /* display: flex; */
  align-self: center;
  font-weight: 550;
  color: #1c4587;
  /* justify-self: flex-end; */
`;

export const CreateLeadButton = styled.button`
  /* display: flex; */
  align-self: flex-end;
  padding: 0.5rem 1rem;
  outline: none;
  cursor: pointer;
  border: none;
  background: #1c4587;
  color: #fff;
  /* justify-self: flex-end; */
`;

export const LeadsContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, minmax(0, 1fr)); */
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;

export const LeadDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 0px 8px 10px 0px #e6e0e0;
  padding: 1rem 0.6rem;
  /* border-radius: 10px; */
`;
