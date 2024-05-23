import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Cart} from "./components/cart/cart";

/**
 * This is a simple React + Javascript app to demonstrate some problems (potentially bugs) or things that slows down the develop velocity.
 *
 * Some problems:
 * ❌ properties with different name
 * ❌ price as a string instead of a number (eg: price: 'batatas')
 * ❌ unknown properties/methods (IDE can't help because it doesn't know the type of the object)
 * ❌ error prone (as you saw in the presentation we had bugs even though the compiler showed success everytime)
 *
 */

function App() {
    const products = [
        {name: 'camisola', price: 15},
        {name: 'calças', price: 20},
        {name: 'sapatos', price: 15},
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className={'wrapper'}>
                <div className={'products'}>
                    <h1>Products:</h1>
                    {products.map((item, index) =>
                        <div key={index}>
                            <p>Product name: {item.name}</p>
                            <p>Product price: {item.price}€</p>
                            <button onClick={() => addToCart(item)}>Add {item.name} to cart</button>
                            <p>----------------------------</p>
                        </div>)}
                </div>
                <div className={'cart'}>
                    <h1>Cart:</h1>
                    <Cart selectedProducts={cart}/>
                </div>
            </div>
        </div>
    );
}

export default App;
