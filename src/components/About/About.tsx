import React from "react";
import Image from "next/image";
import { ABOUT } from "@/constants/images.c";

// Counter component
interface CounterProps {
  from: number;
  to: number;
  speed: number;
  text: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, speed, text }) => (
  <div className="counter-thumb mt-4 animate__animated animate__fadeIn">
    <div className="d-flex">
      <span
        className="counter-number"
        data-from={from}
        data-to={to}
        data-speed={speed}
      ></span>
      <span className="counter-number-text"></span>
    </div>
    <span className="counter-text fw-bold text-primary">{text}</span>
  </div>
);

// Mission component
interface MissionProps {
  title: string;
  description: string;
  points: string[];
}

const Mission: React.FC<MissionProps> = ({ title, description, points }) => (
  <div className="custom-text-box mb-lg-0 border p-3 rounded shadow-sm bg-white">
    <h3 className="display-8 mb-3 font-weight-bold">
      <strong className="text-golden">{title}</strong>
    </h3>
    <p>{description}</p>
    <ul className="custom-list mt-2">
      {points.map((point, index) => (
        <li key={index} className="custom-list-item d-flex">
          <i className="bi-check custom-text-box-icon me-2 text-success"></i>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Story: React.FC = () => {
  return (
    <div className="custom-text-box p-4 border rounded shadow-sm bg-white">
      <h2 className="mb-2 text-green">
        <strong className="display-4 ">Quem Somos</strong>
      </h2>
      <h5 className="mb-3">Conheça a Ostrya Capital</h5>
      <p className="mb-0  text-secondary">
        O nome <strong className="text-green">Ostrya</strong> vem de uma árvore
        conhecida por sua força e durabilidade. Assim como essa árvore, que
        possui raízes profundas e uma estrutura robusta, o grupo Ostrya se
        compromete a oferecer solidez e estabilidade para o patrimônio de seus
        clientes. A Ostrya é um símbolo de resiliência e crescimento, qualidades
        que aplicamos em cada solução financeira e estratégica que oferecemos.
      </p>
    </div>
  );
};

// Main section component
const About: React.FC = () => (
  <section className="py-5 bg-green" id="section_2 ">
    <div className="container ">
      <div className="row ">
        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
          <Image
            src={ABOUT}
            className="custom-text-box-image img-fluid rounded"
            width={836}
            height={960}
            alt="Volunteers Helping"
          />
        </div>
        {/*  */}
        <div className="col-lg-6 col-12">
          <Story />
          <div className="col-lg-6 col-md-6 col-12">
            <div className="row my-4 ml-4">
              <Mission
                title="Our Mission"
                description="Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus"
                points={["Charity Theme", "Semantic HTML", "Community Support"]}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 bg-white">
              <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                <Counter from={1} to={2009} speed={1000} text="Founded" />
                <div className="mb-4" /> {/* Gap between counters */}
                <Counter from={1} to={120} speed={1000} text="Donations" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
