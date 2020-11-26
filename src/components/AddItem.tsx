import React, { useContext, useState } from 'react'
import { GlobalContext } from "../GlobalContext"


const AddItem = () => {

    const [usersContext, setUsersContext] = useContext(GlobalContext);

    // Inputs item initial State
    const [item, setItem] = useState({
        name: "",
        quantity: 1,
        price: 0,
    })

    const [selectedUser, setSelectedUser] = useState(0)

    // Handle input to ge ta simple string
    function handleInputChange(event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void {
        event.preventDefault()
        const { name, value, type } = event.currentTarget
        setItem({ ...item, [name]: type === 'number' ? parseFloat(value,).toFixed(2) : value });
    }

    // Handle Input Change
    function handleSelectChange(event: React.FormEvent<HTMLSelectElement>): any {
        event.preventDefault()
        const { value } = event.currentTarget
        const userIndex = usersContext.findIndex((user: any) => user.username === value)

        setSelectedUser(userIndex)
    }


    // Add User to Global Context
    function addItem(event: React.FormEvent<HTMLButtonElement> | React.SyntheticEvent) {
        event.preventDefault()
        const newItem = [...usersContext]
        newItem[selectedUser].items.push(item)
        console.log(newItem)

        setUsersContext(newItem)
    }

    return (
        <div className="card">
            <div className="card__header">
                <h3>Add Item Form</h3>
            </div>
            <div className="card__body">
                {JSON.stringify(item)}
                <form onSubmit={addItem}>
                    <input type="text" name="name" placeholder="Item name" onChange={handleInputChange} required />
                    <input type="number" name="quantity" placeholder="Quantity" pattern="[0-9]*" onChange={handleInputChange} required />
                    <input type="number" name="price" placeholder="Unit Price" pattern="[0-9]+(\.[0-9][0-9]?)?" onChange={handleInputChange} required />
                    <select name="username" onChange={handleSelectChange} required>
                        {usersContext.map((user: any) => (
                            <option key={user.username} value={user.username} style={{ color: user.color }}>{user.username}</option>
                        ))}
                    </select>
                    <button onClick={addItem}>Add Item</button>
                </form>
            </div>
        </div>
    )
}

export default AddItem
