import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Products } from '../@types/Product.type';
import Title from './Title';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';


type RelatedProductProps = {
    category: string;
    subCategory: string;
};

const RelatedProduct: React.FC<RelatedProductProps> = ({category, subCategory}) => {

    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState<Products[]>([]);

    useEffect(() => {
        if(products.length > 0) {
            let productsCopy: Products[] = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0, 5));
            
        }
    }, [products, category, subCategory]);
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={"RELATED"} text2={"PRODUCT"}></Title>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item, index) => {
                return (
                    <ProductItem key={index} id={item._id} price={item.price} name={item.name} image={item.image}></ProductItem>
                )
            })}
        </div>
    </div>
  )
};

RelatedProduct.propTypes = {
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
}

export default RelatedProduct;
