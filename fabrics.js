// Fabrics.js
import React, { useState } from 'react';

const Fabrics = () => {
    const [fabrics, setFabrics] = useState([
        { id: 1, name: 'Fabric 1' },
        { id: 2, name: 'Fabric 2' },
        // Add more fabric items here
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (fabric) => {
        setCart([...cart, fabric]);
    };

    return (
        <div>
            <h1>Fabrics</h1>
            <ul>
                {fabrics.map((fabric) => (
                    <li key={fabric.id}>
                        {fabric.name}
                        <button onClick={() => addToCart(fabric)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

            <h2>Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Fabrics;
