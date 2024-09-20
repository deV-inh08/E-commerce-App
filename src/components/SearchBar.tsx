import React, { useContext, useEffect , useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const context = useContext(ShopContext);
  if(!context) {
    throw new Error("Not Context")
  };

  let {search, showSearch, setSearch, setShowSearch} = context;  
  
  // useLocation is a hook of react-router-dom. Access information {pathname: '/', search: '', hash: '', state: null, key: 'lthdhvhc'}
  const location = useLocation();
  useEffect(() => {
    if(location.pathname.includes("collection") && showSearch) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location, showSearch]);
  
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/2 sm:w-1/2'>
        <input onChange={(e) => setSearch(e.target.value)} type="text" value={search} placeholder='Search' className='flex-1 outline-none bg-inherit text-sm'/>
        <img src={assets.search_icon} alt="" className='w-4'/>
      </div>
      <img src={assets.cross_icon} alt="CrossIcon" className='inline w-3 cursor-pointer' onClick={() => setShowSearch(false)}/>
    </div>
  ) : null
}

export default SearchBar;