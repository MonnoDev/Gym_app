import React from "react";
import { UserProvider } from "./UserContext";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
};

export default Providers;
