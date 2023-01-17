import React, { useState } from "react";
import { UserImageContainer, UserImageInput, UserImageStyled } from "./styles";

interface UserImageProps {
  imageSrc?: string;
}

const UserImage: React.FC<UserImageProps> = ({ imageSrc }) => {
  const [imageSrcState, setImageSrcState] = useState(imageSrc);

  return (
    <UserImageContainer>
      <UserImageInput
        type="file"
        onChange={(inputFile) => {
          const files = inputFile.currentTarget.files!;
          const file = files[0];
          const fileUrl = URL.createObjectURL(file);
          setImageSrcState(fileUrl);
        }}
      />
      {imageSrcState ? (
        <UserImageStyled src={imageSrcState} />
      ) : (
        <p>Your profile picture</p>
      )}
    </UserImageContainer>
  );
};

export default UserImage;
