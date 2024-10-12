import React, { useEffect } from 'react'
import Nav from './Nav.jsx'
import { useDispatch,useSelector } from 'react-redux'
import { MdDeleteOutline } from "react-icons/md";
import {removeProduct} from '../projectStore/ProductSlice.jsx'

const Cart = () => {
const dispatch=useDispatch()
const cartData = useSelector((state) => state.product.cartData);

//removing the product from cart
const handleRemove=(index)=>{
  console.log(index)
dispatch(removeProduct(index))
}


  return (
    <div className='h-screen w-full '>
      <Nav />
{/* cart container */}
<div>
  {
    cartData.length === 0 ?
    (
      <h1>Your cart is empty!!</h1>
    )
    :
   ( cartData.map((cart,index)=>{
      return (
        <div className="cart h-[20vh] m-3 bg-white shadow-lg flex items-center justify-evenly" key={index}>
          <img src={cart.imgUrl} className='h-[80%] w-[20%]'/>
          <h1>{cart.category}</h1>
          <h1>{cart.price}$</h1>
          <MdDeleteOutline className='text-2xl text-red-500' onClick={()=> handleRemove(index)}/>
        </div>
      )
    }))
  }
</div>

    </div>
  )
}

export default Cart
