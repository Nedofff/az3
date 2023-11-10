'use client'
import React, { useEffect, useState } from "react";



export default function AuditeesAndRevenue() {
    const [yearsData, setYearsData] = useState<IAuditeesAndRevenue[]>()

    useEffect(() => {
        const getYearsData = async ()  => {
        const response = await fetch('/api/info/aditees')
        const data = await response.json()
        setYearsData(data)
        }
        getYearsData()
    }, [])

  return (
    <>
    <div className="space-y-5 mb-3">
        {yearsData && yearsData.map((oneYear) => (
            <OneItemAuditees key={oneYear.year} year={oneYear.year} listOrganization={oneYear.listOrganization} moneyOZO={oneYear.moneyOZO} moneyAll={oneYear.moneyAll} moneyAudit={oneYear.moneyAudit} moneyOther={oneYear.moneyOther}/>
        ))}
        </div>
    </>
  );
}

function OneItemAuditees({
  year,
  listOrganization,
  moneyOZO,
  moneyAll,
  moneyAudit,
  moneyOther,
}: IAuditeesAndRevenue) {
  return (
    <div>
      <h3 className="font-bold">{year}</h3>
      <div className="space-y-2">
      <div>
      <p className="font-normal">
        Перечень общественно значимых организаций (далее – ОЗО), которым оказаны
        аудиторские услуги в {year} году:
      </p>
      {!Boolean(listOrganization) && (
        <p className="italic">услуги не оказывались</p>
      )}
      {Boolean(listOrganization) && (
        <ul className="list-inside list-disc italic">
          {listOrganization!.map((org) => (
            <li key={org.id}>{org.name}</li>
          ))}
        </ul>
      )}
      </div>
      <div>
      <p className="font-normal">
        Величина выручки от оказания аудиторских услуг и прочих связанных с
        аудиторской деятельностью услуг:
      </p>
      <p className="italic">ОЗО за {year} год: {moneyOZO} тыс. руб.</p>
      </div>
      <div>
      <p className="font-normal">
        Величина выручки от оказания аудиторских услуг и прочих связанных с
        аудиторской деятельностью услуг за {year} год:
      </p>
      <p>
        Выручка всего: <span className="italic">{moneyAll} тыс. руб.</span>
      </p>
      <p>
        От оказания аудиторских услуг:{" "}
        <span className="italic"> {moneyAudit} тыс. руб.</span>
      </p>
      <p>
        От оказания прочих связанных с аудиторской деятельностью услуг:{" "}
        <span className="italic">{moneyOther} тыс. руб.</span>
      </p>
      </div>
      </div>
    </div>
  );
}
