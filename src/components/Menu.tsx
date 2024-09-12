import { useState } from "react";

function Menu() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const menuItems = [
    { href: "#object", label: "OBIEKT" },
    { href: "#rooms", label: "POKOJE" },
    { href: "#gallery", label: "GALERIA" },
    { href: "#price", label: "CENNIK" },
    { href: "#contact", label: "KONTAKT" },
    { href: "#lokalization", label: "LOKALIZACJA" },
  ];

  return (
    <div className="menu">
      {/* Menu icon */}
      <i>
        <img
          className="icon-menu"
          src="src/assets/images/icons/menu.svg"
          alt="Menu-Icon"
          onClick={showMenu}
        />
      </i>

      {/* Mobile Menu */}
      {isMenuVisible && (
        <div id="interactive-bar">
          {menuItems.map((item, index) => (
            <a href={item.href} onClick={showMenu} key={index}>
              <p>{item.label}</p>
            </a>
          ))}
        </div>
      )}

      {/* Menu for PC */}
      <div id="interactive-bar-PC">
        {menuItems.map((item, index) => (
          <a href={item.href} key={index}>
            <p>{item.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Menu;
