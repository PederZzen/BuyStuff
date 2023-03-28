import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Amount, Bottom, Button, CartContent, CartDetails, CartItem, CartNumber, Total } from './style'
import { Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseAmount, increaseAmount, removeProduct } from '../../state/cart/cartSlice'
import { ButtonStyle } from '../button/style'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

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
        {cart.numberOfItems > 0 ? <CartNumber>{cart.numberOfItems}</CartNumber> : ""}
    </Button>
    <Drawer placement="right" onClose={onClose} open={open}>
      <CartContent>
        <ul>
          {cart.numberOfItems > 0 ? cart.items.map((e, idx) => {
            return (
              <CartItem key={idx}>
                <img src={e.image} alt={e.name}/>
                <CartDetails>
                  <h3>{e.name}</h3>
                  <p>{e.price}kr</p>
                  <Amount>
                    <button onClick={()=>{dispatch(decreaseAmount(e))}}>-</button>
                    <div>{e.amount}</div>
                    <button onClick={()=>{dispatch(increaseAmount(e))}}>+</button>
                  </Amount>
                </CartDetails>
                <button onClick={()=>{dispatch(removeProduct(e))}}>x</button>
              </CartItem>
            )
          }) : "No items"}
        </ul>
        <Bottom>
          <p>Total</p>
          <Total>{Math.floor(cart.total)}kr</Total>
          {
            cart.numberOfItems > 0 ? <Link to="success"><ButtonStyle onClick={()=>{
              onClose()
              dispatch(clearCart())
            }}>Checkout</ButtonStyle></Link> : ""
          }
        </Bottom>
      </CartContent>
    </Drawer>
    </>
  )
}

export default Cart
