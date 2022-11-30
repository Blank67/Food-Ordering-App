import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const showCartHandler = () => {
    setCartVisibility(true);
  };
  const hideCartHandler = () => {
    setCartVisibility(false);
  };

  return (
    <React.Fragment>
      {cartVisibility && <Cart  onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
