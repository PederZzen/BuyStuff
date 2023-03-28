import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonStyle } from '../../button/style'
import { Image, OnSale, Wrapper } from './style'

const Item = ({ product }) => {
  const [isOnSale, setIsOnSale] = useState(false)

  setTimeout(() => {
      if (product.price !== product.discountedPrice) {
        setIsOnSale(true)
      }
  }, 200)


  return (
    <Wrapper>
        <Image src={product.imageUrl} alt={product.title}/>
        <p>{product.title}</p>
        <h2>{isOnSale ? product.discountedPrice : product.price}kr</h2>
        {isOnSale ? <OnSale>On sale</OnSale> : ""}
        <Link to={`/product/${product.id}`}>
          <ButtonStyle>View product</ButtonStyle>
        </Link>
    </Wrapper>
  )
}

export default Item
