import { useState, useEffect } from "react";
import { getBurgers } from "./api/fetchApis";
import { Burger } from "./interfaces";
import { Header } from "./components/header/Header";
import { Ingredients } from "./components/ingredients/Ingredients";
import { Burgers } from "./components/burgers/Burgers";
import { Orders } from "./components/orders/Orders";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function App() {
  const [burgers, setBurgers] = useState<Burger[]>([]);

  useEffect(() => {
    let active = true;
    const fetchBurgers = async () => {
      try {
        const _burgers: Burger[] = await getBurgers();
        if (active) setBurgers(_burgers);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("Axios Error: GetBurgers", error.message);
        }
      }
    };

    fetchBurgers();

    return () => {
      active = false;
      console.log("Cleaning Get Burgers");
    };
  }, []);

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Burgers burgers={burgers} />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 1.5rem;
`;

export default App;
