import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    let params = useParams();
    console.log(params);
    
  return (
    <div>
       This is  SingleProduct
        </div>
  )
}

export default SingleProduct