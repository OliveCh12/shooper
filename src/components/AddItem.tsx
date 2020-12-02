import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";


import Button from "./Button"

const AddItem = () => {
  const [usersContext, setUsersContext] = useContext(GlobalContext);

  // Inputs item initial State
  const [item, setItem] = useState({
    name: "",
    quantity: 1,
    price: 0,
  });

  const [selectedUser, setSelectedUser] = useState(0);

  // Handle input to ge ta simple string
  function handleInputChange(
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLSelectElement>
  ): void {
    event.preventDefault();
    const { name, value, type } = event.currentTarget;
    setItem({
      ...item,
      [name]: type === "number" ? parseFloat(value).toFixed(2) : value,
    });
  }

  // Handle Input Change
  function handleSelectChange(event: React.FormEvent<HTMLSelectElement>): any {
    event.preventDefault();
    const { value } = event.currentTarget;
    const userIndex = usersContext.findIndex(
      (user: any) => user.username === value
    );

    setSelectedUser(userIndex);
  }

  // Add User to Global Context
  function addItem(event: React.SyntheticEvent) {
    event.preventDefault()
    if (usersContext.length === 0) {
      alert(
        "Before adding an item, you must enter at least 1 user in the list (Users)."
      );
    } else {
      const newItem = [...usersContext];
      newItem[selectedUser].items.push(item);
      console.log(newItem);
      setUsersContext(newItem);
    }
  }

  function handleOnKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      addItem(event)
    }
  }

  return (
    <div className="card">
      <div className="card__header">
        <h3>Add Item</h3>
      </div>
      <div className="card__body">
        <form onSubmit={addItem} className="form__group">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Item name"
            onChange={handleInputChange}
            required
            style={{ gridColumn: "1 / span 2" }}
          />
          <input
            className="input"
            type="number"
            name="quantity"
            placeholder="Quantity"
            pattern="[0-9]*"
            min="0"
            step="1"
            onChange={handleInputChange}
            required
          />
          <input
            className="input"
            type="number"
            name="price"
            placeholder="Unit Price"
            pattern="[0-9]+(\.[0-9][0-9]?)?"
            onChange={handleInputChange}
            onKeyPress={handleOnKeyPress}
            required
          />
          <select name="username" onChange={handleSelectChange} required style={{ gridColumn: "1 / span 2" }}>
            {usersContext.map((user: any) => (
              <option
                key={user.username}
                value={user.username}
                style={{ color: user.color }}
              >
                {user.username}
              </option>
            ))}
          </select>
          <Button type='button' onClick={addItem} color="dark" style={{ gridColumn: "1 / span 2" }}>Add to Cart</Button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
