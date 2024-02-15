import { Link } from "react-router-dom";
import "./styles.css";

export function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Burger World
      </Link>
      <div className="navbar-items">
        <Link to="/burgers">Burgers</Link>
        <Link to="/ingredients">Ingredients</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </nav>
  );
}
