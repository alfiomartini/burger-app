import { Header } from "./components/header/Header";
import { Home } from "./pages/home";
import { Ingredients } from "./components/ingredients/Ingredients";
import { Burgers } from "./components/burgers/Burgers";
import { Orders } from "./components/orders/Orders";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burgers" element={<Burgers />} />
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
