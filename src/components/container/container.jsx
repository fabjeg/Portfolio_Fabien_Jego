import { NavBar } from "../header/navbar";
import { Wrapper } from "../wrapper/wrapper";
import "./style.css";

export function Container() {
 
  return (
    <div className="container">
      <NavBar />
      <Wrapper />
    </div>
  );
}
