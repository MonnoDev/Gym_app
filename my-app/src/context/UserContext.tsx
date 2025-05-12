import React, { createContext, useEffect, useState } from "react";
import { getUser, User } from "../api/user";

interface UserContextType {
  user: User | null;
  isAdmin: boolean;
  error: string | null;
  loading: boolean;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  isAdmin: false,
  error: null,
  loading: true,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const isAdmin = user?.admin ?? sessionStorage.getItem("admin") === "true";

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    if (id) {
      getUser(id)
        .then((response) => {
          setUser(response[0]);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to load user");
          setLoading(false);
        });
    } else {
      setLoading(false); // Still must stop loading
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, isAdmin, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};

