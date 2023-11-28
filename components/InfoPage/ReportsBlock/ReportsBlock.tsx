import React from 'react'

export default function ReportsBlock({reportData}:{reportData:IReport[]}) {
 
  return (
    <div>
        {Boolean(reportData) && reportData!.map((report) => (
            <Report key={report.year} year={report.year} srcToReport={report.srcToReport}/>
        ))}
    </div>
  )
}

function Report({
    year,
    srcToReport
}:Pick<IReport, 'srcToReport' | 'year'>) {
    return (
    //   <a style={{textShadow:'0 0 3px #374699, 0 0 5px #374699'}} href={link} className='block font-bold text-sub-accent-color '>
      <a target='_blank' href={srcToReport} className='block font-bold text-sub-accent-color '>
      Отчет о деятельности ООО «Аудиторская группа «Аземша и партнёры» за {year} год
      </a>
    )
  }