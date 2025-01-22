import { useState } from "react";
import "./style.css";
import { ButtonBurguer } from "../buttons/button-burger";

export function MobileNavbar() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  // Toggle the Mobile Nav open / close
  const handleMobileNavClick = () => {
    mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 600 && setMobileNavIsOpen(false);
  });

  return (
    <div className="buttonBurguer">
          <ButtonBurguer
        onClick={handleMobileNavClick}
      />
      <nav className="mobileNav_container">
      <div className="mobileNav_menu_container">
        <ul
          className={`${
              mobileNavIsOpen ? "mobileNav_open" : "mobileNav_closed"
            } mobileNav_menu_list`}
            >
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
            </div>
  );
};

