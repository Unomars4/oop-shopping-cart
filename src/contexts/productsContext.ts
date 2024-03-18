import {createContext, useContext} from "react";
import {Items} from "../types";

const ProductsContext = createContext<Items[] | null>(null);

export const useProductsValue = () => {
    const ctx = useContext(ProductsContext);
    return ctx;
}

export default ProductsContext;
