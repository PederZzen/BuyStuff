import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cart/CartIcon'
import { Content, Menu, Wrapper } from './style'

const Header = () => {
  return (
    <Wrapper>
        <Content>
            <Menu>
                <h1>BuyStuff.no</h1>
                <Link to="/">Home</Link>
                <Link to="contact">Contact</Link>
            </Menu>
            <CartIcon />
        </Content>
    </Wrapper>
  )
}

export default Header
