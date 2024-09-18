import React, { createContext } from 'react';
import { products } from "../assets/index";
import { Products } from '../@types/Product.type';

// JSX, string, number... Đại diện bất kì phần tử nào làm children => React.ReactNode
type ShopContextProvider = {
    children: React.ReactNode;
};

// Khai báo 1 type cho value => truyền null vào createContext(null) nhưng thực tế ta cần 1 Object "value" => Khai báo type
type ShopContextType = {
    products: Products[];
    currency: string;
    delivery_fee: number;
} | null;

export const ShopContext = createContext<ShopContextType>(null);

const ShopContextProvider = ({children}: ShopContextProvider) => {
    const currency = "$";
    const delivery_fee = 10;

    const value = {
        products, currency ,delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;