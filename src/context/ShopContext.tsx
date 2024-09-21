import React, { createContext, useEffect, useState } from 'react';
import { products } from "../assets/index";
import { Products } from '../@types/Product.type';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router-dom';

// JSX, string, number... Đại diện bất kì phần tử nào làm children => React.ReactNode
type ShopContextProvider = {
    children: React.ReactNode;
};

// 
interface Search {
    search: string;
    setSearch: (value: string) => void;
    showSearch: boolean;
    setShowSearch: (value: boolean) => void;
};


interface AddToCartItem {
    addToCart: (itemId: string, size: string) => void;
};

interface CartItem {
    [itemId: string]: {
        [size: string]: number
    }
}

interface UpdataQuantity {
    updateQuantity: (itemId: string, size: string, quantity: number) => void;
}

interface CartAmount {
    getCartAmount: () => number;
}

// Khai báo 1 type cho value => truyền null vào createContext(null) nhưng thực tế ta cần 1 Object "value" => Khai báo type
interface ShopContextType extends Search, AddToCartItem, UpdataQuantity, CartAmount {
    products: Products[];
    currency: string;
    delivery_fee: number;
    getCartCount: () => number
    cartItem: CartItem;
    navigate: NavigateFunction;
};

// const value: ShopContextType = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItem,
//     addToCart,
//     getCartCount,
//     updateQuantity,
// }

export const ShopContext = createContext<ShopContextType>({});

const ShopContextProvider = ({children}: ShopContextProvider) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [cartItem, setCartItem] = useState<CartItem>({});

    // useNavigate react-router-dom => điều hướng page
    const navigate = useNavigate();
    
    const addToCart = async (itemId: string, size: string): Promise<void> =>  {
        if(!size) {
            toast.error("Select Product size");
            return;
        };
        const cartData: CartItem = structuredClone(cartItem);
        if(cartData[itemId]) {
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }        
        setCartItem(cartData);
    }

    useEffect(() => {
        // console.log(cartItem);
    }, [cartItem]);

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItem) {
            for(const item in cartItem[items]) {
                try {
                    if(cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item];
                    }
                } catch(err) {
                    console.log(err);
                }
            }
        }
        return totalCount
    };

    const getCartAmount = () :number => {
        let totalAmount = 0;
        for(const items in cartItem) {
            const itemInfo: Products | undefined = products.find((product) => product._id === items);
            console.log(itemInfo);
            
            for(const item in cartItem[items]) {
                try {
                    if(cartItem[items][item]) {
                        totalAmount += itemInfo?.price ?? 0 * cartItem[items][item]
                    }
                } catch(err) {
                    console.log(err);
                }
            }
        }
        return totalAmount
    };


    const updateQuantity = async (itemId: string, size: string, quantity: number): Promise<void> => {
        const cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);
    };

    const value = {
        products, currency ,delivery_fee, search, setSearch, showSearch, 
        setShowSearch, cartItem, addToCart, getCartCount, updateQuantity, getCartAmount, navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;