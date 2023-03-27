import { Rate } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ButtonStyle } from '../../components/button/style'
import Review from '../../components/products/reviews'
import useFetch from '../../hooks/useFetch'
import { addProduct } from '../../state/cart/cartSlice'
import { BASE_URL } from '../../utils/constants'
import { ImageContainer, Info, NewPrice, OldPrice, Percentage, Price, Wrapper } from './style'

const Product = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useFetch(`${BASE_URL}/${id}`)

  const dispatch = useDispatch()

  const calculateDiscount = (x, y) => {
    let percentage = (x - y) / x * 100
    if (percentage === 0) {
      return
    }
    return `-${Math.floor(percentage)}%`
  }

  let priceOutput = <p>{data.price}kr</p>
  let price = Math.floor(data.price)
  let discount = ""

  if (data.discountedPrice !== data.price) {
    price = Math.floor(data.discountedPrice)
    priceOutput = <p><NewPrice>{data.discountedPrice}kr</NewPrice><OldPrice>{data.price}kr</OldPrice></p>
    discount = <Percentage>{calculateDiscount(data.price, data.discountedPrice)}</Percentage> 
  } 

  if (!data) {
    return <p>No data..</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>An error has occured</p>
  }

  const handleAdd = () => {
    dispatch(
      addProduct({
        id: data.id,
        name: data.title,
        price: price,
        image: data.imageUrl,
        amount: 1,
      }));
  }

  return (
    <Wrapper>
      <ImageContainer>
        <img src={data.imageUrl} alt={data.title} />
        {discount}
      </ImageContainer>
      <div>
        <h1>{data.title}</h1>
        <Price>{priceOutput}</Price>
        <Rate allowHalf disabled defaultValue={data.rating} />
        <ButtonStyle onClick={handleAdd} content={'Add to cart'}>
          Add to Cart
        </ButtonStyle>
      </div>
      <Info>
        <h2>Description</h2>
        <div>{data.description}</div>
        <h2>Reviews</h2>
        {data.reviews.length > 0 ? data.reviews.map((review, idx) => {
          return (
            <Review key={idx} name={review.username} desc={review.description} rating={review.rating}></Review>
          )
        }) : "No reviews yet.."}
      </Info>
    </Wrapper>
  )
}

export default Product

