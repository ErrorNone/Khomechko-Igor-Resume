import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Header.scss";

const Header = () => {
  const [navItem, setNavItem] = useState([
    {
      href: "#home",
      name: "Home",
      active: false,
    },
    {
      href: "#about",
      name: "About",
      active: false,
    },
    {
      href: "#projects",
      name: "Projects",
      active: false,
    },
    {
      href: "#contacts",
      name: "Contacts",
      active: false,
    },
  ]);
  const [active, setActive] = useState(false);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setNavItem(
            navItem.map((link) => {
              link.active = false;
              if (link.href.replace("#", "") === entry.target.id)
                link.active = true;
              return link;
            })
          );
        }
      });
    },
    { threshold: 0.2 }
  );

  useEffect(() => {
    const items = document.querySelectorAll(".section");
    items.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <header className="header">
      <div
        className="container container__header"
        onClick={() => {
          setActive(!active);
        }}
      >
        <div className="header__logo">Khomechko Igor</div>
        <div>
          <div className="burger">
            <span className={active ? "active_burger" : null}></span>
          </div>
          <ul className={`menu${active ? " active" : ""}`}>
            {navItem.map((e) => {
              return (
                <li key={e.name} onClick={() => setActive(!active)}>
                  <a className={e.active ? "active" : null} href={e.href}>
                    {e.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
