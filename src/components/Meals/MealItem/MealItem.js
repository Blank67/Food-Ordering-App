import css from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    return (
        <li className={css.meal} key={props.meal.id}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={css.description}>{props.meal.description}</div>
                <div className={css.price}>{`Rs. ${props.meal.price}`}</div>
            </div>
            <div>
                <MealItemForm id={props.meal.id} item={props.meal} />
            </div>
        </li>
    );
};

export default MealItem;