import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Amount, Button, CartContent, CartDetails, CartItem, CartNumber, Total } from './style'
import { Drawer } from 'antd'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

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
        {cart.items.length >= 1 ? <CartNumber>{cart.items.length}</CartNumber> : ""}
    </Button>
    <Drawer placement="right" onClose={onClose} open={open}>
      <CartContent>
        <ul>
          {cart.items.map((e, idx) => {
            return (
              <CartItem key={idx}>
                <img src={e.image} alt={e.name}/>
                <CartDetails>
                  <h3>{e.name}</h3>
                  <p>{e.price}kr</p>
                  <Amount>
                    <button>-</button>
                    <div>{e.amount}</div>
                    <button>+</button>
                  </Amount>
                </CartDetails>
              </CartItem>
            )
          })}
        </ul>
        <div>
          <p>Total</p>
          <Total>{Math.floor(cart.total)}kr</Total>
        </div>
      </CartContent>
    </Drawer>
    </>
  )
}

export default Cart
