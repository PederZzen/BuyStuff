import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonStyle } from '../../button/style'
import { Image, Wrapper } from './style'

const Item = ({ product }) => {
  return (
    <Wrapper>
        <Image src={product.imageUrl} alt={product.title}/>
        <p>{product.title}</p>
        <Link to={`/product/${product.id}`}>
          <ButtonStyle>View product</ButtonStyle>
        </Link>
    </Wrapper>
  )
}

export default Item
