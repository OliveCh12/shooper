import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrash, faUserTag, faPlusCircle, IconLookup } from '@fortawesome/free-solid-svg-icons'
interface Props {
    children?: React.ReactNode
    type: "submit" | "button" | "reset "
    color?: "light" | "dark" | "standard"
    onClick?: any
    icon?: string
    style?: any
}

const Button = (props: Props) => {

    return (
        <button className={`button button--${props.color}`} onClick={props.onClick} style={props.style}>
            {props.children}
            {props.icon ? (
                <FontAwesomeIcon icon={faPlusCircle} size="sm" pull="right" />
            ) : (
                    ""
                )}
        </button>
    )
}

export default Button
