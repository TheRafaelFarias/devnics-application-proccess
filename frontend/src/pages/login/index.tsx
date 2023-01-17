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
import { LoginPageContainer } from "./styles";

interface LoginValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { setUserToken, setUser } = useUser();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginValues>();

  const loginFormSubmitHandler = async (values: LoginValues) => {
    try {
      const response = await api.post<AuthResponse>("/auth/login", values);
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
        <PageCardTitle>Login to you account</PageCardTitle>
        <PageCardDescription>
          Enter your credentials to see your informations
        </PageCardDescription>

        <LoginPageContainer>
          <PageFormsContainer style={{ minWidth: 500 }}>
            <Input
              isRequired
              placeholder="Email"
              inputKey="email"
              control={control}
              patternConfig={{
                pattern: emailRegex,
                errorMessage: "The informed value isn't a value email",
              }}
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
          </PageFormsContainer>
        </LoginPageContainer>
        <Button
          secondary={Object.keys(errors).length !== 0}
          onClick={handleSubmit(loginFormSubmitHandler)}
        >
          Submit
        </Button>
        <Button
          secondary
          onClick={() => {
            navigate("/register", {
              replace: true,
            });
          }}
        >
          Create account
        </Button>
      </PageCardContainer>

      <img
        src="/login.svg"
        alt="A guy saying that the card informations are OK by giving a thumbsup"
      />
    </PageContainer>
  );
};

export default LoginPage;
