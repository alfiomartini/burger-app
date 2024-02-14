import { client } from "./httpClient";
import { Ingredient, Burger, WeakIngredient } from "../interfaces";

export async function getIngredients(): Promise<Ingredient[]> {
  const response = await client.get("/ingredients");
  return response.data as Ingredient[];
}

export async function getBurgers(): Promise<Burger[]> {
  const response = await client.get("/burgers");
  return response.data as Burger[];
}

export async function createIngredient(
  item: WeakIngredient
): Promise<Ingredient> {
  const response = await client.post("/ingredients", item);
  return response.data as Ingredient;
}

export async function deleteIngredient(id: string): Promise<Ingredient> {
  const response = await client.delete(`/ingredients/${id}`);
  return response.data as Ingredient;
}

export async function updateIngredient(item: Ingredient): Promise<Ingredient> {
  const response = await client.patch(`/ingredients/${item.id}`, item);
  return response.data as Ingredient;
}
