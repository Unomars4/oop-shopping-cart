import {FormEvent, useState} from 'react';
import './App.css';
import Button from './components/Button';
import Cart from './components/Cart';
import ProductCard from './components/ProductCard';
import {useProductsValue} from './contexts/productsContext';

function App() {
    const products = useProductsValue();
    const [showCart, setShowCart] = useState<boolean>(false);

    const toggleCart = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowCart(!showCart)
    }

    const handleCheckout = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    return (
        <>
            <header>
                <h1>Desserts Page🍨🍦</h1>
                <Button type='cart-btn' label="Open Cart" clickHandler={toggleCart} />
            </header>
            <main className="products">
                <Cart isOpen={showCart} />
                {products?.map((item) => <ProductCard key={item.id} product={item} />)}
            </main>
        </>
    )
}

export default App
