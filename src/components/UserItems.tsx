import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

interface Props {
  color: string;
  name: string;
  quantity: number;
  price: number;
  onClick: any;
}

const UserItems = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  // Format Number as a currency
  function formatPrice(price: number) {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  }
  return (
    <div className="list__items">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="list__item--big"
        style={{ borderRight: `8px solid ${props.color}` }}
      >
        <div className="list__item-body">
          <div className="list__item-header">
            <div className="list__item-name">
              <strong>{props.name} <small>× {props.quantity}</small></strong>
            </div>
            <FontAwesomeIcon className="list__item-remove" icon={faMinusCircle} size="sm" onClick={props.onClick}/>
          </div>
          <div className="list__item-footer">
            <span>Unit Price : {formatPrice(props.price)}</span>
            <span className="list__item-price">
              {formatPrice(props.quantity * props.price)}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserItems;

