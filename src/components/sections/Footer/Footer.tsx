import Image from "next/image";
import React from "react";
import footerData from "@/data/footerData.json";
import LOGO_IMAGE from "@/assets/img/logo/logo-white.png";

const POLICIES = "./assets/documents/politicas-de-uso-de-dados.pdf";

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
          <p className="fw-bold">
            A Ostrya Capital não solicita qualquer tipo de depósito ou pagamento
            antecipado para a aprovação de operações de empréstimo. Todas as
            etapas do processo de crédito são realizadas de forma clara e
            segura, sem exigência de valores prévios por parte do cliente.
          </p>
          <p>
            2. Canais de Comunicação Por razões de segurança, a Ostrya Capital
            não utiliza e-mails de domínios genéricos como (@gmail.com,
            @yahoo.com, @hotmail.com) para comunicação oficial com clientes.
            Toda comunicação oficial é feita exclusivamente a partir de
            endereços de e-mail associados ao domínio @ostryacapital.com ou
            @ostrya.com.br, assegurando a autenticidade e segurança das
            informações trocadas.
          </p>
          <p>
            3. Atuação como Correspondente Bancário A Ostrya Capital não realiza
            atividades privativas de instituições financeiras, como concessão
            direta de financiamentos e/ou empréstimos. Em conformidade com a
            Resolução nº 4.935, de 29 de julho de 2021, do Conselho Monetário
            Nacional, atuamos exclusivamente como Correspondente Bancário de
            instituições financeiras autorizadas pelo Banco Central do Brasil,
            as quais são as credoras nas operações de crédito e empréstimos
            oferecidos a nossos clientes. As instituições financeiras com as
            quais a Ostrya Capital opera incluem parceiros confiáveis e
            devidamente autorizados pelo Banco Central, garantindo segurança e
            conformidade em todas as operações realizadas.
          </p>
          <p>
            4. Segurança e Confiabilidade A Ostrya Capital adota práticas
            rígidas de segurança e privacidade para proteger as informações de
            nossos clientes, mantendo-se em conformidade com a legislação
            vigente e oferecendo um serviço seguro e confiável. Para qualquer
            dúvida ou esclarecimento sobre nossa política de conduta, entre em
            contato através dos canais oficiais disponíveis em nosso site.
          </p>
          <p className="text-white">{footerData.copyright.text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
