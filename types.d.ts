interface IOneNews {
  id: string;
  title: string;
  width: number
  height: number
  src: string;
}

interface IFeedback {
  id?: string;
  name: string;
  company: string;
  text: string;
}

interface IAuditeesAndRevenue {
  year: string;
  listOrganization?: {
    id: string,
    name: string
  }[];
  moneyOZO: string;
  moneyAll: string;
  moneyAudit: string;
  moneyOther: string;
}

interface IReport{
  year: string
  link: string
}

interface IFormInputAddReport {
  year: string;               // год
  listSSO: string;           // Перечень ОЗО
  revenueSSO: string;       // Выручка от ОЗО
  revenueAll: string;      // Выручка всего
  revenueAudit: string;   // Выручка от аудита
  revenueOther: number;  // Выручка прочая
  reportFile: File      // файл Отчета
}

interface IImage {
    key: number,
    name: string,
    src: string,
    width: number,
    height: number,
    alt: string,
}

interface IPerson {
    id: number,
    name: string,
    fullName: string,
    width: number,
    height: number,
    // text: (string | string[])[]
    text: [
      string,
      string,
      string,
      string[]
    ],
    certificates?: IImage[]
}