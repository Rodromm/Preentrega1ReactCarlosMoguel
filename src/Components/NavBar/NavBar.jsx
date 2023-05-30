import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav>
      <h2 className="title">Master Auto</h2>
      <div>
        <button className="btnPrimary">Camionetas</button>
        <button className="btnSecondary">Autos</button>
        <button className="btnTertiary">Motocilcetas</button>
      </div>
      <CartWidget />
    </nav>
  );
};
