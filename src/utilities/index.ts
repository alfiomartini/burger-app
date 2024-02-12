import { Ingredient } from "../interfaces";

export function isEmpty(obj: Ingredient) {
  if (Object.keys(obj).length === 0) return true;
  return false;
}
