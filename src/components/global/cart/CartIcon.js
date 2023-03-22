import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Button, CartNumber } from './style'

const CartIcon = () => {
  return (
    <Button>
        <FontAwesomeIcon icon={faCartShopping} />
        <CartNumber>1</CartNumber>
    </Button>
  )
}

export default CartIcon
