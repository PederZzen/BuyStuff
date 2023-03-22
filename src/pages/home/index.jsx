import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch.js'
import { BASE_URL } from '../../utils/constants'
import Item from '../../components/products/Item/index.jsx'
import { ProductsContainer, Wrapper } from './style.js'

const Home = () => {

    const { data, isLoading, isError } = useFetch(BASE_URL)
    const [product, setProduct] = useState(data)

    console.log(data);

    return (
        <Wrapper>
            <h1>Welcome to BuyStuff.no</h1>
            <h2>Your friendly neighbourhood online store</h2>
            <ProductsContainer>
                {data ? data.map((product, idx) => {
                    return <Item key={idx} product={product}>{product.title}</Item>
                }) : "No data"}
            </ProductsContainer>
        </Wrapper>
    )
}

export default Home
