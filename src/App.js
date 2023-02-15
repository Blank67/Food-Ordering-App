import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import CartProvider from "./store/CartProvider";
import css from './components/Cart/Cart.module.css';

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [order, setOrder] = useState(false);

  const showCartHandler = () => {
    setCartVisibility(true);
  };
  const hideCartHandler = () => {
    setCartVisibility(false);
  };

  const showOrderSuccessHandler = () => {
    setOrder(true);
  };
  const hideOrderSucessHandler = () => {
    setOrder(false);
  };

  return (
    <CartProvider>
      {cartVisibility && <Cart onOrderShow={showOrderSuccessHandler} onHide={hideCartHandler} />}
      {order && <Modal>
        <div className={css.total}>ORDER SUCESS</div>
        <div className={css.actions}>
          <button className={css.button} onClick={hideOrderSucessHandler}>Close</button>
        </div>
        </Modal>}
      {<></>}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
