import { nanoid } from "@reduxjs/toolkit";

export const questionsTest = [
  {
    id: nanoid(),
    title: "Финансовые показатели",
    questions: [
      {
        id: "1",
        question: "Выручка организации за год",
        answers: {
          "1": "До 15 млн. руб",
          "2": "15-60 млн. руб",
          "3": "60-100 млн. руб",
          "4": "100-400 млн. руб",
          "5": "400-1000 млн. руб.",
          "6": "Более 1 млрд. руб.",
        },
      },
      {
        id: "2",
        question: "Стоимость имущества организации (итог Баланса)",
        answers: {
          "1": "До 20 млн. руб.",
          "2": "20-60 млн. руб.",
          "3": "60-100 млн. руб.",
          "4": "100-500 млн. руб.",
          "5": "500-1000 млн. руб",
          "6": "Более 1 млрд. руб.",
        },
      },
      {
        id: "3",
        question: "Применяемый режим налогообложения",
        answers: {
          "1": "Упрощенная система налогообложения (УСН) или ЕСХН",
          "2": "Общий",
        },
      },
    ],
  },
  {
    id: nanoid(),
    title: "Масштаб деятельности",
    questions: [
      {
        id: "4",
        question: "Сколько видов деятельности осуществляет организация?",
        answers: {
          "1": "1",
          "2": "2-3",
          "3": "4 и более",
        },
      },
      {
        id: "5",
        question:
          "Есть ли обособленные подразделения (филиалы, представительства)?",
        answers: {
          "1": "Нет",
          "2": "Есть не выделенные на самостоятельный баланс",
          "3": "Есть выделенные на самостоятельный баланс",
          "4": "Есть 3 и более филиалов на самостоятельном балансе",
        },
      },
      {
        id: "6",
        question: "В каком регионе организация ведет основную деятельность?",
        answers: "SELECT",
      },
      {
        id: "7",
        question:
          "Кроме данного региона, требуется ли выезд аудитора в другие регионы или удаленные точки региона?",
        answers: {
          "1": "Нет",
          "2": "Требуется в 1",
          "3": "Требуется в 2-3",
          "4": "Требуется в 3-5",
          "5": "Требуется более чем в 5",
        },
      },
      {
        id: "8",
        question: "Численность работников организации",
        answers: {
          "1": "До 10",
          "2": "10-50",
          "3": "50-100",
          "4": "100-500",
          "5": "500-1000",
          "6": "Более 1000",
        },
      },
      {
        id: "9",
        question: "Численность бухгалтерии",
        answers: {
          "1": "1 человек",
          "2": "2 человека",
          "3": "3-4 человека",
          "4": "5-7 человек",
          "5": "8-10 человек",
          "6": "10-20 человек",
          "7": "Более 20 человек",
        },
      },
    ],
  },
  {
    id: nanoid(),
    title: "Объем документооборота",
    questions: [
      {
        id: "10",
        question:
          "Годовой объем накладных и актов от покупателей и заказчиков (без учета розницы) – количество папок-сегрегаторов (обычных, толщиной 7 см.)",
        answers: {
          "1": "1 папка",
          "2": "2-3 папки",
          "3": "4-10 папок",
          "4": "11-30 папок",
          "5": "Более 30 папок",
        },
      },
      {
        id: "11",
        question: "Примерное количество ваших поставщиков (подрядчиков)",
        answers: {
          "1": "Мало (1-20)",
          "2": "Немного (20-50)",
          "3": "Достаточно (50-200)",
          "4": "Много (200-1000)",
          "5": "Очень много (более 1000)",
        },
      },
      {
        id: "12",
        question: "Вид продаж",
        answers: {
          "1": "Только в розницу",
          "2": "Только оптом",
          "3": "Оптом и в розницу",
        },
      },
      {
        id: "13",
        question: "Количество покупателей, заказчиков (без учета розницы)",
        answers: {
          "1": "Мало или только розница",
          "2": "Немного (20-50)",
          "3": "Достаточно (50-200)",
          "4": "Много (200-1000)",
          "5": "Очень много (более 1000)",
        },
      },
      {
        id: "14",
        question: "Способ ведения бухгалтерии",
        answers: {
          "1": "1С",
          "2": "Прочие российские бухгалтерские программы",
          "3": "Зарубежные программы (SAP, Navision и т.п.)",
          "4": "Программа собственной разработки",
          "5": "Подходит более чем один из перечисленных вариантов",
        },
      },
      {
        id: "15",
        question:
          "Оцените на ваш взгляд состояние бухгалтерского документооборота в вашей организации",
        answers: {
          "1": "Отличное, все аккуратно разложено по папкам в нужном порядке, документы легко искать",
          "2": "Нормальное, документы разложены по папкам, найти нужный не составляет труда",
          "3": "Удовлетворительное, не на все хватает рук, но как можем, упорядочиваем",
          "4": "Плохое, документы подшивают беспорядочно, бывают проблемы с поиском нужных",
        },
      },
    ],
  },
  {
    id: nanoid(),
    title: "Прочие факторы",
    questions: [
      {
        id: "16",
        question: "Проводился ли аудит за предыдущий год?",
        answers: {
          "1": "Да, этой же аудиторской фирмой",
          "2": "Да, другой аудиторской фирмой",
          "3": "Нет",
        },
      },
      {
        id: "17",
        question: "Как давно была выездная налоговая проверка вашей фирмы?",
        answers: {
          "1": "Последние три года не было",
          "2": "Была два года назад",
          "3": "Была год назад",
        },
      },
      {
        id: "18",
        question:
          "Когда последний раз менялся главный бухгалтер (кроме случаев назначения другого лица из вашей же бухгалтерии)?",
        answers: {
          "1": "Последние два года не менялся",
          "2": "Менялся примерно год назад",
          "3": "Менялся менее чем год назад",
        },
      },
    ],
  },
  {
    id: nanoid(),
    title: "Взаимоотношение с аудитором",
    questions: [
      {
        id: "19",
        question:
          "Аудиторская проверка является обязательной для вашей организации?",
        answers: {
          "1": "Да",
          "2": "Нет",
          "3": "Не знаю",
        },
      },
      {
        id: "20",
        question:
          "Организация относится к общественно-значимым организациям (ОЗО)?",
        answers: {
          "1": "Нет",
          "2": "Да (кроме ОЗО на финансовом рынке)",
          "3": "ОЗО на финансовом рынке",
        },
      },
      {
        id: "21",
        question: "Какую услугу от аудиторов вы хотели бы получить?",
        answers: {
          "1": "ОЗО на финансовом рынке",
          "2": "Официальное аудиторское заключение о достоверности финансовой отчетности + детальная проверка всех вопросов налогообложения",
          "3": "Проверка правильности налогового и бухгалтерского учета (отчет без официального аудиторского заключения)",
        },
      },
      {
        id: "22",
        question: "За какой период нужен аудит?",
        answers: {
          "1": "Год",
          "2": "Два года",
          "3": "Три года и более",
        },
      },
      {
        id: "23",
        question: "По каким стандартам составленная отчетность?",
        answers: {
          "1": "Российские стандарты бухгалтерского учёта",
          "2": "Международные стандарты финансовой отчетности",
        },
      },
      {
        id: "24",
        question: "План аудиторских проверок по периодам",
        answers: {
          "1": "Одна проверка по окончанию года (период проведения - до мая следующего года)",
          "2": "Одна проверка по окончанию года (период проведения - с мая до конца лета следующего года)",
          "3": "Две проверки (по полугодиям или 9 мес. + 4-й кв.)",
          "4": "Три проверки (полугодие + два квартала)",
          "5": "Поквартальные проверки",
        },
      },
    ],
  },
  {
    id: nanoid(),
    title: "FORM",
    questions: [],
  },
];

export const questionsForEmail: any = questionsTest
  .map((quest) => {
    return [
      ...quest.questions.map((quest2) => {
        return quest2.question;
      }),
    ];
  })
  .flat();
