import {useEffect, useRef, useState} from "react";
import {useProductsValue} from '../contexts/productsContext';
import {useCartValue} from "../contexts/cartContext";
import Button from "./Button";

interface ICart {
    isOpen: boolean;
}

function Cart({isOpen}: ICart) {
    const products = useProductsValue();
    const cart = useCartValue()!;
    const itemsInCart: {[key: number]: number} = cart.totalCountPerProduct;
    const {sub, tax, total} = cart.total;


    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [isDialogOpen, setDialogOpen] = useState<boolean>(isOpen);

    const handleClose = () => {
        setDialogOpen(false);
    }

    const handleCheckout = () => {
        cart.emptyCart();
        setDialogOpen(false);
    }

    useEffect(() => {
        setDialogOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const dialogElement = dialogRef.current;
        if (dialogElement) {
            if (isDialogOpen) {
                dialogElement.showModal();
            } else {
                dialogElement.close();
            }
        }

    }, [isDialogOpen]);


    return (
        <dialog ref={dialogRef} className="cart-container">
            <div>
                <h2>🛒 Cart:</h2>
                <Button clickHandler={handleClose} type="cart-btn" label="✖" />
            </div>
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
            <Button clickHandler={handleCheckout} label="Checkout" type="checkout" />
        </dialog>
    );
}

export default Cart;

