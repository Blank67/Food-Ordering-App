import Input from '../../UI/Input';
import css from './MealItemForm.module.css';

const MealItemForm = (props) => {
    return (
        <form className={css.form}>
            <Input input={{id:props.id, label:'Amount', type:'number', defaultValue:'1', step:'1', min:'1'}} />
            <button>ADD</button>
        </form>
    );
};

export default MealItemForm;