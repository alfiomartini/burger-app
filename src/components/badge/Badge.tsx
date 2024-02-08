import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import "./styles.css";

interface Props {
  name: string;
  id: string;
  description: string;
  quantity: number;
}

export function Badge({ name, id }: Props) {
  console.log("name, id", name, id);
  return (
    <span className="badge">
      {name} <CiEdit style={{ cursor: "pointer" }} />{" "}
      <RiDeleteBinLine style={{ cursor: "pointer" }} />
    </span>
  );
}
