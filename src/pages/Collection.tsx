import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets';
import Title from '../components/Title';
import { Products } from '../@types/Product.type';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterProducts, setFilterProducts] = useState<Products[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState("relavent");
  const context = useContext(ShopContext);
  const products = context?.products || [];

  const toggleCaterogy = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter((item) => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  };

  // when we click input => check value of input this has data ? if it have => ...spread 
  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter((item) => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  };

  const applyFilter = () => {
    let productsCopy: Products[] = products.slice();

    if(category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category))
    }
    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory))
    };

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    const fpCopy: Products[] = filterProducts.slice();
    switch(sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case "high-low": 
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter()
  }, [category, subCategory]);


  useEffect(() => {
    setFilterProducts(products)
  }, []);

  useEffect(() => {
    console.log(subCategory);
  }, [subCategory]);

  useEffect(() => {
    sortProduct()
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="DropdownIcon" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onChange={toggleCaterogy} type="checkbox" className='w-3' value={"Men"} />Men
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleCaterogy} type="checkbox" className='w-3' value={"Women"} />Women
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleCaterogy} type="checkbox" className='w-3' value={"Kids"} />Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"}`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} type="checkbox" className='w-3' value={"Topwear"} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} type="checkbox" className='w-3' value={"Bottomwear"} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} type="checkbox" className='w-3' value={"Winterwear"} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:hrid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => {
            return(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}></ProductItem>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Collection
