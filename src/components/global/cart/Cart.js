import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, CartNumber } from './style'
import { Drawer } from 'antd'

const Cart = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Button onClick={showDrawer}>
        <FontAwesomeIcon icon={faCartShopping} />
        <CartNumber>1</CartNumber>
    </Button>
    <Drawer placement="right" onClose={onClose} open={open}>
    
    </Drawer>
    </>
  )
}

export default Cart
