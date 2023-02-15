import React, { useState } from "react";
import CartContext from "./card-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemHandler = (item) => {
        const existingCartItemIndex = items.findIndex((itm) => (itm.id === item.id));
        const existingCartItem = items[existingCartItemIndex];
        let updatedItemsList = [...items];
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: Number(existingCartItem.quantity) + Number(item.quantity)
            }
            updatedItemsList[existingCartItemIndex] = updatedItem;
        } else {
            updatedItemsList = items.concat(item);
        }
        setItems(updatedItemsList);
    };
    const removeItemHandler = (id) => {
        const existingCartItemIndex = items.findIndex((itm) => (itm.id === id));
        const existingCartItem = items[existingCartItemIndex];
        let updatedItemsList = [...items];
        if (Number(existingCartItem.quantity) === 1) {
            updatedItemsList = updatedItemsList.filter((itm) => (itm.id !== id));
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: Number(existingCartItem.quantity) - 1
            }
            updatedItemsList[existingCartItemIndex] = updatedItem
        }
        setItems(updatedItemsList);
    };

    const orderItemHandler = () => {
        setItems([]);
    }

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        orderItems: orderItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;