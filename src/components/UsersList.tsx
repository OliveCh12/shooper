import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import "boxicons";

import { motion, AnimatePresence } from "framer-motion";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "box-icon": any;
    }
  }
}

const UsersList = () => {
  // Global Context State
  const [usersContext, setUsersContext] = useContext(GlobalContext);

  // Input Current State
  const [user, setUser] = useState({
    username: "",
    color: "",
    items: [],
  });

  // Handle input to ge ta simple string
  function handleInputChange(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setUser({ ...user, [name]: value });
  }

  // Add User to Global Context
  function addUser(event: React.FormEvent<HTMLButtonElement>): void {
    event.preventDefault();

    if (user.username.length === 0) {
      event.currentTarget.dataset.state = "invalid";
      alert("You have to specify a name and a color");
    } else {
      event.currentTarget.dataset.state = "valid";
      setUsersContext([...usersContext, user]);
      setUser({ username: "", color: "", items: [] });
    }
  }

  // Remove User to Global Context
  function removeUser(index: number): void {
    const initialState = [...usersContext];
    initialState.splice(index, 1);
    setUsersContext(initialState);
  }

  function userTotalPrice(userIndex: number) {
    const values = usersContext[userIndex].items.map(
      (item: any) => item.price * item.quantity
    );

    if (values.length === 0) {
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(0);
    } else {
      const sum = values.reduce(
        (accumulor: any, currentValue: any) => accumulor + currentValue
      );
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(sum);
    }
  }

  return (
    <div className="card">
      <div className="card__header">
        <h3>Users</h3>
        <span>Total User : {usersContext.length}</span>

      </div>
      <div className="card__body">
        <div className="list--compact">
          {usersContext.map((user: object | any, index: number) => (
            <AnimatePresence>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="list__item list__item--compact"
                key={index}
                style={{ borderRight: `8px solid ${user.color}` }}
              >
                <div className="list__user">
                  <box-icon
                    className=""
                    size="sm"
                    type="solid"
                    name="user-circle"
                    color={user.color}
                  ></box-icon>
                  <span className="list__username" style={{ color: user.color }}>{user.username}</span>
                </div>
                <div className="list__infos">
                  <span className="list__price">{userTotalPrice(index)}</span>
                  <button
                    className="button button--light button--square"
                    onClick={() => removeUser(index)}
                  >
                    <box-icon
                      size="sm"
                      type="solid"
                      name="trash"
                      style={{ opacity: 0.4 }}
                    ></box-icon>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

      </div>
      <div className="card__footer">
        <div className="form__grid form__grid--row">
          <input className="input" type="text" name="username" value={user.username} onChange={handleInputChange} placeholder="Enter a Username" />
          <input className="input input--color" type="color" name="color" value={user.color} onChange={handleInputChange} placeholder="Enter a Color" />
          <button className="button button--dark" type="button" onClick={addUser}>
            <span>New</span>
            <div className="button__icon">
              <box-icon
                size="sm"
                type="solid"
                name="user-plus"
                color="white"
              ></box-icon>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersList;