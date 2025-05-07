import { PRODUCT_LIST } from "./constant";

export const productAction =(data="hello")=>{
    console.log("Called action Product List",data);
    return {
        type:PRODUCT_LIST,
       data 

    }
}