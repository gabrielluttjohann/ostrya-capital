import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import CollisionButton from "@/components/common/button/CollisionButton/CollisionButton";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import {
  NAVIGATION_ITEMS,
  SOCIAL_LINKS,
  CONTACT_INFORMATION,
  WHATSAPP_LINK,
} from "@/data/headerData";
import styles from "@/components/sections/Header/Header.module.css";
import { LOGO_IMAGE } from "@/constants/images.c";

const Navbar: React.FC<{ onMenuToggle: () => void; isOpen: boolean }> = ({
  onMenuToggle,
  isOpen,
}) => {
  const isFixed = useNavbarScroll();

  return (
    <nav
      className={`navbar-expand-lg navbar-light bg-light ${
        isFixed ? `${styles["navbar-scrolled"]} fixed-top` : ""
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className={`${styles["logo-hover"]} navbar-brand`}>
          <Image src={LOGO_IMAGE} alt="logo" width={80} height={30} />
        </Link>

        <button
          className="navbar-toggler border"
          type="button"
          onClick={onMenuToggle}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isOpen ? "d-none" : ""}`}>
            ☰ {/* Ícone de hambúrguer */}
          </span>
          <span className={`navbar-toggler-icon ${isOpen ? "" : "d-none"}`}>
            ✖ {/* Ícone de "X" */}
          </span>
        </button>

        {/* Menu Desktop */}
        <div
          className={`d-none d-lg-flex align-items-center flex-grow-1 ${
            isFixed ? "py-2" : ""
          }`}
        >
          <ul className="navbar-nav me-auto">
            {NAVIGATION_ITEMS.map((item, index) => (
              <NavItem
                key={index}
                link={item.to}
                label={item.label}
                closeMenu={() => {}} // Não precisa fechar no desktop
              />
            ))}
          </ul>
          {/* Botão de Fale Conosco no menu desktop */}
          <CollisionButton
            href={WHATSAPP_LINK}
            icon="fab fa-whatsapp"
            text="Fale Conosco"
          />
        </div>
      </div>
    </nav>
  );
};

const Menu: React.FC<{
  isOpen: boolean;
  closeMenu: () => void;
  isFixed: boolean;
}> = ({ isOpen, closeMenu, isFixed }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    // Adiciona o evento de clique fora do menu
    document.addEventListener("mousedown", handleClickOutside);

    // Limpeza dos eventos ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`position-absolute w-100 bg-white ${
        isOpen ? "show" : "d-none"
      } ${isFixed ? styles["menu-fixed"] : ""}`} // Adiciona a classe do menu fixo
      ref={menuRef}
      style={{ zIndex: 1000 }} // Para garantir que fique acima de outros componentes
    >
      <ul className="navbar-nav justify-content-center py-4">
        {NAVIGATION_ITEMS.map((item, index) => (
          <NavItem
            key={index}
            link={item.to}
            label={item.label}
            closeMenu={closeMenu} // Passa a função para fechar o menu
          />
        ))}
      </ul>
      {/* Botão de Fale Conosco removido do menu mobile */}
    </div>
  );
};

const NavItem: React.FC<{
  link: string;
  label: string;
  closeMenu: () => void;
}> = ({ link, label, closeMenu }) => (
  <li className={`ms-3 nav-item me-3 ${styles["nav-hover"]}`}>
    <Link href={link} className="nav-link" onClick={closeMenu}>
      {label}
    </Link>
  </li>
);

const SocialLinks: React.FC = () => (
  <div className="d-flex align-items-center">
    {SOCIAL_LINKS.map((link, index) => (
      <SocialLinkItem key={index} {...link} />
    ))}
  </div>
);

const SocialLinkItem: React.FC<{
  href: string;
  title: string;
  icon: string;
}> = ({ href, title, icon }) => (
  <a
    href={href}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
    className="me-3"
  >
    <i className={icon} />
  </a>
);

const ContactInfo: React.FC = () => (
  <div className="d-flex align-items-center">
    <ul className="list-unstyled d-flex">
      {CONTACT_INFORMATION.map((contact, index) => (
        <ContactInfoItem key={index} {...contact} />
      ))}
    </ul>
  </div>
);

const ContactInfoItem: React.FC<{
  icon: string;
  label: string;
  text: string;
  to: string;
}> = ({ icon, label, text, to }) => (
  <li className="me-3 d-flex align-items-start">
    <div className="d-flex align-items-center">
      <i className={`${icon} me-2`}></i>
    </div>
    <div className="d-flex flex-column">
      <span>{label}:</span>
      <strong>
        <a href={to}>{text}</a>
      </strong>
    </div>
  </li>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isFixed = useNavbarScroll(); // Obter o estado de fixação da navbar

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="animated">
      <div className="w-100 bg-white">
        <div className="container">
          <div className="header-top d-none d-md-flex justify-content-between align-items-center my-3">
            <SocialLinks />
            <ContactInfo />
          </div>
        </div>
        <div className={"w-100 bg-light"}>
          <div className="container">
            <Navbar onMenuToggle={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </div>

      {/* Componente do Menu Mobile */}
      <div className="w-100">
        <Menu isOpen={isMenuOpen} closeMenu={closeMenu} isFixed={isFixed} />
      </div>
    </header>
  );
};

export default Header;
