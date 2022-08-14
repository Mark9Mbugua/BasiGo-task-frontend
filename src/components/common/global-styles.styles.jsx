import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #1c4587;
`;

export const ItemsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: space-evenly;
  margin: 2rem 6rem;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;

export const Title = styled.h2`
  align-self: center;
  font-weight: 550;
  color: #1c4587;
`;

export const ItemTitle = styled.span`
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 0.9rem;
`;

export const HeaderTitle = styled.h3`
  color: #1c4587;
  font-weight: 700;
`;
