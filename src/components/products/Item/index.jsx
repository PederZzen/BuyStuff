import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image, Wrapper } from './style'

const Item = ({ product }) => {
  return (
    <Wrapper>
        <Image src={product.imageUrl} alt={product.title}/>
        <p>{product.title}</p>
        <Link to={`/product/${product.id}`}>
          <Button>View product</Button>
        </Link>
    </Wrapper>
  )
}

export default Item
