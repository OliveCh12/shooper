import React from 'react';

import { GlobalProvider } from './GlobalContext'

// import Dashboard from "./components/Dashboard"
import Dashboard from "./components/Dashboard"
import UsersList from "./components/UsersList"
import AddItem from "./components/AddItem"
import ItemsList from "./components/ItemsList"

function App() {

  return (
    <GlobalProvider>
      <div style={{ maxWidth: 1100, margin: "auto", padding: "0 15px" }}>
        <h1>Advanced Shopping List</h1>
        <p>If you are stingy, make a shopping list by your own or with your friends...</p>
      <Dashboard>
        <UsersList />
        <AddItem />
        <ItemsList />
      </Dashboard>
      </div>

    </GlobalProvider>
  );
}

export default App;
