import styled from "styled-components";

export const RegisterPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10%;
  width: 100%;

  @media (max-width: 1124px) {
    flex-direction: column;
    gap: 5%;
    padding: 5% 0px;
    height: fit-content;
  }

  height: 100%;
`;
