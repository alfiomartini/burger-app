import { useState, Dispatch } from "react";
import { WeakIngredient } from "../../interfaces";
import "./styles.css";

interface Props {
  addIngredient: Dispatch<WeakIngredient>;
}

export function FormIngredient({ addIngredient }: Props) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(/\D/g, "");
    setQuantity(result);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addIngredient({ name, quantity: parseInt(quantity), description });
    setName("");
    setQuantity("");
    setDescription("");
  }

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div className="form-control">
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
      </div>
      <div className="form-control">
        <label htmlFor="quantity">Quantity* (grams)</label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          placeholder="Quantity (grams)"
          value={String(quantity)}
          onChange={handleQuantity}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="A couple of words..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Ingredient</button>
    </form>
  );
}
