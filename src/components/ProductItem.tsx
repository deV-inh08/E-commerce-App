import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

type ProductItemProps = {
    id: string;
    image: string[];
    name: string;
    price: number;
}

const ProductItem = ({id, image, name, price}: ProductItemProps) => {
    const context = useContext(ShopContext);
    if(!context) {
        return(
            <div>...Loading</div>
        )
    };
    const {currency} = context;
    return (
        <Link to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="ImageProduct" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    )
}

export default ProductItem
