import Modal from '../UI/Modal';
import css from './Cart.module.css';

const Cart = (props) => {
    const items = [{id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99,}].map((item) => (<li key={item.id}>{item.name}</li>));

    return (
        <Modal>
            <ul className={css['cart-items']}>{items}</ul>
            <div className={css.total}>
                <span>Total Amount</span>
                <span>Rs. 100</span>
            </div>
            <div className={css.actions}>
                <button className={css['button--alt']}>Close</button>
                <button className={css.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;