import { client } from "./httpClient";
import { Ingredient, Burger, WeakIngredient } from "../interfaces";

export async function fetchIngredients(): Promise<Ingredient[]> {
  const response = await client.get("/ingredients");
  return response.data;
}

export async function fetchBurgers(): Promise<Burger[]> {
  const response = await client.get("/burgers");
  return response.data;
}

export async function createIngredient(
  item: WeakIngredient
): Promise<Ingredient> {
  const response = await client.post("/ingredients", item);
  return response.data;
}

export async function deleteIngredient(id: string): Promise<Ingredient> {
  const response = await client.delete(`/ingredients/${id}`);
  return response.data;
}
