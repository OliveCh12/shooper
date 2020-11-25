import React from 'react';

import { GlobalProvider } from './GlobalContext'

// import Dashboard from "./components/Dashboard"
import UsersList from "./components/UsersList"
import AddItem from "./components/AddItem"
import ItemsList from "./components/ItemsList"

function App() {

  return (
    <GlobalProvider>
      <div style={{ maxWidth: 1024, margin: "auto", padding: "0 15px" }}>
        <UsersList />
        <AddItem />
        <ItemsList />
      </div>
    </GlobalProvider>
  );
}

export default App;
