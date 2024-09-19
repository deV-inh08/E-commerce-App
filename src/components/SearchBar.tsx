import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
    const context = useContext(ShopContext);
    // let search, setSearch, showSearch, setShowSearch;
    // if(context) {
    //     {search, setSearch, showSearch, setShowSearch} = context;
    // }
    console.log(context);
    
  return (
    <div>SearchBar</div>
  )
}

export default SearchBar;