import React,{createContext, useState} from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart =() =>{
    let cart ={};
    for(let index=0;index<all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider =(props)=>{
    const [cartItems,setCartItems] =useState(getDefaultCart())

    const addTocart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        
    }
    const removeFromcart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const gettotalcartAmount =()=>{
        let totalamount = 0;
        for(const item in  cartItems){
            if(cartItems[item]>0){
                let iteminfo= all_product.find((product)=>
                    product.id === Number(item))
                totalamount += iteminfo.new_price*cartItems[item];
            
            }
        }
        return totalamount;
    }
    const gettotalcartitems =()=>{
        let totalItems = 0;
        for(const item in  cartItems){
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            
            }
        }
        return totalItems;
    }
    const contextValue ={gettotalcartitems,gettotalcartAmount,all_product,cartItems,addTocart,removeFromcart};
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;