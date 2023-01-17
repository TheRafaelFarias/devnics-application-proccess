import { navigate } from "raviger";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../api";
import Input from "../../components/input";
import { useUser } from "../../contexts/user/useUser";
import {
  Button,
  PageCardContainer,
  PageCardDescription,
  PageCardTitle,
  PageContainer,
} from "../../styles";
import { User } from "../../types/Auth";
import {
  ButtonsContainer,
  HomePageUserInformationItemsContainer,
} from "./styles";

const HomePage: React.FC = () => {
  const { user, setUser, setUserToken } = useUser();
  const { control, handleSubmit } = useForm<{ name: string; email: string }>();

  const handleFormSubmit = async (values: { name: string; email: string }) => {
    try {
      const response = await api.post<User>("/auth/edit", {
        ...user,
        ...values,
      });

      const newUser = response.data;

      setUser(newUser);
      toast("Informations updated", {
        type: "success",
      });
    } catch (error) {
      toast("An error has ocurred", {
        type: "error",
      });
    }
  };

  const handleLogout = async () => {
    await api.get("/auth/logout");
    setUser(undefined);
    setUserToken(undefined);
    navigate("/", {
      replace: true,
    });
  };

  return (
    <PageContainer>
      <PageCardContainer>
        <PageCardTitle>Welcome Back, {user?.name}</PageCardTitle>
        <PageCardDescription>
          See informations about your account
        </PageCardDescription>
        <HomePageUserInformationItemsContainer>
          <Input
            inputKey="name"
            control={control}
            placeholder="Name"
            defaultValue={user?.name}
          />
          <Input
            inputKey="email"
            control={control}
            placeholder="Email"
            defaultValue={user?.email}
          />
        </HomePageUserInformationItemsContainer>

        <ButtonsContainer>
          <Button onClick={handleSubmit(handleFormSubmit)}>
            Submit new informations
          </Button>
          <Button secondary onClick={handleLogout}>
            Logout
          </Button>
        </ButtonsContainer>
      </PageCardContainer>

      <img
        src="/account-details.svg"
        alt="A woman sitting on the floor with sunflowers around her"
      />
    </PageContainer>
  );
};

export default HomePage;
