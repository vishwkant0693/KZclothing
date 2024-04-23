import React, { createContext, useState } from "react";
import all_products from "../components/Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItem,setCartItem] = useState(getDefaultCart())
    
    const addToCart =(itemId)=> {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart =(itemId)=> {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalAmount = () => {
        let total = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                total += itemInfo.new * cartItem[item];
            }
        }
        return total;
    }
    
    const contextValue = {all_products,cartItem,addToCart,removeFromCart,getTotalAmount};
    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;