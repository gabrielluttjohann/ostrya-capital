import { MEA_IMAGE } from "@/constants/images.c";

interface MeaData {
  image: {
    src: string;
    alt: string;
  };
  content: {
    littleTitle: string;
    title: string;
    paragraphs: Array<string>;
  };
  cta: {
    link: string;
    text: string;
  };
}

export const meaData: MeaData = {
  image: {
    src: MEA_IMAGE,
    alt: "Fale com um especialista",
  },
  content: {
    littleTitle: "Avaliação para fusões e aquisições (M&A)",
    title: "Suporte Completo para Negociações Estratégicas",
    paragraphs: [
      "Nosso serviço de fusões e aquisições (M&A) oferece suporte completo para você que deseja vender ou comprar uma empresa, além de auxiliar na busca pelo financiamento ideal para essas operações. Atuamos de maneira estratégica, identificando as melhores oportunidades no mercado, avaliando o valor justo do negócio e intermediando todas as etapas da negociação.",
      "Seja para expandir seu portfólio ou para realizar uma venda bem concluída, nossa equipe acompanha de perto cada fase do processo, garantindo que todas as decisões sejam fundamentadas e alinhadas com seus objetivos. Também atuamos buscando as melhores opções de financiamento, facilitando o acesso ao capital necessário para essas transações.",
    ],
  },
  cta: {
    link: "",
    text: "",
  },
};
