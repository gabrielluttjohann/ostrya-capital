import React, { RefObject, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import useFixedOnScroll from "@/hooks/useFixedOnScroll";
import headerData from "@/data/headerData.json";
import LOGO_IMAGE from "@/assets/img/logo/logo.png";

// Função para rolar suavemente até a seção com offset
const scrollToSection = (id: string, offset = 120) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const NavItem: React.FC<{
  sectionId: string;
  labelId: string;
  label: string;
  onClick: () => void;
}> = ({ sectionId, labelId, label, onClick }) => (
  <Nav.Link
    as="li"
    className={styles.menuItem}
    onClick={() => {
      scrollToSection(sectionId);
      onClick();
    }}
    style={{ cursor: "pointer" }}
  >
    <div className="d-flex flex-column justify-content-start align-items-start p-0 m-0">
      <span className={`text-highlight small ${styles.labelIdVisibility}`}>
        {labelId}
      </span>
    </div>
    {label}
  </Nav.Link>
);

const OffcanvasNavbar: React.FC<{
  navbarRef: RefObject<HTMLDivElement>;
  isFixed: boolean;
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
}> = ({ navbarRef, isFixed, show, handleClose, handleShow }) => (
  <div
    className={`${styles.header} ${isFixed ? styles.fixed : ""} py-3 bg-white`}
  >
    <Navbar expand="sm" ref={navbarRef} className="align-items-center py-0">
      <div className="container">
        <Navbar.Brand href="/" className="d-flex align-items-center py-0">
          <Image src={LOGO_IMAGE} alt="Logo" width={100} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3" as="ul">
              {headerData.menuItems.map((item, index) => (
                <NavItem
                  key={index}
                  sectionId={item.link.substring(1)} // Remove a barra inicial
                  labelId={item.labelId}
                  label={item.label}
                  onClick={handleClose} // Fecha o Offcanvas ao clicar
                />
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  </div>
);

const Topbar: React.FC<{ topbarRef: RefObject<HTMLDivElement> }> = ({
  topbarRef,
}) => (
  <div
    ref={topbarRef}
    className={`${styles.topbar} bg-light text-secondary py-3 `}
  >
    <div className="container d-flex justify-content-between">
      <small>Contato: {headerData.contactInfo.phone}</small>
      <small>Email: {headerData.contactInfo.email}</small>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const topbarRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const isFixed = useFixedOnScroll(topbarRef, navbarRef);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header id="inicio" className="m-0 p-0">
      <Topbar topbarRef={topbarRef} />
      <OffcanvasNavbar
        navbarRef={navbarRef}
        isFixed={isFixed}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </header>
  );
};

export default Header;
