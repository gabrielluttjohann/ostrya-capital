import Image from "next/image";
const SERVICE_IMAGE_01 = require("@/assets/img/services/service-01.png");
const SERVICE_IMAGE_02 = require("@/assets/img/services/service-02.png");
const SERVICE_IMAGE_03 = require("@/assets/img/services/service-03.png");

const consultingData = [
  {
    href: "/insights/diferenca-de-consultoria-e-assessoria",
    imgSrc: SERVICE_IMAGE_01,
    imgAlt: "Consultoria x Assessoria: Entenda a Diferença",
    title: "Energia Sustentável: Economize Até 35% na Conta de Luz",
  },
  {
    href: "/insights/aposentadoria-como-rs-1000-mensais-podem-render-mais-de-1-milhao",
    imgSrc: SERVICE_IMAGE_02,
    imgAlt: "Aposentadoria: Investindo para o futuro",
    title: "Negociação de Precatório: Agilidade e Segurança no Processo",
  },
  {
    href: "/insights/transparencia-e-alinhamento-entenda-a-remuneracao",
    imgSrc: SERVICE_IMAGE_03,
    imgAlt: "Transparência e Alinhamento: Entenda a Remuneração",
    title: "Crédito Consignado para seus Funcionários: Vantagem Exclusiva",
  },
];

const ConsultingSection = () => {
  return (
    <section id="investments" className="event pt-120 pb-90 p-relative fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-relative">
            <div
              className="center-align mb-50 text-center wow fadeInDown animated"
              data-animation="fadeInDown"
              data-delay=".4s"
            >
              <h2 className="display-5 fw-bold mb-120">
                Outras soluções Customizadas
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {consultingData.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp animated mb-120"
              key={index}
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div className="card event-item h-100 d-flex flex-column hover-zoomin">
                <div className="thumb">
                  <a href={item.href}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={300}
                      height={200}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <h3 className="fw-bold my-3 text-center">
                    <a href={item.href}>{item.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
