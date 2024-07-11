import React from "react";

const toRussianNumberString = (number: number) => {
  return String(number).replace(".", ",");
};

export default function AuditeesAndRevenue({
  reportsData,
}: {
  reportsData: IReport[];
}) {
  return (
    <>
      <div className="space-y-5 mb-3">
        {reportsData &&
          reportsData.map((oneYear) => (
            <OneItemAuditees
              key={oneYear.id}
              year={oneYear.year}
              listOrganization={oneYear.listOrganization}
              moneySSO={oneYear.moneySSO}
              moneyAll={oneYear.moneyAll}
              moneyAudit={oneYear.moneyAudit}
              moneyOther={oneYear.moneyOther}
            />
          ))}
      </div>
    </>
  );
}

function OneItemAuditees({
  year,
  listOrganization,
  moneySSO: moneyOZO,
  moneyAll,
  moneyAudit,
  moneyOther,
}: Omit<IReport, "srcToReport" | "id">) {
  return (
    <div>
      <h3 className="font-bold">{year}</h3>
      <div className="space-y-2">
        <div>
          <p className="font-normal">
            Перечень общественно значимых организаций (далее – ОЗО), которым
            оказаны аудиторские услуги в {year} году:
          </p>
          {!Boolean(listOrganization?.length === 0) && (
            <p className="italic">услуги не оказывались</p>
          )}
          {Boolean(listOrganization?.length === 0) && (
            <ul className="list-inside list-disc italic">
              {listOrganization!.map((org) => (
                <li key={org}>{org}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className="font-normal">
            Величина выручки от оказания аудиторских услуг и прочих связанных с
            аудиторской деятельностью услуг:
          </p>
          <p className="italic">
            ОЗО за {year} год: {toRussianNumberString(moneyOZO)} тыс. руб.
          </p>
        </div>
        <div>
          <p className="font-normal">
            Величина выручки от оказания аудиторских услуг и прочих связанных с
            аудиторской деятельностью услуг за {year} год:
          </p>
          <p>
            Выручка всего:{" "}
            <span className="italic">
              {toRussianNumberString(moneyAll)} тыс. руб.
            </span>
          </p>
          <p>
            От оказания аудиторских услуг:{" "}
            <span className="italic">
              {" "}
              {toRussianNumberString(moneyAudit)} тыс. руб.
            </span>
          </p>
          <p>
            От оказания прочих связанных с аудиторской деятельностью услуг:{" "}
            <span className="italic">
              {toRussianNumberString(moneyOther)} тыс. руб.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
