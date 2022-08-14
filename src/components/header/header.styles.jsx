import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* height: 10vh; */
  min-height: 10vh;
  padding-inline: 2rem;
  box-shadow: 0px 8px 10px 0px #e6e0e0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  gap: 1rem;
`;
