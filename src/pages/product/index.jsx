import Meta from '../../utils/meta'
import { useEffect, useState } from 'react'
import { Rate } from 'antd'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../../components/loader'
import Review from '../../components/products/reviews'
import useFetch from '../../hooks/useFetch'
import { ButtonStyle } from '../../components/button/style'
import { addProduct } from '../../state/cart/cartSlice'
import { BASE_URL } from '../../utils/constants'
import { ImageContainer, Info, NewPrice, OldPrice, Percentage, Price, Wrapper } from './style'
import { calculateDiscount } from '../../functions/calculateDiscount'

const Product = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useFetch(`${BASE_URL}/${id}`)
  const [price, setPrice] = useState(null)
  const [onSale, setOnSale] = useState(false)
  const dispatch = useDispatch()

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
  
  useEffect(() => {
    if (data.price > data.discountedPrice) {
      setPrice(Math.floor(data.discountedPrice))
      setOnSale(true)
    } else {
      setPrice(Math.floor(data.price))
    }
  }, [data])

  let discount;
  let priceOutput = <p>{price}kr</p>

  if (onSale) {
    priceOutput = <p><NewPrice>{price}kr</NewPrice><OldPrice>{Math.floor(data.price)}kr</OldPrice></p>
    discount = <Percentage>{calculateDiscount(data.price, data.discountedPrice)}</Percentage> 
  } 

  if (!data) {
    return <p>No data..</p>
  }

  if (isLoading) {
      return <Loader />
  }

  if (isError) {
      return <p>An error has occured</p>
  }

  return (
    <>
      <Meta title={data.title} description={data.description}/>
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
    </>
  )
}

export default Product

