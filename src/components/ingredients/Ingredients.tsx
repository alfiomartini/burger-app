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
            <Badge {...item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="ingredients-form">
        <h2>Add Ingredient</h2>
        <div className="ingredient-form">
          <h3>Ingredient Form</h3>
        </div>
      </div>
    </div>
  );
}
