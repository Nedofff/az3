interface IOneNews {
  id: string;
  title: string;
  widthImg?: number | null;
  heightImg?: number | null;
  srcToImage?: string | null;
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
  srcToReport: string;
  listOrganization?: string[];
  moneySSO: number;
  moneyAll: number;
  moneyAudit: number;
  moneyOther: number;
}

interface IFormInputAddReport {
  /** год */
  year: string;
  /** Перечень ОЗО */
  listOrganization: string;
  /** Выручка от ОЗО */
  moneySSO: string;
  /** Выручка всего */
  moneyAll: string;
  /** Выручка от аудита */
  moneyAudit: string;
  /** Выручка прочая */
  moneyOther: string;
  /** файл Отчета */
  reportFile: File;
}

interface IImage {
  key: number;
  name: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface IPerson {
  id: number;
  name: string;
  fullName: string;
  hasSecondImg?: boolean;
  width: number;
  height: number;
  // text: (string | string[])[]
  text: [string, string, string, string[]];
  certificates?: IImage[];
}
