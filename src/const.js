export const HEADER_LINKS = [
  `Услуги`,
  `Рассчитать кредит`,
  `Конвертер валют`,
  `Контакты`,
];

export const ESC_CODE = 27;

export const FOOTER_LINKS = [
  ` Услуги`,
  ` Рассчитать кредит`,
  ` Контакты`,
  `Задать вопрос`,
];

export const PROMO__ITEMS = [
  {
    mod: `--credit`,
    content: `Кредиты на любой случай`,
    button: { text: `Рассчитать кредит`, link: `#calculator` },
  },
  {
    mod: `--man`,
    content: `Ваша уверенность в\u00A0завтрашнем дне`,
  },
  {
    mod: `--branches`,
    content: `Всегда рядом`,
    button: { text: `Найти отделение`, link: `#map` },
  },
];

export const TABS = [`Вклады`, `Кредиты`, `Страхование`, `Онлайн-сервисы`];

export const SERVICES = [
  {
    mod: `--deposits`,
    lable: `Вклады`,
    title: `Вклады Лига Банка – это выгодная инвестиция в свое будущее`,
    lists: [
      `Проценты по вкладам до 7%`,
      `Разнообразные условия`,
      `Возможность ежемесячной капитализации или вывод процентов на банковскую карту`,
    ],
    button: { text: `Узнать подробнее`, link: `/` },
  },
  {
    mod: `--credits`,
    lable: `Кредиты`,
    title: `Лига Банк выдает кредиты под любые цели`,
    lists: [`Ипотечный кредит`, `Автокредит`, `Потребительский кредит`],
    description: `Рассчитайте ежемесячный платеж
    и\u00A0ставку по кредиту воспользовавшись нашим `,
    descriptionLink: `кредитным калькулятором`,
  },
  {
    mod: `--insurance`,
    lable: `Страхование`,
    title: `Лига Страхование — застрахуем все что захотите`,
    lists: [
      `Автомобильное страхование`,
      `Страхование жизни и здоровья`,
      `Страхование недвижимости`,
    ],
    button: { text: `Узнать подробнее`, link: `/` },
  },
  {
    mod: `--online-services`,
    lable: `Онлайн-сервисы`,
    title: `Лига Банк — это огромное количество онлайн-сервисов для вашего удобства`,
    lists: [
      `Мобильный банк,
      который\u00A0всегда\u00A0под\u00A0рукой`,
      `Приложение Лига-проездной позволит вам\u00A0оплачивать билеты по всему миру`,
    ],
    button: { text: `Узнать подробнее`, link: `/` },
  },
];

export const CreditTarget = {
  MORTAGE: `mortage`,
  AUTO: `auto`,
};

export const CreditTargetLable = {
  [CreditTarget.MORTAGE]: 'Ипотечное кредитование',
  [CreditTarget.AUTO]: 'Автомобильное кредитование',
};

export const ERROR_COST_INPUT = `Некорректное значение`;
export const MAX_PERCENT = 100;
export const PART_PAYMENT_OF_INCOME = 45;
export const MONTS_IN_YEAR = 12;
export const CreditParams = {
  [CreditTarget.MORTAGE]: {
    cost: {
      min: 1200000,
      max: 25000000,
      step: 100000,
      default: 2000000,
    },

    initialFeePercent: {
      min: 10,
      max: 100,
      step: 5,
      boundary: 15,
    },

    years: {
      min: 5,
      max: 30,
      step: 1,
    },

    interestRate: {
      min: 8.5,
      boundary: 15,
      max: 9.4,
    },
    initialFee: 200000,
    maternalСapital: 470000,
    minCredit: 500000,
  },

  [CreditTarget.AUTO]: {
    cost: {
      min: 500000,
      max: 5000000,
      step: 50000,
      default: 2000000,
    },

    initialFeePercent: {
      min: 20,
      max: 100,
      step: 5,
    },
    years: {
      min: 1,
      max: 5,
      step: 1,
    },
    interestRate: {
      max: 16,
      min: 15,
      cascoOrLifeInsurance: 8.5,
      cascoAndLifeInsurance: 3.5,
    },
    initialFee: 400000,
    costBoundary: 2000000,
    minCredit: 200000,
  },
};

export const REG_EXP_PHONE =
  /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
export const REG_EXP_NAME = /^[a-zA-Zа-яА-Я ]*$/;
export const REG_EXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

export const CoordinatesCities = {
  MOSCOW: [55.755814, 37.617635],
  SARATOV: [51.533557, 46.034257],
  KAZAN: [55.796127, 49.106405],
  TYMEN: [57.152985, 65.541227],
  OMSK: [54.989342, 73.368212],
  SURGUT: [61.254035, 73.396221],
};

export const PLACEMARKS = [
  CoordinatesCities.MOSCOW,
  CoordinatesCities.SARATOV,
  CoordinatesCities.KAZAN,
  CoordinatesCities.TYMEN,
  CoordinatesCities.OMSK,
  CoordinatesCities.SURGUT,
];

export const MapSetting = {
  COORDINATES: [58.847263, 70.301885],
  ZOOM: 5,
};

export const PlacemarkSetting = {
  ICON_LAYOUT: 'default#image',
  IMAGE: 'img/map-pin.svg',
  SIZE: [35, 42],
  OFFSETS: [-17, -38],
};
