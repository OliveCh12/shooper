import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";

// Library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faFolder } from "@fortawesome/free-solid-svg-icons";

// Cutsom Components
import UserItems from "./UserItems";
import Button from "./Button";

const ItemsList = () => {
  const [usersContext, setUsersContext] = useContext(GlobalContext);

  // Remove User to Global Context
  function removeItem(userIndex: number, itemIndex: number): void {
    const initialState = [...usersContext];
    initialState[userIndex].items.splice(itemIndex, 1);
    setUsersContext(initialState);
  }

  // Format Number as a currency
  function formatPrice(price: number) {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  }

  // Sum all values together
  function sumOfValues() {
    const itemsValues = usersContext
      .map((user: any) => user.items)
      .flat(1)
      .map((item: any) => item.quantity * item.price);
    if (itemsValues.length === 0) {
      return formatPrice(0);
    }
    return formatPrice(itemsValues.reduce((a: number, b: number) => a + b));
  }

  return (
    <div className="card card--list">
      <div className="card__header">
        <h3>Items</h3>
        <span>
          Total : <strong>{sumOfValues()}</strong>
        </span>
      </div>

      <div className="card__body card__body--scroll">
        {usersContext.map((user: any, userIndex: number) => (
          <div className="list">
            {user.items.length === 0 ? (
              ""
            ) : (
                <div
                  className="list__user-header"
                  style={{ backgroundColor: user.color }}
                >
                  <span>{user.username}</span>
                  <span>Items : {user.items.length}</span>
                  <FontAwesomeIcon className="list__item-folder" icon={faFolderOpen} size="sm"/>
                </div>
              )}
            <div className="list__items">
              {user.items.map((item: any, itemIndex: number) => (
                <UserItems
                  key={itemIndex}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  color={user.color}
                  onClick={() => removeItem(userIndex, itemIndex)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="card__footer">
        <span className="card__total">{sumOfValues()}</span>
      </div>
    </div>
  );
};

export default ItemsList;