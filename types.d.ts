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