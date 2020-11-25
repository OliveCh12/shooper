import { format } from 'path';
import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext"


const ItemsList = () => {

    const [usersContext, setUsersContext] = useContext(GlobalContext);

    // Remove User to Global Context
    function removeItem(userIndex: number, itemIndex: number): void {
        const initialState = [...usersContext]
        initialState[userIndex].items.splice(itemIndex, 1)
        setUsersContext(initialState)
    }

    // Format Number as a currency
    function formatPrice(price: number) {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price)
    }

    // Sum all values together
    function sumOfValues() {
        const itemsValues = usersContext.map((user: any) => user.items).flat(1).map((item: any) => item.quantity * item.price)
        if (itemsValues.length === 0) {
            return formatPrice(0)
        }
        return formatPrice(itemsValues.reduce((a: number, b: number) => a + b))
    }


    return (
        <div>
            <h3>Items List (Total: {sumOfValues()})</h3>
            {/* Mapping and render users level 1 */}
            {usersContext.map((user: any, userIndex: number) => (
                <div className="item">
                    <div className="item__user" style={{ color: user.color }}>{user.username} . {userIndex}</div>
                    <ul>
                        {/* Mapping and render items level 2 */}
                        {user.items.map((item: any, itemIndex: number) => (
                            <div>
                                <li className="item__title"><strong>{item.name} . {itemIndex}</strong></li>
                                <div style={{ display: "flex", flexDirection: 'column' }}>
                                    <small>Quantity : {item.quantity}</small>
                                    <small>Unit Price: {formatPrice(item.price)}</small>
                                    <small>Total Price: {formatPrice(item.quantity * item.price)}</small>
                                    <button onClick={() => removeItem(userIndex, itemIndex)}>🗑</button>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ItemsList
