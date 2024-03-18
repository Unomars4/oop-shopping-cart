import {FormEvent, ReactNode, useRef} from "react";
import {useProductsValue} from '../contexts/productsContext';
import {useCartValue} from "../contexts/cartContext";
import Button from "./Button";

interface ICart {
    isOpen: boolean;
}

function Cart({isOpen, onSubmit}: ICart) {
    const products = useProductsValue();
    const itemsInCart: {[key: number]: number} = useCartValue()!.totalCountPerProduct;
    const {sub, tax, total} = useCartValue()!.total;
    const dialogRef = useRef<HTMLDialogElement>(null);


    return (
        <dialog className="cart-container">
            <h2>🛒 Cart:</h2>
            <ul className="cart-list">
                {Object.keys(itemsInCart).map((v) => {
                    const id = Number(v);
                    const {name} = products!.find(p => p.id === id)!;
                    return (
                        <li key={v}>{itemsInCart[id]}x {name}</li>
                    )
                })}
            </ul>
            <div className="totals">
                <p>SubTotal: ${sub}</p>
                <p>Tax: ${tax}</p>
                <p>Total: ${total}</p>
            </div>
            <Button clickHandler={} label="Checkout" type="checkout" />
        </dialog>
    );
}

export default Cart;

