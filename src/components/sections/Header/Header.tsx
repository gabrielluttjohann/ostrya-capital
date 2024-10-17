import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import CollisionButton from "@/components/common/button/CollisionButton/CollisionButton";
import { LOGO_IMAGE } from "@/constants/images.c";
import { SOCIAL_LINKS, CONTACT_INFORMATION } from "@/data/headerData";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // Estado para navbar fixa
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = () => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setIsSticky(window.scrollY > headerHeight); // Define a navbar como fixa após ultrapassar o header
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
    window.addEventListener("scroll", handleScroll); // Monitoramento do scroll

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className={styles.header}>
      {/* Seção superior: Informações de Contato e Redes Sociais */}
      <div className={`${styles.topBar}`}>
        <div className="container d-flex justify-content-between align-items-center py-2">
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>

      {/* Navbar (se torna fixa após o scroll) */}
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${
          styles.nav
        } ${isSticky ? "fixed-top " : ""}`}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/" className="navbar-brand">
            <Image src={LOGO_IMAGE} alt="Logo" width={80} height={40} />
          </Link>

          <button
            ref={buttonRef}
            className="navbar-toggler"
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>

          <div
            className={`collapse navbar-collapse ${
              isMenuOpen ? "show bg-light mt-4 p-5 " : ""
            }`}
            ref={menuRef}
          >
            <ul className="navbar-nav me-auto p-2 mb-2 mb-lg-0 ">
              <NavItem link="/" label="Início" closeMenu={closeMenu} />
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

            {/* Collision Button */}
            <div className={styles.mobile}>
              <CollisionButton
                href="https://wa.me/00000000000"
                icon="fab fa-whatsapp"
                text="Fale Conosco"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavItem: React.FC<{
  link: string;
  label: string;
  closeMenu: () => void;
}> = ({ link, label, closeMenu }) => (
  <li className={`nav-item px-2 ${styles.menuItem}`}>
    <Link href={link} className={`${styles.menuText} nav-link`} onClick={closeMenu}>
      {label}
    </Link>
  </li>
);

const SocialLinks: React.FC = () => (
  <div className="d-flex">
    {SOCIAL_LINKS.map((link, index) => (
      <a
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="me-3"
      >
        <i className={link.icon}></i>
      </a>
    ))}
  </div>
);

const ContactInfo: React.FC = () => (
  <ul className="list-unstyled d-flex mb-0">
    {CONTACT_INFORMATION.map((contact, index) => (
      <li key={index} className="me-4 d-flex align-items-center">
        <i className={`${contact.icon} me-2`}></i>
        <span>{contact.text}</span>
      </li>
    ))}
  </ul>
);

export default Header;
