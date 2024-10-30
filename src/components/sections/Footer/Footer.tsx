import Image from "next/image";
import React from "react";
import footerData from "@/data/footerData.json";
import LOGO_IMAGE from "@/assets/img/logo/logo-white.png";

// Use a referência correta para o PDF
const POLICIES = "/assets/documents/politicas-de-uso-de-dados.pdf";

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
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={`fab ${social.iconClass} text-white`}
          style={{ fontSize: "1.5em" }}
        ></i>
      </a>
    ))}
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
            <SocialLinks links={footerData.socialLinks} />
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <h4 className="mb-4 text-white">Políticas</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a
                      className="text-white"
                      href={POLICIES}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Políticas de uso de dados
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <h4 className="mb-4 text-white">Contato</h4>
                <ul className="list-unstyled">
                  {footerData.contactLinks.map((contact, index) => (
                    <li key={index} className="mb-2">
                      <a className="text-white" href={contact.href}>
                        {contact.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <h4 className="mb-4 text-white">Endereço</h4>
                <ul className="list-unstyled">
                  {footerData.addressLinks.map((address, index) => (
                    <li key={index} className="mb-2">
                      <a className="text-white" href={address.href}>
                        {address.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 text-center text-white">
          <p className="text-white">{footerData.copyright.text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
