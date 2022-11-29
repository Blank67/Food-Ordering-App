import css from './MealItem.module.css';

const MealItem = (props) => {
    return (
        <li className={css.meal} key={props.meal.id}>
            <div>
                <h3>{props.meal.title}</h3>
                <div className={css.description}>{props.meal.description}</div>
                <div className={css.price}>{`Rs. ${props.meal.price}`}</div>
            </div>
            <div>+</div>
        </li>
    );
};

export default MealItem;