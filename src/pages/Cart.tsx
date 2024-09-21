import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets';

interface CartDataType {
  _id: string;
  size: string;
  quantity: number;
}

const Cart = () => {
  const {products, currency, cartItem, updateQuantity} = useContext(ShopContext);
  const [cartData, setCartData] = useState<CartDataType[]>([]);

  

  useEffect(() => {
     const tempData = [];
     for(const items in cartItem) {
      for(const item in cartItem[items]) {
        if(cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
     };
     setCartData(tempData);
  }, [cartItem]);
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={"YOUR"} text2={"CART"}></Title>
      </div>

      <div className=''>
        {cartData.map((item, index) => {
          const productsData = products.find((product) => product._id === item._id);

          return(
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_o.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productsData?.image[0]} alt="ImageProduct" />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productsData?.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productsData?.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
              </div>
              <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
              <img onClick={() => updateQuantity(item._id, item.size, item.quantity)} src={assets.bin_icon} alt="BinIcon" className='w-4 mr-4 sm:w-5 cursor-pointer'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart
