export type Category = "Ice Cream" | "Macaron" | "Pretzel" | "Cupcake";

export interface Items {
    id: number,
    name: string;
    price: number;
    catergory: Category;
}

export interface Totals {
    sub: number;
    tax: number;
    total: number;
}
