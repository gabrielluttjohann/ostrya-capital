import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { LOGO_IMAGE } from "@/constants/images.c";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = () => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setIsSticky(window.scrollY > headerHeight);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      closeMenu();
    }
  };

  const handleResize = () => {
    if (isMenuOpen) closeMenu();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className={`${styles.header} bg-white`}>
      <nav
        className={` py-2 navbar-expand-lg bg-white shadow-sm ${styles.nav} ${
          isSticky ? "fixed-top" : ""
        }`}
      >
        <div className="bg-white container">
          <div className="mx-5 d-flex justify-content-between align-items-center">
            {/* Logo à esquerda */}
            <Link href="/" className="me-auto">
              <Image src={LOGO_IMAGE} alt="Logo" width={100} height={50} />
            </Link>

            {/* Itens do menu no centro */}
            <div className="d-none d-lg-block mx-auto">
              <ul className="navbar-nav">
                <NavItem link="/" label="Início" closeMenu={closeMenu} />
                <NavItem
                  link="/servicos"
                  label="Serviços"
                  closeMenu={closeMenu}
                />
                <NavItem link="/sobre" label="Sobre" closeMenu={closeMenu} />
              </ul>
            </div>

            {/* Botão "Fale Conosco" no mobile */}
            <div className={styles.mobile}>
              <a
                className={`py-3 btn btn-outline-dark d-block d-sm-inline-block`}
                href="/fale-conosco"
              >
                Fale Conosco
              </a>
            </div>

            <button
              ref={buttonRef}
              className="navbar-toggler d-lg-none px-2 py-1  border"
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div ref={menuRef} className="navbar-collapse bg-white">
          <div className="container">
            <ul className="navbar-nav me-auto p-2 mb-2 mb-lg-0">
              <NavItem link="/" label="Início" closeMenu={closeMenu} />

              <NavItem
                link="/sobre"
                label="Sobre"
                closeMenu={closeMenu}
              />

              <NavItem
                link="/servicos"
                label="Serviços"
                closeMenu={closeMenu}
              />

              <NavItem link="/sobre" label="Sobre" closeMenu={closeMenu} />
              <NavItem
                link="/fale-conosco"
                label="Fale Conosco"
                closeMenu={closeMenu}
              />
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem: React.FC<{
  link: string;
  label: string;
  closeMenu: () => void;
}> = ({ link, label, closeMenu }) => (
  <li className={`nav-item px-2 ${styles.menuItem}`}>
    <Link
      href={link}
      className={`${styles.menuText} nav-link`}
      onClick={closeMenu}
    >
      {label}
    </Link>
  </li>
);

export default Header;
