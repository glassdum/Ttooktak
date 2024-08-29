import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    nickname: ''
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
