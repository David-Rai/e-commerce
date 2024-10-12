import React from 'react'
import Nav from './Nav'
import {useLocation} from 'react-router-dom'
import { addProduct } from "../projectStore/ProductSlice";
import { useDispatch } from 'react-redux';

const Details = () => {
const location=useLocation()
const product=location.state
const {title,price,description,image,rating}=product
const dispatch=useDispatch()

  return (
    <div className='h-screen w-full'>
        <Nav />
        <div className="detail h-[90%] w-full bg-bgColor px-4 py-4">
          <div className="imgContain h-[40%] w-full bg-white rounded-md flex items-center justify-center shadow-xl bg-no-repeat">
          <img src={image} alt="detail image" className='h-full' />
          </div>
          <p className="describe text-xs  h-[10%] w-full overflow-hidden text-ellipsis py-4">
          {
            description
          }
          </p>
          
          
<div className="price flex items-center w-1/2 h-[10%] text-priceColor">
  {price}$
</div>

          <div className="capitalize rating  w-1/2 h-[10%]">
<h1>rating -{rating.rate}</h1>
<h1>sold - {rating.count}</h1>
          </div>

<button className='bg-btn w-[120px] h-10 rounded-md my-3 text-white capitalize' onClick={()=>dispatch(addProduct(product))}>Add to cart </button>
        </div>
    </div>
  )
}

export default Details
