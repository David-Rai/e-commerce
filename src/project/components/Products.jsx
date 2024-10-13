import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../projectStore/ProductSlice";
import { addProduct } from "../projectStore/ProductSlice";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  //fetching data on component mount
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  //handing add to cart feature
  const addTocart=(product)=>{
    dispatch(addProduct(product))
  }
   //showing the detail of product
const handleDetail=(product)=>{
navigate('/details',{state:product})
}

           //html and css or simply jsx
  return (
    <main className="h-[100vh] w-full bg-bgColor]">
      <div className="min-screen w-full flex flex-wrap gap-2 justify-evenly">
        {" "}
        {/* products */}
        {products.data &&
          products.data.map((product, index) => {
            return (
              <div
              onClick={() => handleDetail(product)}
                key={index}
                className="h-[40vh] w-[40%] bg-white shadow-lg mt-2 px-2 py-4 
                rounded-md flex flex-col items-start justify-evenly
                sm:w-[30%]
                lg:w-[20%]
                "
              >
                <div className="image h-[40%] w-full flex items-center justify-center">
                <img src={product.image} className="h-full w-[60%]" />
                </div>
                <h1 className="capitalize font-semibold">{product.category}</h1>
                <h1 className="text-priceColor">{product.price}$</h1>
                <button
                onClick={()=> addTocart(product)}
                  className="bg-btn text-white w-[120px]
                  h-10 rounded-md focus:bg-orange-200"
                >
                  Add
                </button>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default Products;
