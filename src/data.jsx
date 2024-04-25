import MainImages from "./images/main_img/main_img";

const cardsData = [
  {
    id: 1,
    title: "Renault Arkana drive",
    price: "1 316 000",
    description:
      "Купе-кроссовер Renault ARKANA — автомобиль, созданный с чистого листа. В нем все по-новому: от дизайна кузова до эргономики салона. Получилось эмоционально и надежно — оцените сами!",
      images: [
        { id: 1, src: MainImages.cardCarOne },
        { id: 2, src: MainImages.cardCarOneNext }
      ],
  },
  {
    id: 2,
    title: "Volkswagen Tiguan PA",
    price: "2 395 000",
    description:
      "Купе-кроссовер Renault ARKANA — автомобиль, созданный с чистого листа. В нем все по-новому: от дизайна кузова до эргономики салона. Получилось эмоционально и надежно — оцените сами!",
      images: [
        { id: 1, src: MainImages.cardCarTwo },
        { id: 2, src: MainImages.cardCarTwo }
      ],
  },
  {
    id: 3,
    title: "BMW X7",
    price: "8 188 000",
    description:
      "Купе-кроссовер Renault ARKANA — автомобиль, созданный с чистого листа. В нем все по-новому: от дизайна кузова до эргономики салона. Получилось эмоционально и надежно — оцените сами!",
      images: [
        { id: 1, src: MainImages.cardCarThree },
        { id: 2, src: MainImages.cardCarThree }
      ],
  },
];

export default cardsData;
