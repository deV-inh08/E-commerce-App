import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { Products } from '../@types/Product.type';

const Product = () => {
  const {productsId} = useParams();
  const {products} = useContext(ShopContext);
  const [productsData, setProductsData] = useState<Products | null>(null);
  
  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productsId) {
        setProductsData(item);
        return null
      }
    })
  };
  useEffect(() => {
    fetchProductData()
  }, [productsId, products]);

  return (
    <div>
      This is product Page
    </div>
  )
}

export default Product
