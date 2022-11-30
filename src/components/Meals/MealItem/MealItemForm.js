import { useContext } from 'react';
import CartContext from '../../../store/card-context';
import Input from '../../UI/Input';
import css from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);

    const addItemToCart = (event) => {
        //Add item to CartContext
        event.preventDefault();
        const quantity = document.getElementById('amount_'+props.id).value;
        cartCtx.addItem({...props.item, quantity:quantity});
    };

    return (
        <form className={css.form}>
            <Input input={{id:'amount_'+props.id, label:'Amount', type:'number', defaultValue:'1', step:'1', min:'1'}} />
            <button onClick={addItemToCart}>ADD</button>
        </form>
    );
};

export default MealItemForm;