import React from 'react';
import css from './Header.module.css';
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return(
        <React.Fragment>
            <header className={css.header} >
                <h1>Meals App</h1>
                <HeaderCartButton />
            </header>
            <div className={css['main-image']}>
                <img src={meals} alt='meals.jpg error' />
            </div>
        </React.Fragment>
    );
};

export default Header;