import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = (props) => {
  return (
    <Helmet>
      <title>BuyStuff.no | {props.title}</title>
      <meta name={props.description}></meta>
    </Helmet>
  )
}

export default Meta
