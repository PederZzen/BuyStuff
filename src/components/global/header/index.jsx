import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../cart/Cart'
import { Content, Menu, Wrapper } from './style'

const Header = () => {
  return (
    <Wrapper>
        <Content>
            <Menu>
                <NavLink to="/">
                  <h1>BuyStuff.no</h1>
                </NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "activeNavlink" : ""} to="/">Home</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "activeNavlink" : ""} to="contact">Contact</NavLink>
            </Menu>
            <Cart />
        </Content>
    </Wrapper>
  )
}

export default Header
