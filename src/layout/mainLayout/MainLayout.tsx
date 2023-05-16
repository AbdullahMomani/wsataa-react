import React from "react";
import { Main } from "./Theme";
import { useLocation } from "react-router-dom";
import { existingRoutes } from "../../router";

interface MainLayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: MainLayoutProps) {
  const location = useLocation();
  const isLoginPage = location.pathname == "/"
  
  

  return (
    <>
      <Main isLoginPage={isLoginPage}>{children}</Main>
    </>
  );
}

export default Layout;
