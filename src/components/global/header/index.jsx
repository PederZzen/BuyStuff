import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Drawer } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../cart/Cart'
import { Content, Logo, Menu, MenuIcon, Wrapper } from './style'

const Header = () => {

  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  let mobile = true

  if (screenWidth > 750) {
    mobile = false
  }

  if (mobile) {
    return (
      <Wrapper>
        <Content>
          <MenuIcon onClick={showDrawer}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </MenuIcon>
          <NavLink to={'/'}>
            <Logo>BuyStuff.no</Logo>
          </NavLink>
          <Cart />
        </Content>

        <Drawer placement="top" onClose={onClose} open={open}>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="contact">Contact</NavLink>
          </div>
        </Drawer>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Content>
        <Menu>
          <NavLink to={'/'}>
            <Logo>BuyStuff.no</Logo>
          </NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </Menu>
        <Cart />
      </Content>
    </Wrapper>
  )
}

export default Header

