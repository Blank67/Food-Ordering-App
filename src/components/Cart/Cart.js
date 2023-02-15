import { useContext } from 'react';
import CartContext from '../../store/card-context';
import Modal from '../UI/Modal';
import css from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItem = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,quantity:1});
    };
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const items = cartCtx.items.map((item) => {
        // console.log(item.name);
        return (
            <CartItem id={item.id} key={item.id} name={item.name} price={item.price} quantity={item.quantity} onAdd={cartItemAddHandler.bind(null,item)} onRemove={cartItemRemoveHandler.bind(null,item.id)} />
        );
    });
    let totalPrice = 0;
    cartCtx.items.forEach((item) => {totalPrice = (item.price * item.quantity).toFixed(2)});

    const onOrderClickHandler = () => {
        props.onHide();
        props.onOrderShow();
        cartCtx.orderItems();
    }

    return (
        <Modal onClick={props.onHide}>
            <ul className={css['cart-items']}>{items}</ul>
            <div className={css.total}>
                <span>Total Amount</span>
                <span>{`Rs. ${totalPrice}`}</span>
            </div>
            <div className={css.actions}>
                <button className={css['button--alt']} onClick={props.onHide}>Close</button>
                {hasItem && <button className={css.button} onClick={onOrderClickHandler} >Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;