import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { Products } from '../@types/Product.type';
import ProductItem from './ProductItem';

type LatestProductType = Products[] | []

const LatestCollection = () => {   
    // React hooks must be written at the beginning of the components, hooks call be when the components re-render
    const [latestProduct, setLatestProduct] = useState<LatestProductType>([]);

    // if we are getting products now, The typescript uncertain products is object, because it's can be null, so typescript would our check
    const context = useContext(ShopContext);
   
    
    useEffect(() => {
        if(context && context.products) {
            setLatestProduct(context.products.slice(0, 10))
        }
    }, [context])

     // check if context not ready => return Loading...
     if(!context) {
        return(
            <div>...Loading</div>
        )
    };
    return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"} text2={"COLLECTION"}></Title>
            <p className='w-3/4 m-auto text-xs sm:text md:text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id quisquam repellat numquam accusamus tempore veniam architecto iusto cum eaque.</p>
        </div>

        {/* Rendering Product */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latestProduct.map((items, index) => {
                return(
                    <ProductItem 
                        key={index} 
                        id={items._id} 
                        image={items.image} 
                        name={items.name} 
                        price={items.price}>
                    </ProductItem>
                )
            })}
        </div>
    </div>
  )
}

export default LatestCollection
