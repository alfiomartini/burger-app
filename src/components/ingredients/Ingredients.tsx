import { useState } from "react";
import { WeakIngredient, Ingredient } from "../../interfaces";
import { Badge } from "../badge/Badge";
import { FormIngredient } from "../formIngredient/FormIngredient";
import { isEmpty } from "../../utilities";
import styled from "styled-components";

interface Props {
  ingredients: Ingredient[];
  addIngredient: (item: WeakIngredient) => void;
  removeIngredient: (id: string) => void;
  editIngredient: (item: Ingredient) => void;
}

export function Ingredients({
  ingredients,
  addIngredient,
  removeIngredient,
  editIngredient,
}: Props) {
  const [currentIngredient, setCurrentIngredient] = useState<Ingredient>(
    {} as Ingredient
  );

  return (
    <IngredientsContainer>
      <div>
        <IngredientsList>
          <h2>Ingredients List</h2>
          <IngredientItems>
            {ingredients.map((item: Ingredient) => (
              <Badge
                {...item}
                key={item.id}
                removeIngredient={removeIngredient}
                setCurrentIngredient={setCurrentIngredient}
              />
            ))}
          </IngredientItems>
        </IngredientsList>
      </div>
      {!isEmpty(currentIngredient) ? (
        <FormIngredient
          addIngredient={addIngredient}
          title="Edit Ingredient Form"
          editIngredient={editIngredient}
          name_={currentIngredient.name}
          quantity_={String(currentIngredient.quantity)}
          description_={currentIngredient.description}
          currentIngredient={currentIngredient}
          setCurrentIngredient={setCurrentIngredient}
        />
      ) : (
        <FormIngredient
          title="Add Ingredient Form"
          addIngredient={addIngredient}
          editIngredient={editIngredient}
          currentIngredient={currentIngredient}
          setCurrentIngredient={setCurrentIngredient}
        />
      )}
    </IngredientsContainer>
  );
}

const IngredientsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  justify-content: space-around;
  align-content: center;
  height: 60vh;
`;

const IngredientsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`;

const IngredientItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
