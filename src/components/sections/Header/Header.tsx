import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LOGO_IMAGE } from "@/constants/images.c";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const topbarRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topbarRef.current && navbarRef.current) {
        const topbarHeight = topbarRef.current.clientHeight;

        // Verifica se o scrollY passou a altura da Topbar
        if (window.scrollY >= topbarHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavItem: React.FC<{ link: string; label: string }> = ({
    link,
    label,
  }) => (
    <Nav.Link as="li" className={styles.menuItem}>
      <Link href={link} className={styles.menuText}>
        {label}
      </Link>
    </Nav.Link>
  );

  return (
    <>
      {/* Topbar */}
      <div
        ref={topbarRef}
        className={`${styles.topbar} bg-light text-secondary py-3`}
      >
        <div className="container d-flex justify-content-between">
          <small>Contato: (11) 1234-5678</small>
          <small>Email: contato@empresa.com</small>
        </div>
      </div>

      {/* Navbar com Offcanvas */}
      <header
        ref={navbarRef}
        className={`${styles.header} ${isFixed ? styles.fixed : ""}  bg-white`}
      >
        <Navbar expand="sm" className="align-items-center py-0">
          <div className="container">
            <Navbar.Brand href="/" className="d-flex align-items-center py-0">
              <Image src={LOGO_IMAGE} alt="Logo" width={100} height={50} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className={`justify-content-end flex-grow-1 pe-3 `}
                  as="ul"
                >
                  <NavItem link="/" label="Início" />
                  <NavItem link="/servicos" label="Serviços" />
                  <NavItem link="/sobre" label="Sobre" />
                  <NavItem link="/fale-conosco" label="Fale Conosco" />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
