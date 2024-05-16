// eslint-disable-next-line no-unused-vars
import React from 'react'
import product from '../images/product.jpg'
const Products = () => {
  return (
    <>
    <div className='flex justify-center pt-10'>
        <div className='w-72 h-80 border-2 p-7 mr-6 rounded-md '>
        <img src={product} alt="" />
        <h2 className='font-bold'>1500$</h2>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add to cart</button>
        </div>
        <div className='w-72 h-80 border-2 p-7 mr-6 rounded-md'>
        <img src={product} alt="" />
        <h2 className='font-bold'>1500$</h2>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add to cart</button>
        </div>
        <div className='w-72 h-80 border-2 p-7 rounded-md'>
        <img src={product} alt="" />
        <h2 className='font-bold'>1500$</h2>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default Products