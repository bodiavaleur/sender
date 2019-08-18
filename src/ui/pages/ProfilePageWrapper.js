import styled from "styled-components";

export const ProfilePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  ${({ magic }) =>
    magic &&
    `
  width: 100vw;
  height: 100vh;
  align-items: center;
  
  `}
`;