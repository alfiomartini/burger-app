import { Link } from "react-router-dom";
import "./styles.css";

export function Header() {
  return (
    <div className="navbar">
      <Link to="/">Burgers</Link>
      <Link to="/ingredients">Ingredients</Link>
    </div>
  );
}
