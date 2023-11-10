'use client'


import React, { useEffect, useState } from 'react'

export default function ReportsBlock() {
    const [reportData, setReportData] = useState<IReport[]>()

    useEffect(() => {
        const getReportData = async ()  => {
        const response = await fetch('/api/info/reports')
        const data = await response.json()
        setReportData(data)
        }
        getReportData()
    }, [])

  return (
    <div>
        {Boolean(reportData) && reportData!.map((report) => (
            <Report key={report.year} year={report.year} link={report.link}/>
        ))}
    </div>
  )
}

function Report({
    year,
    link
}:IReport) {
    return (
    //   <a style={{textShadow:'0 0 3px #374699, 0 0 5px #374699'}} href={link} className='block font-bold text-sub-accent-color '>
      <a target='_blank' href={link} className='block font-bold text-sub-accent-color '>
      Отчет о деятельности ООО «Аудиторская группа «Аземша и партнёры» за {year} год
      </a>
    )
  }