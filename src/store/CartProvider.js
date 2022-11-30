import React, { useState } from "react";
import CartContext from "./card-context";

const CartProvider = (props) => {
    const [items,setItems] = useState([]);

    const addItemHandler = (item) => {
        // console.log(item);
        // console.log(items);
        setItems([...items, item]);
        // console.log(items);
        // console.log(`Inside CartProvider addItemHandler()-> ${cartContext}`);
    };
    const removeItemHandler = (id) => {};

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {/* {console.log('Inside CartProvider return cartContext->', cartContext)} */}
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;