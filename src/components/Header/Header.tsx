import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  INSTRAGRAM_LINK,
  LINKEDIN_LINK,
  WHATSAPP_LINK,
} from "@/constants/links.c";
import { LOGO_IMAGE } from "@/constants/images.c";
import CollisionButton from "@/components/common/Button/CollisionButton";

interface ContactInformation {
  icon: string;
  label: string;
  text: string;
  to: string;
}

interface SocialLink {
  href: string;
  title: string;
  icon: string;
}

interface NavigationItem {
  to: string;
  label: string;
}

const contactInformations: ContactInformation[] = [
  {
    icon: "fas fa-phone",
    label: "Telefone",
    text: "+55 51 98164-6071",
    to: "tel:5551981646071",
  },
  {
    icon: "fas fa-envelope",
    label: "Email",
    text: "investimentos@ostrya.com.br",
    to: "mailto:investimentos@ostrya.com.br",
  },
];

const socialLinks: SocialLink[] = [
  {
    href: WHATSAPP_LINK,
    title: "Whatsapp",
    icon: "fab fa-whatsapp",
  },
  {
    href: INSTRAGRAM_LINK,
    title: "Instagram",
    icon: "fab fa-instagram",
  },
  {
    href: LINKEDIN_LINK,
    title: "Linkedin",
    icon: "fab fa-linkedin",
  },
];

const navigationItems: NavigationItem[] = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
];

const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link href="/" className="navbar-brand">
      <Image src={LOGO_IMAGE} alt="logo" width={100} height={50} />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        {navigationItems.map((item, index) => (
          <NavItem key={index} link={item.to} label={item.label} />
        ))}
      </ul>
      <CollisionButton
        href={WHATSAPP_LINK}
        icon="fab fa-whatsapp"
        text="Fale Conosco"
      />
    </div>
  </nav>
);

const NavItem: React.FC<{ link: string; label: string }> = ({
  link,
  label,
}) => (
  <li className="nav-item">
    <Link href={link} className="nav-link">
      {label}
    </Link>
  </li>
);

const SocialLinks: React.FC = () => (
  <div className="d-flex align-items-center">
    {socialLinks.map((link, index) => (
      <SocialLinkItem key={index} {...link} />
    ))}
  </div>
);

const SocialLinkItem: React.FC<SocialLink> = ({ href, title, icon }) => (
  <Link href={href} title={title} target="_blank" className="me-3">
    <i className={icon} />
  </Link>
);
const ContactInfo: React.FC = () => (
  <div className="d-flex align-items-center">
    <ul className="list-unstyled d-flex">
      {contactInformations.map((contact, index) => (
        <ContactInfoItem key={index} {...contact} />
      ))}
    </ul>
  </div>
);

const ContactInfoItem: React.FC<ContactInformation> = ({
  icon,
  label,
  text,
  to,
}) => (
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
  return (
    <header className="header-area mb-4">
      <div className="w-100 bg-white">
        <div className="container">
          <div className="header-top d-none d-md-flex justify-content-between align-items-center my-3">
            <SocialLinks />
            <ContactInfo />
          </div>
        </div>
        <div className="w-100 bg-light py-2">
          <div className="container">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
