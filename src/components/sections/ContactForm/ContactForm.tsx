import React from "react";
import BG from "@/assets/img/placeholder/design-alt.png";

const ContactWithMap: React.FC<{ mapIframe: string }> = ({ mapIframe }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 map-box">
        <iframe
          src={mapIframe}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const mapIframe =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509215!2d144.9537363153173!3d-37.81627997975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f57f%3A0x4e2a82ebc105b4d5!2sR.%20Tamandar%C3%A9%2C%20140%2C%20sala%20901%2C%20Novo%20Hamburgo%20-%20RS%2C%2093410-150!5e0!3m2!1sen!2sbr!4v1693000000000!5m2!1sen!2sbr";

  return (
    <section
      className="py-5 px-4 bg-light"
      style={{ backgroundImage: `url(${BG.src})` }}
    >
      <div className="container mb-5">
        <div className="">
          <div className="text-center">
            <p className="text-highlight fs-1">|</p>
            <h2 className="text-medium text-center">
              Encontre-nos em Nossa Localização
            </h2>
            <p className="">
              Visite nosso escritório no endereço abaixo para uma consulta
              personalizada. 
            </p>
          </div>
        
        </div>
      </div>
      <div className="container mb-120">
        <ContactWithMap mapIframe={mapIframe} />
        <div className="container" style={{ marginTop: "-96px" }}>
          <div className="row">
            <div className="col-12 col-md-9 col-lg-7 mx-auto">
              {/* <div className="p-3 p-lg-5 text-center rounded border bg-light"> */}
              {/* <span className="text-muted">Entre em contato</span> */}
              {/* <h2 className="display-6 fw-bold mt-2 mb-5">
                Fale conosco e saiba como podemos ajudar você
                </h2>
                <ContactForm /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const ContactForm: React.FC = () => (
//   <form action="#">
//     <input className="form-control mb-3" type="text" placeholder="Nome" />
//     <input className="form-control mb-3" type="email" placeholder="E-mail" />
//     <textarea
//       className="form-control mb-3"
//       name="message"
//       cols={30}
//       rows={10}
//       placeholder="Sua mensagem..."
//     ></textarea>
//     <button className="btn btn-primary w-100">Enviar</button>
//   </form>
// );

export default Contact;
