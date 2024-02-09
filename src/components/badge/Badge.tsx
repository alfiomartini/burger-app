import { Dispatch } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import "./styles.css";
import { Ingredient } from "../../interfaces";

interface Props {
  name: string;
  id: string;
  description: string;
  quantity: number;
  removeIngredient: (id: string) => void;
  setCurrentIngredient: Dispatch<Ingredient>;
}

export function Badge({
  name,
  id,
  quantity,
  description,
  removeIngredient,
  setCurrentIngredient,
}: Props) {
  return (
    <span className="badge">
      {name} ({quantity}){" "}
      <span className="badge-icons">
        <CiEdit
          style={{ cursor: "pointer" }}
          onClick={() =>
            setCurrentIngredient({ name, id, quantity, description })
          }
        />{" "}
        <RiDeleteBinLine
          style={{ cursor: "pointer" }}
          onClick={() => removeIngredient(id)}
        />
      </span>
    </span>
  );
}
