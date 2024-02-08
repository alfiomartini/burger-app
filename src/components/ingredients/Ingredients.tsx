import { Ingredient } from "../../interfaces";
import { Badge } from "../badge/Badge";
import "./styles.css";

interface Props {
  ingredients: Ingredient[];
}

export function Ingredients({ ingredients }: Props) {
  console.log(ingredients);

  return (
    <div className="ingredients-container">
      <div className="ingredients-list">
        <h2>Ingredients List</h2>
        <div className="ingredients">
          {ingredients.map((item: Ingredient) => (
            <Badge name={item.name} />
          ))}
        </div>
      </div>

      <h1>Add Ingredient Form</h1>
    </div>
  );
}
