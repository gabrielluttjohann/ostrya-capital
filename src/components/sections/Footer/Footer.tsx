import Image from "next/image";
import React from "react";
import footerData from "@/data/footerData.json";

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

// Modificar o tipo de `links` para incluir `filePath` como uma alternativa
const LinksList: React.FC<{
  title: string;
  links: (
    | { href: string; text: string }
    | { filePath: string; text: string }
  )[];
}> = ({ title, links }) => (
  <div className="col-12 col-md-6 col-lg-3 mb-5">
    <h4 className="mb-4 text-white">{title}</h4>
    <ul className="list-unstyled">
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <a
            className="text-white"
            href={"href" in link ? link.href : link.filePath}
            target="_blank"
            rel="noopener noreferrer"
          >
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
              <LinksList title="Políticas" links={footerData.policiesLinks} />
              <LinksList title="Contato" links={footerData.contactLinks} />
              <LinksList title="Endereço" links={footerData.addressLinks} />
            </div>
          </div>
        </div>
        <div className="pt-5 text-center text-white">
          <p className="fw-bold">
            {" "}
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
          <p>
            Ferreira e Luttjohann Assessoria Empresarial LTDA, CNPJ:
            52.995.687/0001-46, possui sede social no município de Novo
            Hamburgo-RS, à Rua Tamandaré, 140 - sala 901, CEP: 93410-150
          </p>

          <p className="text-white">{footerData.copyright.text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
