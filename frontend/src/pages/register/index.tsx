import { navigate } from "raviger";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../api";
import Input from "../../components/input";
import PasswordTooltip from "../../components/passwordTooltip";
import { useUser } from "../../contexts/user/useUser";
import { emailRegex, passwordRegex } from "../../helpers/regex";
import WarnIcon from "../../icons/warn";
import {
  Button,
  PageCardContainer,
  PageCardDescription,
  PageCardTitle,
  PageContainer,
  PageFormsContainer,
} from "../../styles";
import { AuthResponse } from "../../types/Auth";
import { RegisterPageContainer } from "./styles";

interface RegisterValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegisterPage: React.FC = () => {
  const { setUser, setUserToken } = useUser();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterValues>();

  const registerFormSubmitHandler = async (values: RegisterValues) => {
    try {
      const response = await api.post<AuthResponse>("/auth/register", values);
      const user = response.data.user;
      const token = response.data.token.token;

      setUser(user);
      setUserToken(token);

      navigate("/home", {
        replace: true,
      });
    } catch (error) {
      toast("An error has ocurred", {
        type: "error",
      });
    }
  };

  return (
    <PageContainer>
      <PageCardContainer>
        <PageCardTitle>Create your account</PageCardTitle>
        <PageCardDescription>
          Fill the form bellow and start your adventure
        </PageCardDescription>

        <RegisterPageContainer>
          <PageFormsContainer
            onSubmit={handleSubmit(registerFormSubmitHandler)}
            id="register-form"
            style={{ width: "100%" }}
          >
            <Input
              isRequired
              inputKey="name"
              placeholder="Name"
              control={control}
            />
            <Input
              isRequired
              inputKey="email"
              placeholder="Email"
              patternConfig={{
                pattern: emailRegex,
                errorMessage: "The informed value isn't a value email",
              }}
              type="email"
              control={control}
            />
            <Input
              style={{ zIndex: 5 }}
              isRequired
              inputKey="password"
              placeholder="Password"
              control={control}
              patternConfig={{
                pattern: passwordRegex,
                errorMessage:
                  "The informed password doens't fit our requirements",
              }}
              Icon={
                <WarnIcon color={errors.password && "#FF7B54"}>
                  {errors.password && <PasswordTooltip />}
                </WarnIcon>
              }
            />
            <Input
              isRequired
              inputKey="repeatedPassword"
              placeholder="Repeat password"
              control={control}
              patternConfig={{
                pattern: new RegExp(`(${watch("password")})`),
                errorMessage: "Passwords are not equal",
              }}
            />
          </PageFormsContainer>
        </RegisterPageContainer>
        <Button
          style={{ marginTop: "auto" }}
          secondary={Object.keys(errors).length !== 0}
          onClick={handleSubmit(registerFormSubmitHandler)}
        >
          Submit
        </Button>
      </PageCardContainer>

      <img
        src="/register.svg"
        alt="A woman looking at cards floating in front of her"
      />
    </PageContainer>
  );
};

export default RegisterPage;
