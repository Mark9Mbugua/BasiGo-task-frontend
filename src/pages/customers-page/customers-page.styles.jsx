import styled from "styled-components";

export const ImgContainer = styled.div`
  background: #1c4587;
  position: relative;
  align-self: stretch;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const CustomerImg = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin-block: 1rem;
  align-self: center;
`;

// export const ItemTitle = styled.span`
//   font-weight: bold;
// `;

// export const Text = styled.p`
//   font-size: 0.9rem;
// `;

export const ItemDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
