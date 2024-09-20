import React, { createContext, useState } from 'react';
import { products } from "../assets/index";
import { Products } from '../@types/Product.type';

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

// Khai báo 1 type cho value => truyền null vào createContext(null) nhưng thực tế ta cần 1 Object "value" => Khai báo type
interface ShopContextType extends Search {
    products: Products[];
    currency: string;
    delivery_fee: number;
};

export const ShopContext = createContext<ShopContextType>({});

const ShopContextProvider = ({children}: ShopContextProvider) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(false);

    const value = {
        products, currency ,delivery_fee, search, setSearch, showSearch, setShowSearch,
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;