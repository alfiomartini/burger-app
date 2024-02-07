import { client } from "./httpClient";
import { Ingredient, Burger } from "../interfaces";

export async function fetchIngredients(): Promise<Ingredient[]> {
  const response = await client.get("/ingredients");
  return response.data;
}

export async function fetchBurgers(): Promise<Burger[]> {
  const response = await client.get("/burgers");
  return response.data;
}
