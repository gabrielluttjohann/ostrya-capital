import Image from "next/image";
import React from "react";
const LOGO_IMAGE = require("@/assets/img/logo/logo-white.png");

const SocialLinks: React.FC<{
  links: { href: string; iconClass: string; alt: string }[];
}> = ({ links }) => (
  <div>
    {links.map((social, index) => (
      <a
        key={index}
        className="d-inline-block me-3"
        href={social.href}
        aria-label={social.alt}
      >
        <i
          className={`fab ${social.iconClass} text-white`}
          style={{ fontSize: "1.5em" }}
        ></i>
      </a>
    ))}
  </div>
);

const LinksList: React.FC<{
  title: string;
  links: { href: string; text: string }[];
}> = ({ title, links }) => (
  <div className="col-12 col-md-6 col-lg-3 mb-5">
    <h4 className="mb-4">{title}</h4>
    <ul className="list-unstyled">
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <a className="text-white" href={link.href}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: "https://instagram.com",
      iconClass: "fa-instagram",
      alt: "Instagram",
    },
    {
      href: "https://linkedin.com",
      iconClass: "fa-linkedin",
      alt: "LinkedIn",
    },
    {
      href: "https://wa.me",
      iconClass: "fa-whatsapp",
      alt: "WhatsApp",
    },
  ];

  const contactLinks = [
    { href: "mailto:contato@ostrya.com", text: "contato@ostrya.com" },
    { href: "tel:+555199999999", text: "(51) 99999-9999" },
  ];

  const addressLinks = [
    {
      href: "#",
      text: "R. Tamandaré, 140, sala 901, Novo Hamburgo - RS, 93410-150",
    },
  ];

  return (
    <footer className="py-120 bg-green text-white">
      <div className="container">
        <div className="row border-bottom">
          <div className="col-12 col-lg-3 mb-5">
            <a className="d-inline-block mb-4" href="#">
              <Image
                className="img-fluid"
                src={LOGO_IMAGE}
                alt="Ostrya Logo"
                width={96}
                height={96}
              />
            </a>
            <p className="mb-5 text-white">
              Conectando soluções financeiras para pessoas e empresas, com foco
              em inovação e crescimento sustentável.
            </p>
            <SocialLinks links={socialLinks} />
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <LinksList title="Contato" links={contactLinks} />
              <LinksList title="Endereço" links={addressLinks} />
            </div>
          </div>
        </div>
        <div className="pt-5 text-center">
          <p className="text-white">
            Copyright © Ostrya 2024. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
