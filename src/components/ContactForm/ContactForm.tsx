import React from "react";

// Componente para o cabeçalho da seção de descrição
const BookingDescription: React.FC = () => {
  return (
    <div className="col-lg-6 py-5">
      <div className="py-5">
        <h2 className="text-black mb-4">
          Marque uma reunião para avaliarmos as necessidades de sua empresa
        </h2>
        <p className="text-black mb-0">
          Por favor, preencha o formulário abaixo para que um de nossos
          especialistas entre em contato com você. Estamos prontos para entender
          suas necessidades e oferecer a melhor solução financeira.
        </p>
      </div>
    </div>
  );
};

// Componente para o formulário de agendamento
const BookingForm: React.FC = () => {
  return (
    <div className="bg-green h-100 d-flex flex-column justify-content-center text-center p-5">
      <h1 className="text-white mb-4">Agende uma Reunião</h1>
      <form>
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Nome"
              style={{ height: "55px" }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="email"
              className="form-control border-0"
              placeholder="Email"
              style={{ height: "55px" }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <select className="form-select border-0" style={{ height: "55px" }}>
              <option selected>Selecione uma opção</option>
              <option value="1">Contratação de Crédito</option>
              <option value="2">Reestruturação de Dívidas</option>
              <option value="3">Consultoria Financeira</option>
              <option value="4">Avaliação de Empresas</option>
              <option value="5">Fusões e aquisições</option>
              <option value="6">Recuperação Judicial</option>
              <option value="7">Outro</option>
            </select>
          </div>
          <div className="col-12 col-sm-6">
            <div data-target-input="nearest">
              <input
                type="text"
                className="form-control border-0 datetimepicker-input"
                placeholder="Telefone"
                data-target="#date1"
                data-toggle="datetimepicker"
                style={{ height: "55px" }}
              />
            </div>
          </div>
          <div className="col-12">
            <textarea
              className="form-control border-0"
              placeholder="Mensagem"
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-secondary w-100 py-3" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// Componente principal da seção de agendamento
const BookingSection: React.FC = () => {
  return (
    <div className="container-fluid bg-green-alt booking my-5">
      <div className="container">
        <div className="row gx-5">
          <BookingDescription />
          <div className="col-lg-6">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
