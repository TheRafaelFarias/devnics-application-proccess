import { useRoutes } from "raviger";
import React from "react";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

const routes = {
  "/home": () => <HomePage />,
  "/register": () => <RegisterPage />,
  "/": () => <LoginPage />,
};

export const Router: React.FC = () => {
  const route = useRoutes(routes);

  return <>{route}</>;
};
