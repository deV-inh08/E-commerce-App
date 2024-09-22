import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { Products } from '../@types/Product.type';
import { assets } from '../assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productID } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState<Products | null>(null);
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>("");
  

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productID) {
        setProductsData(item);
        setImage(item.image[0])
        return null
      }
    })
  };
  useEffect(() => {
    fetchProductData()
  }, [productID]);

  return productsData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className="flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productsData.image.map((item, index) => {
              return (
                <img src={item} alt="ImageProduct" key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              )
            })}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="Image" className='w-full h-auto' />
          </div>
        </div>

        {/* ----------- Product infor --------------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productsData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className='w-3' src={assets.star_icon} alt="StartIcon" />
            <img className='w-3' src={assets.star_icon} alt="StartIcon" />
            <img className='w-3' src={assets.star_icon} alt="StartIcon" />
            <img className='w-3' src={assets.star_icon} alt="StartIcon" />
            <img className='w-3' src={assets.star_icon} alt="StartIcon" />
            <img className='w-3' src={assets.star_dull_icon} alt="StartIcon" />
            <p className='pl-2'>(112)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productsData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productsData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productsData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-300 ${item === size ? "border-orange-500" : ""}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productsData._id, size)}  className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:s-4/5 ' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* Review Section % Description */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review (222)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eum ipsa unde in ad eaque deserunt amet, quod aliquam accusamus, nesciunt dolorem ex dolor possimus voluptatem maxime! Officia neque dolores aliquid aspernatur magni animi repellendus odio modi ipsam, ab quo!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla a culpa, nihil similique nam consequatur minima nesciunt cupiditate error. Doloremque.</p>
        </div>
      </div>

      {/* display related product */}
      <RelatedProduct category={productsData.category} subCategory={productsData.subCategory}></RelatedProduct>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
