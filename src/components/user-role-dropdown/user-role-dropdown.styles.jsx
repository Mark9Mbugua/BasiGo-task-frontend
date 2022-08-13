import styled from "styled-components";

export const Main = styled("div")`
  /* font-family: sans-serif;
  background: #f0f0f0; */
  /* height: 100vh; */
`;

export const DropDownContainer = styled("div")`
  /* width: 10.5em; */
  /* margin: 0 auto; */
`;

export const DropDownHeader = styled("div")`
  display: flex;
  padding: 0.5rem;
  border: 2px solid #e0e0e0;
  cursor: pointer;
  outline: none;
  position: relative;
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #1c4587;
  cursor: pointer;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export const DropdownArrow = styled.img`
  width: 20px;
  margin-left: 90%;
  position: absolute;
`;
