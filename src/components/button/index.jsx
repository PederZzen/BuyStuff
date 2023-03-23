import React from 'react'
import { ButtonStyle } from './style'

const Button = (props) => {
  return (
    <ButtonStyle>{props.content}</ButtonStyle>
  )
}

export default Button
