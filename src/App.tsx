import { useState, useEffect } from "react";
import { fetchIngredients, fetchBurgers } from "./api/fetchApis";
import { Burger, Ingredient } from "./interfaces";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [burgers, setBurgers] = useState<Burger[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const _ingredients: Ingredient[] = await fetchIngredients();
      setIngredients(_ingredients);
      console.log("Ingredients", _ingredients);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const _burgers: Burger[] = await fetchBurgers();
      setBurgers(_burgers);
      console.log("Burgers", _burgers);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
