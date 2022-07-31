import productAPI from "api/product-api";
import { useState } from "react";
import { useEffect } from "react";

export function useProductDetail(productId){
    const [product, setProduct] = useState({})
    useEffect(() => {
        ( async () => {
            try {
                const productDetail = await productAPI.getById(productId)
                setProduct(productDetail)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [productId])

    return product
}