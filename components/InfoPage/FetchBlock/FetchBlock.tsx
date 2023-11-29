'use client'

import React, { useEffect, useState } from 'react'
import InfoSection from '../InfoSection'
import WrapperForText from '@/components/WrapperForText/WrapperForText'
import AuditeesAndRevenue from '../AuditeesAndRevenue/AuditeesAndRevenue'
import ReportsBlock from '../ReportsBlock/ReportsBlock'

export default function FetchBlockInfo() {
  const [reports, setReports] = useState<IReport[]>()

  const getReports = async () => {
    const response = await fetch('/api/info/reports', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const reports = await response.json() as IReport[];
    setReports(reports) 
  }
  useEffect(() => {
    getReports()
  }, [])
  

  return (
    <>{!!reports && 
      <>
    <InfoSection label="7. Информация об аудируемых лицах и величине выручки от оказанных аудиторской организацией услуг">
          <WrapperForText>
            <AuditeesAndRevenue reportsData={reports}/>
          </WrapperForText>
        </InfoSection>
        <InfoSection label="8. Отчёты о деятельности ООО «Аудиторская группа «Аземша и партнёры»">
          <WrapperForText>
            <ReportsBlock reportData={reports}/>
          </WrapperForText>
        </InfoSection>
        </>}
    </>
  )
}
