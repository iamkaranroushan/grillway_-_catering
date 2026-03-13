"use client";

import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const showNavbar = () => {
      setVisible(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(false);
      }, 2500);
    };

    window.addEventListener("mousemove", showNavbar);
    window.addEventListener("scroll", showNavbar);
    window.addEventListener("touchstart", showNavbar);

    showNavbar(); // start timer

    return () => {
      window.removeEventListener("mousemove", showNavbar);
      window.removeEventListener("scroll", showNavbar);
      window.removeEventListener("touchstart", showNavbar);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl bg-black/30
        transition-transform duration-500
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <DesktopNav />
      <MobileNav />
    </header>
  );
}