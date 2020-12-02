import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext"

// Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from "framer-motion";

// Custom Components
import Button from "./Button"



const UsersList = () => {
  // Global Context State
  const [usersContext, setUsersContext] = useContext(GlobalContext);
  const [currentColor, setCurrentColor] = useState(["#FC5185", "#FBC029", "#21db68", "#3fc1c9"])
  // Input Current State
  const [user, setUser] = useState({
    username: "",
    color: "#5442f3",
    items: [],
  });


  // Handle input to ge ta simple string
  function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setUser({ ...user, [name]: value });
  }


  // Generate a color each time a new user is added
  function generateColor() {
    const nextColor = [...currentColor]
    nextColor.shift()
    setCurrentColor(nextColor)
  }



  // Add User to Global Context
  function addUser(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    if (user.username.length === 0) {
      // event.currentTarget.dataset.state = "invalid";
      alert("You have to specify a name and a color");
    } else {
      // event.currentTarget.dataset.state = "valid";
      setUsersContext([...usersContext, user]);
      // Reset Form
      generateColor()
      setUser({ username: "", color: currentColor[0], items: [] });
    }
  }

  function handleOnKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      addUser(event)
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
        <span>
          Total User : <strong>{usersContext.length}</strong>
        </span>
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
                  <FontAwesomeIcon icon={faUser} size="sm" pull="left" style={{ color: user.color }} />
                  <span
                    className="list__username"
                    style={{ color: user.color }}
                  >
                    {user.username}
                  </span>
                </div>
                <div className="list__infos">
                  <span className="list__price">{userTotalPrice(index)}</span>
                  <FontAwesomeIcon className="list__remove" icon={faTrashAlt} size="sm" onClick={() => removeUser(index)}/>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
      {/* {JSON.stringify(currentColor)} */}
      <div className="card__footer">
        <div className="form__grid form__grid--row">
          <input
            className="input--color"
            type="color"
            name="color"
            defaultValue="#6E5BFE"
            value={user.color}
            onChange={handleInputChange}
            placeholder="Enter a Color"
          />
          <input
            className="input"
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            onKeyPress={handleOnKeyPress}
            placeholder="Enter a Username"
          />
          <Button type="button" color="dark" icon="User" onClick={addUser}>
            Add User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
