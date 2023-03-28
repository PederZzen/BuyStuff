import Meta from '../../utils/meta/index.jsx'
import { useEffect, useState } from 'react'
import { Input } from 'antd'
import Item from '../../components/products/Item/index.jsx'
import useFetch from '../../hooks/useFetch.js'
import { BASE_URL } from '../../utils/constants'
import { InputContainer, ProductsContainer, Wrapper } from './style.js'
import Loader from '../../components/loader/index.jsx'

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
        return <Loader />
    }
    if (isError) {
        return <p>An error has occured</p>
    }

    return (
        <>
        <Meta title="Home" description="BuyStuff.no! Stuff at a very ordinary price... except the perfume"/>
        <Wrapper>
            <h1>Welcome to BuyStuff.no</h1>
            <h2>Stuff at a very ordinary price... except the perfume</h2>
            <InputContainer>
                <Input type="text" placeholder="Search.." onChange={(e) => {setSearch(e.target.value)}}></Input>
            </InputContainer>
            
            <ProductsContainer>
                {filteredProducts ? filteredProducts.map((product, idx) => {
                    return <Item key={idx} product={product}>{product.title}</Item>
                }) : "No data"}
            </ProductsContainer>
        </Wrapper>
        </>
    )
}

export default Home
