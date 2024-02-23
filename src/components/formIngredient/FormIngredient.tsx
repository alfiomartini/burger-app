import { useState, useEffect, Dispatch } from "react";
import { Ingredient, WeakIngredient } from "../../interfaces";
import { isEmpty } from "../../utilities";
import styled from "styled-components";

interface Props {
  addIngredient: (item: WeakIngredient) => void;
  editIngredient: (item: Ingredient) => void;
  name_?: string;
  quantity_?: string;
  description_?: string;
  currentIngredient: Ingredient;
  setCurrentIngredient: Dispatch<Ingredient>;
  title: string;
}

export function FormIngredient({
  addIngredient,
  editIngredient,
  setCurrentIngredient,
  name_ = "",
  quantity_ = "",
  description_ = "",
  currentIngredient,
  title,
}: Props) {
  const [name, setName] = useState(name_);
  const [quantity, setQuantity] = useState(quantity_);
  const [description, setDescription] = useState(description_);

  useEffect(() => {
    setName(name_);
    setQuantity(quantity_);
    setDescription(description_);
  }, [name_, quantity_, description_]);

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(/\D/g, "");
    setQuantity(result);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isEmpty(currentIngredient))
      addIngredient({ name, quantity: parseInt(quantity), description });
    else {
      editIngredient({
        id: currentIngredient.id,
        name,
        quantity: parseInt(quantity),
        description,
      });
      setCurrentIngredient({} as Ingredient);
    }
    setName("");
    setQuantity("");
    setDescription("");
  }

  return (
    <IngredientForm>
      <h2>{title}</h2>
      <FormGroup onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name of ingredient"
            required
            minLength={3}
            maxLength={15}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="quantity">Quantity*</label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            value={String(quantity)}
            onChange={handleQuantity}
            required
          />
        </FormControl>
        <FormControl>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="A couple of words..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <button type="submit" aria-label="submit">
          {isEmpty(currentIngredient) ? "Add Ingredient" : "Update Ingredient"}
        </button>
      </FormGroup>
    </IngredientForm>
  );
}

const IngredientForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`;

const FormGroup = styled.form`
  padding: 20px;
  border: 1px solid black;
  width: 70%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-width: 90%;
  gap: 15px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  label {
    display: block;
    color: black;
  }

  input {
    padding: 10px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;
