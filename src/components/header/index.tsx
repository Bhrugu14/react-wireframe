import { useState, useEffect } from "react";
import { Card } from "../card";
import { Drawer } from "../drawer";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSmall, setIsSmall] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const isTop = scrollTop < 50;
      setIsSticky(!isTop);
      setIsSmall(isTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-200 ease-in-out ${
        isSticky
          ? "bg-primary text-white shadow-lg"
          : "bg-primaryCard text-title"
      } ${isSmall ? "h-16" : "h-12"}`}
    >
      <nav className="mx-auto px-4 py-2 max-w-7xl md:contents hidden">
        <ul className="flex items-center justify-center">
          <li className="mx-4">
            <a href="#">Home</a>
          </li>
          <li className="mx-4">
            <a href="#">About</a>
          </li>
          <li className="mx-4">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
