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
      { id: 2, src: MainImages.cardCarOneNext },
      { id: 2, src: MainImages.cardCarOneNext },
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
      { id: 2, src: MainImages.cardCarTwo },
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
      { id: 2, src: MainImages.cardCarThree },
    ],
  },
];

const cardsDataSeller = [
  {
    id: 1,
    title: "KIA Sportage. LUXE+ 2Л",
    year: '2015',
    city: "г. Якутск",
    price: "2 211 700",
    images: [
      { id: 1, src: MainImages.seller1},
    ],
  },
  {
    id: 2,
    title: "Skoda Karoq",
    year: '2016',
    city: "г. Казань",
    price: "1 790 000",
    images: [
      { id: 1, src: MainImages.seller2},
    ],
  },
  {
    id: 3,
    title: "Citroen c4",
    year: '2016',
    city: "г. Уфа",
    price: "1 523 000",
    images: [
      { id: 1, src: MainImages.seller3},
    ],
  },
  {
    id: 4,
    title: "Mercedes-benz Gls 400 D 4m Luxury",
    year: '2021',
    city: "г. Казань",
    price: "2 211 700",
    images: [
      { id: 1, src: MainImages.seller4},
    ],
  },
  {
    id: 5,
    title: "Mercedes-benz Gle 350 D 4matic купе",
    year: '2015',
    city: "г. Казань",
    price: "2 211 700",
    images: [
      { id: 1, src: MainImages.seller5},
    ],
  },
  {
    id: 6,
    title: "Mercedes-benz Gle 300 D 4matic Sport",
    year: '2020',
    city: "г. Казань",
    price: "2 211 700",
    images: [
      { id: 1, src: MainImages.seller6},
    ],
  },
  {
    id: 7,
    title: "Kia Sportage. Luxe+ 2.4л",
    year: '2017',
    city: "г. Якутск",
    price: "2 336 700",
    images: [
      { id: 1, src: MainImages.seller7},
    ],
  },
  {
    id: 8,
    title: "Kia K5. Prestige. 2.5л",
    year: '2022',
    city: "г. Якутск",
    price: "2 242 400",
    images: [
      { id: 1, src: MainImages.seller8},
    ],
  },
  {
    id: 9,
    title: "Honda Freed",
    city: "С аукциона Японии",
    year: '2011',
    price: "от 650 000",
    images: [
      { id: 1, src: MainImages.seller9},
    ],
  },
  {
    id: 10,
    title: "Nissan Caravan (nv350)",
    year: '2015',
    city: "С аукциона Японии",
    price: "от 1 250 000",
    images: [
      { id: 1, src: MainImages.seller10},
    ],
  },
  {
    id: 11,
    title: "Toyota Land Cruizer Prado",
    year: '2010',
    city: "С аукциона Японии",
    price: "от 2 500 000",
    images: [
      { id: 1, src: MainImages.seller11},
    ],
  },
  {
    id: 12,
    title: "Toyota Vitz",
    year: '2018',
    city: "С аукциона Японии",
    price: "от 480 000",
    images: [
      { id: 1, src: MainImages.seller12},
    ],
  },
  {
    id: 13,
    title: "Toyota Vitz",
    year: '2012',
    city: "С аукциона Японии",
    price: "от 520 000",
    images: [
      { id: 1, src: MainImages.seller13},
    ],
  },
  {
    id: 14,
    title: "KIA Sportage. LUXE+ 2Л",
    year: '2015',
    city: "С аукциона Японии",
    price: "от 750 000",
    images: [
      { id: 1, src: MainImages.seller14},
    ],
  },
  {
    id: 15,
    title: "KIA Sportage. LUXE+ 2Л",
    year: '2023',
    city: "С аукциона Японии",
    price: "от 800 000",
    images: [
      { id: 1, src: MainImages.seller15},
    ],
  },
  {
    id: 16,
    title: "Toyota Vitz",
    year: '2020',
    city: "С аукциона Японии",
    price: "от 1 050 000",
    images: [
      { id: 1, src: MainImages.seller16},
    ],
  },
  {
    id: 17,
    title: "KIA Sportage. LUXE+ 2Л",
    year: '2015',
    city: "С аукциона Японии",
    price: "от 600 000",
    images: [
      { id: 1, src: MainImages.seller17},
    ],
  },
  {
    id: 18,
    title: "KIA Sportage. LUXE+ 2Л",
    year: '2020',
    city: "С аукциона Японии",
    price: "от 850 000",
    images: [
      { id: 1, src: MainImages.seller4},
    ],
  },
  {
    id: 19,
    title: "KIA Sportage. LUXE+ 2Л",
    year: '2019',
    city: "С аукциона Японии",
    price: "от 440 000",
    images: [
      { id: 1, src: MainImages.seller19},
    ],
  },
];

export { cardsData, cardsDataSeller };
