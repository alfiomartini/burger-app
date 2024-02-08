import { useState, useEffect } from "react";
import { fetchIngredients, fetchBurgers } from "./api/fetchApis";
import { Burger, Ingredient } from "./interfaces";
import { Header } from "./components/header/Header";
import { Ingredients } from "./components/ingredients/Ingredients";
import { Burgers } from "./components/burgers/Burgers";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [burgers, setBurgers] = useState<Burger[]>([]);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      const _ingredients: Ingredient[] = await fetchIngredients();
      if (active) setIngredients(_ingredients);
    };

    try {
      fetchData();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    return () => {
      active = false;
      console.log("Ignoring fetchIngredients");
    };
  }, []);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      const _burgers: Burger[] = await fetchBurgers();
      if (active) setBurgers(_burgers);
    };

    try {
      fetchData();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }

    return () => {
      active = false;
      console.log("Ignoring fetchBurgers");
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Burgers burgers={burgers} />} />
        <Route
          path="/ingredients"
          element={<Ingredients ingredients={ingredients} />}
        />
      </Routes>
    </div>
  );
}

export default App;
