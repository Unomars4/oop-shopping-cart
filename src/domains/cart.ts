import {Items, Totals} from "../types";

export class ShoppingCart {
    private items: Items[];
    private taxRate: number = 8.25;
    public totalCountPerProduct: {[key: number]: number} = {};

    constructor() {
        this.items = [];
    }

    public addItem(id: number, itemsInStock: Items[]): void {
        const product = itemsInStock.find(p => p.id === id)!;
        this.items.push(product);

        this.totalCountPerProduct[product.id] = (this.totalCountPerProduct[product.id] || 0) + 1;
    }

    public get total(): Totals {
        const sub = Number(this.items.reduce((sum, curr) => sum + curr.price, 0).toFixed(2));
        const tax = this.items.reduce((sum, curr) => sum + Number(((curr.price * this.taxRate) / 100).toFixed(2)), 0)
        const total = sub + tax;
        return {
            sub,
            tax,
            total,
        }
    }

    public emptyCart(): void {
        this.items = [];
    }
}
