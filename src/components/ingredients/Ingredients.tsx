import { Ingredient } from "../../interfaces";

interface Props {
  ingredients: Ingredient[];
}

export function Ingredients({ ingredients }: Props) {
  console.log(ingredients);

  return <h3>Ingredients</h3>;
}
