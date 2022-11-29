import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
