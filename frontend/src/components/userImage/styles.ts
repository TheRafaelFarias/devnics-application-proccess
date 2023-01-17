import styled from "styled-components";

export const UserImageContainer = styled.div`
  border-radius: 999px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a120b;
  border: 2px solid #ffffff;
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.25);

  width: 250px;
  height: 250px;

  min-width: 250px;
  min-height: 250px;

  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  position: relative;
`;

export const UserImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserImageInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: black;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
    color: transparent;
    
  }
`;
