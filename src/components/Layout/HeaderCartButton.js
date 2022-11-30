import { useContext } from 'react';
import CartContext from '../../store/card-context';
import CartIcon from '../Cart/CartIcon';
import css from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    let quantity = 0;
    cartCtx.items.forEach((item) => {
        quantity = quantity + Number(item.quantity);
    });

    return(
        <button className={css.button} onClick={props.onClick}>
            <span className={css.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={css.badge}>{quantity}</span>
        </button>
    );
};

export default HeaderCartButton;