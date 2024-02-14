import { useState, useEffect } from "react";
import {
  fetchIngredients,
  fetchBurgers,
  createIngredient,
  deleteIngredient,
  updateIngredient,
} from "./api/fetchApis";
import { Burger, Ingredient, WeakIngredient } from "./interfaces";
import { Header } from "./components/header/Header";
import { Ingredients } from "./components/ingredients/Ingredients";
import { Burgers } from "./components/burgers/Burgers";
import { Orders } from "./components/orders/Orders";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [burgers, setBurgers] = useState<Burger[]>([]);

  async function addIngredient(item: WeakIngredient) {
    try {
      const newIngredient = await createIngredient(item);
      const newIngredients = [...ingredients, newIngredient];
      newIngredients.sort((a, b) => a.name.localeCompare(b.name));
      setIngredients(newIngredients);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async function removeIngredient(id: string) {
    try {
      await deleteIngredient(id);
      const newIngredients = ingredients.filter((item) => item.id !== id);
      setIngredients(newIngredients);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async function editIngredient(item: Ingredient) {
    try {
      const updatedIngredient = await updateIngredient(item);
      const newIngredients = [
        ...ingredients.filter((elem) => elem.id !== item.id),
        updatedIngredient,
      ];
      newIngredients.sort((a, b) => a.name.localeCompare(b.name));
      setIngredients(newIngredients);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      try {
        const _ingredients: Ingredient[] = await fetchIngredients();
        if (active) {
          _ingredients.sort((a, b) => a.name.localeCompare(b.name));
          setIngredients(_ingredients);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("Axios Error: Ingredients", error.message);
        }
      }
    };

    fetchData();

    return () => {
      active = false;
      console.log("Ignoring fetchIngredients");
    };
  }, []);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      try {
        const _burgers: Burger[] = await fetchBurgers();
        if (active) setBurgers(_burgers);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("Axios Error: Burgers", error.message);
        }
      }
    };

    fetchData();

    return () => {
      active = false;
      console.log("Ignoring fetchBurgers");
    };
  }, []);

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Burgers burgers={burgers} />} />
        <Route
          path="/ingredients"
          element={
            <Ingredients
              ingredients={ingredients}
              addIngredient={addIngredient}
              removeIngredient={removeIngredient}
              editIngredient={editIngredient}
            />
          }
        />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 1.5rem;
`;

export default App;
