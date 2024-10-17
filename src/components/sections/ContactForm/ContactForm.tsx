// import React from "react";
// import SplitScreen from "@/layouts/SplitScreen/SplitScreen";
// import { CONTENT_DATA, INPUT_DATA } from "@/data/contactFormData";

// const BookingDescription: React.FC<{
//   title: string;
//   paragraphs: Array<string>;
// }> = ({ title, paragraphs }) => {
//   return (
//     <div className="ms-4 d-flex flex-column justify-content-center align-items-center h-100">
//       <h2 className="mb-3 display-6 fw-bold">{title}</h2>
//       {paragraphs.map((paragraph, index) => (
//         <p key={index} className="mb-2">
//           {paragraph}
//         </p>
//       ))}
//     </div>
//   );
// };

// interface InputFieldProps {
//   type: string;
//   placeholder: string;
//   style?: React.CSSProperties;
// }

// const RenderInputs: React.FC<{ fields: Array<InputFieldProps> }> = ({
//   fields,
// }) => (
//   <>
//     {fields.map((field, index) => (
//       <div key={index} className="col-12 col-sm-6">
//         <input
//           type={field.type}
//           className="form-control border-0"
//           placeholder={field.placeholder}
//           style={field.style}
//         />
//       </div>
//     ))}
//   </>
// );

// const RenderOptions: React.FC<{ options: Array<string> }> = ({ options }) => (
//   <div className="col-12 col-sm-6">
//     <select className="form-select border-0" style={{ height: "55px" }}>
//       {options.map((option, index) =>
//         index === 0 ? (
//           <option key={index} selected>
//             {option}
//           </option>
//         ) : (
//           <option key={index} value={index}>
//             {option}
//           </option>
//         )
//       )}
//     </select>
//   </div>
// );

// const TextArea: React.FC<{
//   placeholder: string;
//   rows?: number;
// }> = ({ placeholder, rows = 3 }) => (
//   <div className="col-12">
//     <textarea
//       className="form-control border-0"
//       placeholder={placeholder}
//       rows={rows}
//     ></textarea>
//   </div>
// );

// const Button: React.FC<{
//   btnText: string;
//   onClick?: () => void;
// }> = ({ btnText, onClick }) => (
//   <div className="col-12">
//     <button
//       className="btn btn-secondary w-100 py-3"
//       type="button"
//       onClick={onClick}
//     >
//       {btnText}
//     </button>
//   </div>
// );

// const BookingForm: React.FC<{
//   fields: Array<InputFieldProps>;
//   options: Array<string>;
//   btnText: string;
// }> = ({ fields, options, btnText }) => {
//   return (
//     <div className="mb-5">
//       <div className="bg-green h-100 d-flex flex-column justify-content-center text-center p-5">
//         <h2 className="text-white mb-4 display-5 fw-bold">
//           Solicite uma Simulação
//         </h2>
//         <form>
//           <div className="row g-3">
//             <RenderInputs fields={fields} />
//             <RenderOptions options={options} />
//             <TextArea placeholder="Mensagem" />
//             <Button btnText={btnText} />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const ContactForm: React.FC = () => {
//   const { title, paragraphs } = CONTENT_DATA;
//   const { fields, options, btnText } = INPUT_DATA;

//   return (
//     <SplitScreen colSizes={[6, 6]} showColumns={[true, true]}>
//       <BookingForm fields={fields} options={options} btnText={btnText} />
//       <BookingDescription title={title} paragraphs={paragraphs} />
//     </SplitScreen>
//   );
// };

// export default ContactForm;



import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container mb-5">
        <div className="row">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="col-12 col-md-4 text-center mb-5 mb-md-0"
            >
              <IconSVG />
              <p className="mb-1">{contact.address}</p>
              <p className="mb-0">{contact.additionalInfo}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          height: "350px",
          width: "100%",
          backgroundImage: "url('bootstrap5-plain-assets/images/map1.png')",
        }}
      ></div>
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

const IconSVG: React.FC = () => (
  <svg
    className="mx-auto mb-4"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
      fill="#3d8bfd"
    ></path>
    <circle cx="24" cy="24" r="23.5" stroke="#6ea8fe"></circle>
  </svg>
);

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
