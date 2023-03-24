import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch.js'
import { BASE_URL } from '../../utils/constants'
import Item from '../../components/products/Item/index.jsx'
import { InputContainer, ProductsContainer, Wrapper } from './style.js'
import { Input } from 'antd'

const Home = () => {

    const { data, isLoading, isError } = useFetch(BASE_URL)
    const [products, setProducts] = useState(data)
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        setProducts(data)
    }, [data])

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase())
    })

    if (!data) {
        return <p>No data..</p>
    }
    if (isLoading) {
        return <p>Loading..</p>
    }
    if (isError) {
        return <p>An error has occured</p>
    }

    return (
        <Wrapper>
            <h1>Welcome to BuyStuff.no</h1>
            <h2>Your friendly neighbourhood online store</h2>
            <InputContainer>
                <Input type="text" placeholder="Search.." onChange={(e) => {setSearch(e.target.value)}}></Input>
            </InputContainer>
            
            <ProductsContainer>
                {filteredProducts ? filteredProducts.map((product, idx) => {
                    return <Item key={idx} product={product}>{product.title}</Item>
                }) : "No data"}
            </ProductsContainer>
        </Wrapper>
    )
}

export default Home
