import Image from "next/image";
import React from "react";
import footerData from "@/data/footerData.json"; // Ajuste o caminho conforme sua estrutura de pastas

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
    <h4 className="mb-4 text-white">{title}</h4>
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
              "{footerData.quote.text}" <br />{" "}
              <strong>- {footerData.quote.author}</strong>
            </p>
            <SocialLinks links={footerData.socialLinks} />
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <LinksList title="Contato" links={footerData.contactLinks} />
              <LinksList title="Endereço" links={footerData.addressLinks} />
            </div>
          </div>
        </div>
        <div className="pt-5 text-center">
          <p className="text-white">{footerData.copyright.text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
