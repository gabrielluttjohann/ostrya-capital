import Card02 from "@/components/common/Card02/Card02";
import Slider01 from "@/components/common/Slider01/Slider01";
import { Container, Row } from "react-bootstrap";

const CreditPF: React.FC = () => {
  const cardsData = [
    {
      title: "Financiamento de Veículo",
      description:
        "Linhas de crédito para aquisição de veículos novos e usados, incluindo veículos leves, utilitários, caminhões e motocicletas. Prazos de até 60 meses e financiamento de até 80% do valor.",
    },
    {
      title: "Financiamento Imobiliário",
      description:
        "Crédito destinado à compra, construção ou reforma de imóveis residenciais e comerciais. Prazos longos e taxas atrativas para aquisição de imóveis ou melhorias.",
    },
    {
      title: "Crédito com Garantia de Imóvel ou Veículo",
      description:
        "Utilize um imóvel ou veículo como garantia para obter valores maiores e taxas mais competitivas. Ideal para consolidar dívidas ou investir em novos projetos.",
    },
  ];

  return (
    <section className="my-60">
      <Container>
        <Row className="justify-content-center align-items-center px-4 ">
          <div className="col-md-7 mb-4">
            <p className="m-0 text-highlight fw-bold">S O L U Ç Õ E S</p>
            <h2 className="text-medium mt-0 mb-4">Para Você</h2>
            <p className="">
              Soluções de Crédito Personalizadas para Pessoas Físicas:
              Financiamentos e Linhas de Crédito com Garantia, Desenvolvidas
              para Atender às Suas Necessidades de Aquisição, Reestruturação e
              Crescimento Patrimonial.
            </p>
          </div>
          <div className="col-md-5 d-flex justify-content-md-end">
            <a href="#" className="btn">
              Fale agora com um especialista
            </a>
          </div>
        </Row>
        <div className="mt-60">
          <Slider01
            autoPlayInterval={4000}
            showControls={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {cardsData.map((cardData, index) => (
              <Card02
                key={index}
                title={cardData.title}
                description={cardData.description}
              />
            ))}
          </Slider01>
        </div>
      </Container>
    </section>
  );
};

export default CreditPF;
