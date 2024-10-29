import React, { RefObject, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import useFixedOnScroll from "@/hooks/useFixedOnScroll";
import headerData from "@/data/headerData.json";
import LOGO_IMAGE from "@/assets/img/logo/logo.png"

const NavItem: React.FC<{ link: string; labelId: string; label: string }> = ({
  link,
  labelId,
  label,
}) => (
  <Nav.Link as="li" className={styles.menuItem}>
    <Link href={link} className={styles.menuText}>
      <div className="d-flex flex-column justify-content-start align-items-start p-0 m-0">
        <span className={`text-highlight small ${styles.labelIdVisibility}`}>{labelId}</span>
      </div>
      {label}
    </Link>
  </Nav.Link>
);

const OffcanvasNavbar: React.FC<{
  navbarRef: RefObject<HTMLDivElement>;
  isFixed: boolean;
}> = ({ navbarRef, isFixed }) => (
  <div
    className={`${styles.header} ${isFixed ? styles.fixed : ""} py-3 bg-white`}
  >
    <Navbar expand="sm" ref={navbarRef} className="align-items-center py-0">
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
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3" as="ul">
              {headerData.menuItems.map((item, index) => (
                <NavItem
                  key={index}
                  link={item.link}
                  labelId={item.labelId}
                  label={item.label}
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
  const topbarRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const isFixed = useFixedOnScroll(topbarRef, navbarRef);

  return (
    <header className="m-0 p-0">
      <Topbar topbarRef={topbarRef} />
      <OffcanvasNavbar navbarRef={navbarRef} isFixed={isFixed} />
    </header>
  );
};

export default Header;
