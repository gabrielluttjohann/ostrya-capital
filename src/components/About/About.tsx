import React from "react";
import Image from "next/image";
import { ABOUT } from "@/constants/images.c";

// Mission component
interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="custom-text-box mb-lg-0 border p-3 rounded shadow-sm bg-white">
    <h3 className="display-8 mb-3 font-weight-bold">
      <strong className="text-golden">{title}</strong>
    </h3>
    <p>{description}</p>
  </div>
);

const Story: React.FC = () => {
  return (
    <div className="custom-text-box p-4 border rounded shadow-sm bg-white mb-4 mb-lg-0">
      <h2 className="mb-2 text-green">
        <strong className="display-4 ">Quem Somos</strong>
      </h2>
      <h5 className="mb-3">Conheça a Ostrya Capital</h5>
      <p className="mb-0 text-secondary">
        O nome Ostrya vem de uma árvore conhecida por sua força e durabilidade.
        Assim como essa árvore, que possui raízes profundas e uma estrutura
        robusta, o grupo Ostrya se compromete a oferecer solidez e estabilidade
        para o patrimônio de seus clientes. A Ostrya é um símbolo de resiliência
        e crescimento, qualidades que aplicamos em cada solução financeira e
        estratégica que oferecemos.
      </p>
    </div>
  );
};

// Main section component
const About: React.FC = () => (
  <section className="py-5 bg-green-alt">
    <div className="container">
      <div className="row d-flex  align-items-center g-4">
        <div className="col-lg-6 col-12">
          <Image
            src={ABOUT}
            className="custom-text-box-image img-fluid rounded"
            width={836}
            height={960}
            alt="Volunteers Helping"
          />
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-between">
          <Story />
          <div className="row pt-3 g-3">
            <div className="col-12 col-md-6">
              <Card
                title="Visão"
                description="Nosso foco é prestar um serviço de confiança e eficiência, sempre com o objetivo de fortalecer o futuro financeiro dos nossos clientes."
              />
            </div>
            <div className="col-12 col-md-6">
              <Card
                title="Missão"
                description="Assim como a árvore que nos inspira, nossa missão é garantir a segurança e o crescimento sustentado de todos os que definimos em nosso trabalho."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
