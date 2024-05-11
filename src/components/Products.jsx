// eslint-disable-next-line no-unused-vars
import React from 'react'
import product from '../images/product.jpg'
const Products = () => {
  return (
    <>
        <div className='w-72 h-80 border-2'>
        <img src={product} alt="" />
        <h2>1500$</h2>
        <button>Add to cart</button>
        </div>
    </>
  )
}

export default Products