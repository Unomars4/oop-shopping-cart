import {FC, ReactNode} from "react";
import data from "../../data/items";
import {ShoppingCart} from "../domains/cart";
import CartContext from "./cartContext";
import ProductsContext from "./productsContext";

const MainProvider: FC<{children: ReactNode}> = ({children}) => {
    const cart = new ShoppingCart();
    const products = data;

    return (
        <CartContext.Provider value={cart}>
            <ProductsContext.Provider value={products}>
                {children}
            </ProductsContext.Provider>
        </CartContext.Provider>
    )
}

export default MainProvider;
