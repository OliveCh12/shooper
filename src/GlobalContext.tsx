import React, { createContext, useState } from 'react'

interface Props {
    children: React.ReactNode
}

export const GlobalContext = createContext<any | undefined>(undefined);

export const GlobalProvider = (props: Props) => {

    // Users State
    const [users, setUsers] = useState([
        {
            // id: "kkeopz",
            username: "Peter",
            color: "#364F6B",
            items: [
                { name: "Bananas", quantity: 10, price: 1 },
                { name: "Strawberry", quantity: 20, price: 1.22 },
                { name: "Milk", quantity: 6, price: 1.19 },
            ]
        },
        {
            // id: "kkeopz",
            username: "William",
            color: "#3FC1C9",

            items: [
                { name: "Brocolis 🥦", quantity: 10, price: 1.39 },
                { name: "Carottes 🥕", quantity: 20, price: 1.10 },
                { name: "Honey 🍯", quantity: 2, price: 3.19 },
            ]
        },
        {
            // id: "kkeopz",
            username: "Lorenzo",
            color: "#FC5185",
            items: [
                { name: "Pizza 🍕", quantity: 3, price: 2.39 },
                { name: "Comcumber 🥒", quantity: 3, price: 1.10 },
                { name: "Baguettes 🥖", quantity: 2, price: 0.99 },
            ]
        },
        {
            // id: "kkeopz",
            username: "Daniela",
            color: "#FBC029",
            items: [
                { name: "Pizza 🍕", quantity: 3, price: 2.39 },
                { name: "Comcumber 🥒", quantity: 3, price: 1.10 },
                { name: "Baguettes 🥖", quantity: 2, price: 0.99 },
            ]
        },
    ]);

    return (
        <GlobalContext.Provider value={[users, setUsers]}>
            {props.children}
        </GlobalContext.Provider>
    )
}