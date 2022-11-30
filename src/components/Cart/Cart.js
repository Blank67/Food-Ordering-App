import { useContext } from 'react';
import CartContext from '../../store/card-context';
import Modal from '../UI/Modal';
import css from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItem = cartCtx.items.length > 0;
    const cartItemAddHandler = (item) => {};
    const cartItemRemoveHandler = (id) => {};

    const items = cartCtx.items.map((item) => {
        console.log(item.name);
        return (
            <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity} onAdd={cartItemAddHandler} onRemove={cartItemRemoveHandler} />
        );
    });
    let totalPrice = 0;
    cartCtx.items.forEach((item) => {totalPrice = (item.price * item.quantity).toFixed(2)});

    return (
        <Modal onClick={props.onHide}>
            <ul className={css['cart-items']}>{items}</ul>
            <div className={css.total}>
                <span>Total Amount</span>
                <span>{totalPrice}</span>
            </div>
            <div className={css.actions}>
                <button className={css['button--alt']} onClick={props.onHide}>Close</button>
                {hasItem && <button className={css.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;