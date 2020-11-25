import React, { useContext, useState } from 'react'
import { GlobalContext } from "../GlobalContext"


const UsersList = () => {

    // Global Context State
    const [usersContext, setUsersContext] = useContext(GlobalContext);

    // Input Current State
    const [user, setUser] = useState({
        username: "",
        color: "",
        items: []
    })

    // Handle input to ge ta simple string
    function handleInputChange(event: React.FormEvent<HTMLInputElement>): void {
        event.preventDefault()
        const value = event.currentTarget.value;
        const name = event.currentTarget.name
        setUser({ ...user, [name]: value });
    }

    // Add User to Global Context
    function addUser(event: React.FormEvent<HTMLButtonElement>): void {
        event.preventDefault()

        if (user.username.length === 0) {
            event.currentTarget.dataset.state = 'invalid'
            alert("You have to specify a name and a color")
        } else {
            event.currentTarget.dataset.state = 'valid'
            setUsersContext([...usersContext, user])
            setUser({ username: "", color: "", items: [] })
        }
    }

    // Remove User to Global Context
    function removeUser(index: number): void {
        const initialState = [...usersContext]
        initialState.splice(index, 1);
        setUsersContext(initialState)
    }

    function userTotalPrice(userIndex: number) {
        const values = usersContext[userIndex].items.map((item: any) => item.price * item.quantity)

        if (values.length === 0) {
            return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(0)
        } else {
            const sum = values.reduce((accumulor: any, currentValue: any) => accumulor + currentValue)
            return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(sum)
        }
    }

    return (
        <div>
            <h3>Users List</h3>
            <ul>
                {usersContext.map((user: object | any, index: number) => (
                    <li key={index} style={{ color: user.color }}>
                        {user.username} | <small>{userTotalPrice(index)}</small> <button onClick={() => removeUser(index)}>🗑</button>
                    </li>
                ))}
            </ul>
            <pre>
                <code>{JSON.stringify(user, null, 2)}</code>
            </pre>
            <br />
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <input type="color" name="color" value={user.color} onChange={handleInputChange} />
            <button onClick={addUser}>Add User</button>
        </div>
    )
}

export default UsersList
