import React from 'react'
import styled from "styled-components"
import 'boxicons';

declare global {
    interface IntrinsicElements {
        "box-icon": any;
    }
    interface ButtonProps {
        children?: React.ReactNode
        color?: any,
        icon?: string
        onClick: any
    }
    interface IconProps {
        icon?: string
        color?: any,
    }
}



const CustomIcon = (props: IconProps) => (
    <box-icon type='solid' name={props.icon} size="sm"></box-icon>
)
const StyledIcon = styled(CustomIcon)`
  fill: black;
  font-weight: bold;
`;


const Button = styled.button`
display: flex;
align-items: center;
vertical-align: bottom;
background: ${props => props.color === "dark" ? "#000000" : "#E4EBED"};
color: ${props => props.color === "dark" ? "#ffffff" : "#000000"};
font-size: 1em;
margin: 1em;
padding: 0.50em 1em;
border: 0.5px solid rgba(0, 0, 0, 0.1);
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
appearance: none;
outline: none;
cursor: pointer;
transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

:hover {
    background-color: lighten(#E4EBED, 10%);
    transform: scale(1.05);
}
:active {
    background-color: lighten(#E4EBED, 10%);
    transform: scale(0.95);
}
`;


const CustomButton = (props: ButtonProps) => {
    return (
        <Button color={props.color} onClick={props.onClick}>
            { props.children}
            {props.icon ? (
                <StyledIcon/>
            ) : (
                    ""
                )}
        </Button>

    )
}

export default CustomButton
