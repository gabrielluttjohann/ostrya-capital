import { LOGO_IMAGE } from "@/constants/images.c";
import Image from "next/image";
import React from "react";

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
      href: "#",
      iconClass: "fa-instagram",
      alt: "Instagram",
    },
    {
      href: "#",
      iconClass: "fa-linkedin",
      alt: "LinkedIn",
    },
    {
      href: "#",
      iconClass: "fa-whatsapp",
      alt: "WhatsApp",
    },
  ];

  const companyLinks = [
    { href: "#", text: "About Us" },
    { href: "#", text: "Careers" },
    { href: "#", text: "Press" },
    { href: "#", text: "Blog" },
  ];

  const pageLinks = [
    { href: "#", text: "Login" },
    { href: "#", text: "Register" },
    { href: "#", text: "Add list" },
    { href: "#", text: "Contact" },
  ];

  const legalLinks = [
    { href: "#", text: "Terms" },
    { href: "#", text: "About Us" },
    { href: "#", text: "Team" },
    { href: "#", text: "Privacy" },
  ];

  const resourceLinks = [
    { href: "#", text: "Blog" },
    { href: "#", text: "Service" },
    { href: "#", text: "Product" },
    { href: "#", text: "Pricing" },
  ];

  return (
    <footer className="py-5 bg-green text-white">
      <div className="container">
        <div className="row border-bottom">
          <div className="col-12 col-lg-3 mb-5">
            <a className="d-inline-block mb-4" href="#">
              <Image
                className="img-fluid"
                src={LOGO_IMAGE}
                alt="Logo"
                width="96"
              />
            </a>
            <p className="mb-5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <SocialLinks links={socialLinks} />
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <LinksList title="Company" links={companyLinks} />
              <LinksList title="Páginas" links={pageLinks} />
              <LinksList title="Legal" links={legalLinks} />
              <LinksList title="Endereço" links={resourceLinks} />
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
