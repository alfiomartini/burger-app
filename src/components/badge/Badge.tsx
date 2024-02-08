import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import "./styles.css";

interface Props {
  name: string;
  id: string;
  description: string;
  quantity: number;
  removeIngredient: (id: string) => void;
}

export function Badge({ name, id, removeIngredient }: Props) {
  console.log("name, id", name, id);
  return (
    <span className="badge">
      {name} <CiEdit style={{ cursor: "pointer" }} />{" "}
      <RiDeleteBinLine
        style={{ cursor: "pointer" }}
        onClick={() => removeIngredient(id)}
      />
    </span>
  );
}
