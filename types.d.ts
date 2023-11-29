interface IOneNews {
  id: string;
  title: string;
  widthImg: number
  heightImg: number
  srcToImage: string;
}

interface IFeedback {
  id?: string;
  name: string;
  company: string;
  text: string;
}

interface IReport {
  id: string;
  year: number;
  srcToReport: string
  listOrganization?: string[];
  moneySSO: number;
  moneyAll: number;
  moneyAudit: number;
  moneyOther: number;
}


interface IFormInputAddReport {
  year: string;               // год
  listOrganization: string           // Перечень ОЗО
  moneySSO: string;       // Выручка от ОЗО
  moneyAll: string;      // Выручка всего
  moneyAudit: string;   // Выручка от аудита
  moneyOther: number;  // Выручка прочая
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
    hasSecondImg?: boolean,
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
