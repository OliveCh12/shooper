import React from "react";

import { GlobalProvider } from "./GlobalContext";

// import Dashboard from "./components/Dashboard"
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import UsersList from "./components/UsersList";
import AddItem from "./components/AddItem";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";

function App() {
  return (
    <GlobalProvider>
      <div className="wrapper">
        <div className="columns columns--2">
          <div className="column column--left">
            <header>
              <h1>Shooper</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </header>
            <UsersList />
            <AddItem />
          </div>
          <div className="column column--right">
            <ItemsList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
