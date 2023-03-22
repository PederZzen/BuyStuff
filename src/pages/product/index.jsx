import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/constants'

const Product = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useFetch(`${BASE_URL}/${id}`)
  console.log(data);

  if (!data) {
    return <p>No data..</p>
  }

  return (
    <div>

    </div>
  )
}

export default Product
