import styled, { css } from "styled-components";

export const InputContainer = styled.div<{
  hasError: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${(props) =>
    props.hasError &&
    css`
      & > div > p {
        color: #cf1717 !important;
      }

      & > * {
        color: #cf1717 !important;
        border-color: #cf1717 !important;
      }
    `}
`;

export const InputTextsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputPlaceholder = styled.p`
  font-size: 15px;
  color: #fff;
  font-weight: 400;
`;

export const InputComponentContainer = styled.div`
  display: flex;
  align-items: center;
  border: 5px solid #ffffff;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.5));
  border-radius: 15px;
`;

export const InputComponent = styled.input`
  border: 0px;
  height: 100%;
  width: 100%;
  background: transparent;
  color: #ff7b54;
  outline: none;
  padding: 19px 22px;
  font-size: 15px;
  font-weight: 400;
`;

export const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
