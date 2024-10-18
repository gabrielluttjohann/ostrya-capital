import React from "react";
import HERO_IMAGE from "@/assets/img/hero/hero.png";
import styles from "./Hero.module.css";

const socialLinks = [
  { href: "#", iconClass: "fab fa-facebook-f", alt: "Facebook" },
  { href: "#", iconClass: "fab fa-twitter", alt: "Twitter" },
  { href: "#", iconClass: "fab fa-linkedin-in", alt: "LinkedIn" },
  { href: "#", iconClass: "fab fa-instagram", alt: "Instagram" },
];

const SectionComponent: React.FC = () => {
  return (
    <section
      className={`bg-light position-relative overflow-hidden ${styles.heroSection}`}
    >
      <div
        className="d-flex flex-column-reverse flex-lg-row align-items-center"
        style={{ height: "100%" }}
      >
        {/* Imagem ao lado em telas maiores */}
        <img
          className="d-none d-lg-block position-absolute h-100 col-lg-4 col-xl-5 px-0"
          style={{ objectFit: "cover" }}
          src={HERO_IMAGE.src}
          alt="Hero"
        />

        <div className="container d-flex flex-column justify-content-center position-relative h-100">
          <div className="offset-lg-4 offset-xl-5 pt-12 pb-12">
            <div className="mb-12 mb-lg-16">
              <h1
                className="mb-3 display-5 fw-bold my-4"
                style={{ letterSpacing: "-1px" }}
              >
                Conte com uma equipe que já participou da análise de mais de R$
                50,0 bilhões em crédito
              </h1>
              <p className="mb-4 lead">
                Como parceira de diversas instituições financeiras, oferecemos
                um serviço personalizado que permite comparar taxas de juros e
                demais condições disponíveis em vários bancos, de forma que
                podemos oferecer a solução de crédito mais interessante para
                você. Conheça todos os nossos serviços e entenda como a Ostrya
                Capital pode auxiliar você e sua empresa.
              </p>
              <div>
                <a
                  className="my-60 p-4 btn bg-blue text-white d-block d-sm-inline-block"
                  href="#"
                >
                  Fale Agora Com um Especialista
                </a>
              </div>

              {/* Seção de redes sociais */}
              <div className="d-flex justify-content-start my-4">
                {socialLinks.map((link) => (
                  <a key={link.alt} href={link.href} className="mx-2">
                    <i
                      className={link.iconClass}
                      style={{ fontSize: "24px", color: "#000" }}
                    ></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Imagem abaixo do conteúdo em dispositivos menores */}
            <img
              className="d-block d-lg-none w-100 mt-4"
              style={{ objectFit: "cover" }}
              src={HERO_IMAGE.src}
              alt="Hero"
            />

            <img
              className="d-none d-lg-block position-absolute end-0 bottom-0 mb-48"
              src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComponent;
