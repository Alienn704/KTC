import React, { createContext, useContext, useState } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
};

const UserContext = createContext<{
  users: User[];
  addUser: (user: Omit<User, "id">) => void;
}>({
  users: [],
  addUser: () => {},
});


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: Omit<User, "id">) => {
    const newUser: User = { id: Date.now(), ...user };
    setUsers([...users, newUser]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);
