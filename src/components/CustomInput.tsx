import React from 'react'
import styled from "styled-components"


interface Props {
    onChange?: React.FormEventHandler<HTMLInputElement>;
    onSubmit?: React.SyntheticEvent;
    type: string
    value?: any
    name: string
}

const Input = styled.input`
  height: 1.875em;
  font-size: 1em;
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.color || "palevioletred"};
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  outline: none;
  appearance: none;
  box-sizing: border-box;

  :focus  {
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  }
`;


const CustomInput = (props: Props) => {
    return (
        <Input name={props.name} type={props.type} color="black" placeholder="Enter a username" onChange={props.onChange} value={props.value}/>
    )
}

export default CustomInput
