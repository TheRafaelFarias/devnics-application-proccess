import styled from "styled-components";

export const HomePageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const HomePageUserInformationContainer = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #3c2a21;
  border-radius: 15px;
  box-shadow: 0px 0px 30px #ff7b54;
  padding: 40px 60px;
`;

export const HomePageUserInformationItemsContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 20px;
`;

export const HomePageUserInformationItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  & > p:first-child {
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    opacity: 0.8;
  }

  & > p:last-child {
    font-size: 25px;
    font-weight: bolder;
    color: white;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
