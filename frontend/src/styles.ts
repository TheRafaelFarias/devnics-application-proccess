import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;

  & > img {
    width: 500px;
    object-fit: scale-down;
    margin: auto;
  }

  @media (max-width: 1124px) {
    & > img {
      display: none;
    }

    & > div {
      width: 100%;
      border-right: none;
    }
  }
`;

export const PageCardContainer = styled.div`
  width: 60%;
  min-width: 650px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #3c2a21;
  padding: 40px 60px;
  border-right: 5px solid #ff7b54;

  @media (max-width: 650px) {
    min-width: 100%;
    padding: 40px 20px;
  }
`;

export const Button = styled.button<{
  secondary?: boolean;
}>`
  border: none;
  background-color: ${(props) =>
    !props.secondary ? "#ff7b54" : "transparent"};
  padding: 10px 45px;
  border-radius: 5px;
  color: white;
  font-weight: bold;

  ${(props) => props.secondary && `border: 2px solid #FF7B54;`}
`;

export const SecondaryButton = styled.div`
  border: 2px solid #ff7b54;
  padding: 10px 45px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

export const PageCardTitle = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bolder;
  text-align: center;
`;

export const PageCardDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: white;
  opacity: 0.8;
  text-align: center;
`;

export const PageFormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1124px) {
    width: 100%;
    min-width: 100% !important;
  }
`;
