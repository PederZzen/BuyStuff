import React from 'react'
import { ButtonStyle } from './style'

const Button = (props) => {
  return (
    <ButtonStyle onClick={props.onClick}>{props.content}</ButtonStyle>
  )
}

export default Button
