import React from "react";
import SplitScreen from "@/layouts/SplitScreen/SplitScreen";
import { CONTENT_DATA, INPUT_DATA } from "@/data/contactFormData";

const BookingDescription: React.FC<{
  title: string;
  paragraphs: Array<string>;
}> = ({ title, paragraphs }) => {
  return (
    <div className="ms-4 d-flex flex-column justify-content-center align-items-center h-100">
      <h2 className="mb-3 display-6 fw-bold">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-2">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

interface InputFieldProps {
  type: string;
  placeholder: string;
  style?: React.CSSProperties;
}

const RenderInputs: React.FC<{ fields: Array<InputFieldProps> }> = ({
  fields,
}) => (
  <>
    {fields.map((field, index) => (
      <div key={index} className="col-12 col-sm-6">
        <input
          type={field.type}
          className="form-control border-0"
          placeholder={field.placeholder}
          style={field.style}
        />
      </div>
    ))}
  </>
);

const RenderOptions: React.FC<{ options: Array<string> }> = ({ options }) => (
  <div className="col-12 col-sm-6">
    <select className="form-select border-0" style={{ height: "55px" }}>
      {options.map((option, index) =>
        index === 0 ? (
          <option key={index} selected>
            {option}
          </option>
        ) : (
          <option key={index} value={index}>
            {option}
          </option>
        )
      )}
    </select>
  </div>
);

const TextArea: React.FC<{
  placeholder: string;
  rows?: number;
}> = ({ placeholder, rows = 3 }) => (
  <div className="col-12">
    <textarea
      className="form-control border-0"
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  </div>
);

const Button: React.FC<{
  btnText: string;
  onClick?: () => void;
}> = ({ btnText, onClick }) => (
  <div className="col-12">
    <button
      className="btn btn-secondary w-100 py-3"
      type="button"
      onClick={onClick}
    >
      {btnText}
    </button>
  </div>
);

const BookingForm: React.FC<{
  fields: Array<InputFieldProps>;
  options: Array<string>;
  btnText: string;
}> = ({ fields, options, btnText }) => {
  return (
    <div className="mb-5">
      <div className="bg-green h-100 d-flex flex-column justify-content-center text-center p-5">
        <h2 className="text-white mb-4 display-5 fw-bold">
          Solicite uma Simulação
        </h2>
        <form>
          <div className="row g-3">
            <RenderInputs fields={fields} />
            <RenderOptions options={options} />
            <TextArea placeholder="Mensagem" />
            <Button btnText={btnText} />
          </div>
        </form>
      </div>
    </div>
  );
};

const BookingSection: React.FC = () => {
  const { title, paragraphs } = CONTENT_DATA;
  const { fields, options, btnText } = INPUT_DATA;

  return (
    <SplitScreen colSizes={[6, 6]} showColumns={[true, true]}>
      <BookingForm fields={fields} options={options} btnText={btnText} />
      <BookingDescription title={title} paragraphs={paragraphs} />
    </SplitScreen>
  );
};

export default BookingSection;
