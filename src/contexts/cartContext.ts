import {createContext, useContext} from "react";
import {ShoppingCart} from "../domains/cart";

export const CartContext = createContext<ShoppingCart | null>(null);

export const useCartValue = () => {
    const ctx = useContext(CartContext);
    return ctx;
}

export default CartContext;
