import React from "react";

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

const Icon: React.FC<{ iconClass: string }> = ({ iconClass }) => (
  <i className={`${iconClass} mx-auto mb-4`} style={{ fontSize: "48px" }}></i>
);

const ContactSection: React.FC = () => {
  const mapIframe =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509215!2d144.9537363153173!3d-37.81627997975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f57f%3A0x4e2a82ebc105b4d5!2sR.%20Tamandar%C3%A9%2C%20140%2C%20sala%20901%2C%20Novo%20Hamburgo%20-%20RS%2C%2093410-150!5e0!3m2!1sen!2sbr!4v1693000000000!5m2!1sen!2sbr";

  return (
    <section className="py-5 bg-light">
      <div className="container mb-5">
        <div className="row ">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="col-12 col-md-4 text-center mb-5 mb-md-0"
            >
              <Icon iconClass="fas fa-map-marker-alt" />
              <p className="mb-1">{contact.address}</p>
              <p className="mb-0">{contact.additionalInfo}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactWithMap mapIframe={mapIframe} />
      <div className="container" style={{ marginTop: "-96px" }}>
        <div className="row">
          <div className="col-12 col-md-9 col-lg-7 mx-auto">
            <div className="p-3 p-lg-5 text-center rounded border bg-light">
              <span className="text-muted">Lorem ipsum</span>
              <h2 className="display-6 fw-bold mt-2 mb-5">
                Lorem ipsum dolor sit amet consectutar domor at elis
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => (
  <form action="#">
    <input className="form-control mb-3" type="text" placeholder="Name" />
    <input className="form-control mb-3" type="email" placeholder="E-mail" />
    <textarea
      className="form-control mb-3"
      name="message"
      cols={30}
      rows={10}
      placeholder="Your Message..."
    ></textarea>
    <button className="btn btn-primary w-100">Action</button>
  </form>
);

const contactDetails = [
  { address: "1686, Geraldine Lane", additionalInfo: "New York, NY 10013" },
  { address: "hello@wireframes.org", additionalInfo: "" },
  { address: "+7-843-672-431", additionalInfo: "" },
];

export default ContactSection;
