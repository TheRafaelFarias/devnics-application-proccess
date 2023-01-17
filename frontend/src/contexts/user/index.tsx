import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { api } from "../../api";
import { User } from "../../types/Auth";

interface AuthContextProps {
  user?: User;
  token?: string;
  setUserToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [userToken, setUserToken] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    if (userToken) {
      api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
      localStorage.setItem("token", userToken);
    } else {
      api.defaults.headers.common["Authorization"] = undefined;
      localStorage.removeItem("token");
    }
  }, [userToken]);

  useEffect(() => {
    if (!user) {
      const apiToken = localStorage.getItem("token");

      if (!apiToken) return;

      setUserToken(apiToken!);

      api
        .get<User>("/auth/", {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        })
        .then((user) => setUser(user.data));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token: userToken,
        setUser,
        setUserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
