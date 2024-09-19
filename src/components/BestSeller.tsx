import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { Products } from '../@types/Product.type';
import ProductItem from './ProductItem';

 const BestSeller = () => {
    // set type Products for bestSeller
    const [bestSeller, setBestSeller] = useState<Products[]>([])
    const context =useContext(ShopContext);
    const products= context?.products || [];
    
    useEffect(() => {
        if(products.length > 0) {
           const bestProduct = products.filter((item) => {
            return (
                item.bestseller
            )
           });
           setBestSeller(bestProduct.slice(0, 5))
        }
    }, [products]);
    console.log(bestSeller)
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={"BEST"} text2={"SELLER"}></Title>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, explicabo.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {bestSeller.map((item, index) => {
                return(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}></ProductItem>
                )
            })}
        </div>
    </div>
  )
}

export default BestSeller;