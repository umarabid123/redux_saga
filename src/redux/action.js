import { ADD_TO_CART, EMPTY_CART, PRODUCT_LIST, REMOVE_CART } from "./constant";

export const addCart =(data)=>{
    console.log("Called action",data);
    return {
        type:ADD_TO_CART,
       data

    }
}

export const removeCart =(data)=>{
    console.log("Called action",data);
    return {
        type:REMOVE_CART,
       data

    }
}

export const emptyCart =(data)=>{
    console.log("Called action",data);
    return {
        type:EMPTY_CART,
       data

    }
}

