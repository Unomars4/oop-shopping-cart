import {FormEvent} from "react";
import data from "../../data/items";
import {useCartValue} from "../contexts/cartContext";
import {Category, Items} from "../types";
import Button from "./Button";

interface IProductCard {
    product: Items;
}


export default function ProductCard({product}: IProductCard) {
    const {id, name, price, catergory} = product;
    const cart = useCartValue();

    function catergoryIcon(catergory: Category): string {
        let icon: string = "🍨";

        switch (catergory) {
            case "Ice Cream":
                icon = "🍦";
                break;
            case "Macaron":
                icon = "🍪";
                break;
            case "Pretzel":
                icon = "🥨";
                break;
            case "Cupcake":
                icon = "🧁";
                break;
            default:
                break;
        }

        return icon;
    }

    const addToCartHandler = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const {index} = e.target.dataset;
        cart!.addItem(Number(index), data);
    }

    return (
        <article key={id} className="product-card">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Category: {catergoryIcon(catergory)}</p>
            <Button index={id} type="add-to-cart" clickHandler={addToCartHandler} label={"Add To Cart"} />
        </article>
    );
}
