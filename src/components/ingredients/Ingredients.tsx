import { Dispatch, useState } from "react";
import { WeakIngredient, Ingredient } from "../../interfaces";
import { Badge } from "../badge/Badge";
import { FormIngredient } from "../formIngredient/FormIngredient";
import "./styles.css";

interface Props {
  ingredients: Ingredient[];
  addIngredient: Dispatch<WeakIngredient>;
  removeIngredient: (id: string) => void;
}

export function Ingredients({
  ingredients,
  addIngredient,
  removeIngredient,
}: Props) {
  const [currentIngredient, setCurrentIngredient] = useState<Ingredient>(
    {} as Ingredient
  );

  function isEmpty(obj: Ingredient) {
    if (Object.keys(obj).length === 0) return true;
    return false;
  }

  return (
    <div className="ingredients-container">
      <div>
        <div className="ingredients-list">
          <h2>Ingredients List</h2>
          <div className="ingredients">
            {ingredients.map((item: Ingredient) => (
              <Badge
                {...item}
                key={item.id}
                removeIngredient={removeIngredient}
                setCurrentIngredient={setCurrentIngredient}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="ingredients-form">
        {!isEmpty(currentIngredient) ? (
          <div className="ingredient-form">
            <h2>Edit Ingredient Form</h2>
            <FormIngredient
              addIngredient={addIngredient}
              name_={currentIngredient.name}
              quantity_={String(currentIngredient.quantity)}
              description_={currentIngredient.description}
            />
          </div>
        ) : (
          <div className="ingredient-form">
            <h2>Ingredient Form</h2>
            <FormIngredient addIngredient={addIngredient} />
          </div>
        )}
      </div>
    </div>
  );
}
