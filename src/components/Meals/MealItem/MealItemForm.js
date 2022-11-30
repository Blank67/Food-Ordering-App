import { useContext } from 'react';
import CartContext from '../../../store/card-context';
import Input from '../../UI/Input';
import css from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);
    // console.log('Inside MealItemForm cartCtx->' ,cartCtx);

    const addItemToCart = (event) => {
        //Add item to CartContext
        event.preventDefault();
        const quantity = document.getElementById(props.id).value;
        cartCtx.addItem({...props.item, quantity:quantity});
        // console.log('Inside MealItemForm addItemToCart() cartCtx.items->' ,cartCtx);
    };

    return (
        <form className={css.form}>
            {/* {console.log('Inside MealItemForm return cartCtx.items->', cartCtx.items)} */}
            <Input input={{id:props.id, label:'Amount', type:'number', defaultValue:'1', step:'1', min:'1'}} />
            <button onClick={addItemToCart}>ADD</button>
        </form>
    );
};

export default MealItemForm;