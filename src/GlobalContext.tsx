import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const GlobalContext = createContext<any | undefined>(undefined);

export const GlobalProvider = (props: Props) => {
  // Users State
  const [users, setUsers] = useState([]);

  return (
    <GlobalContext.Provider value={[users, setUsers]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
