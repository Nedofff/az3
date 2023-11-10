'use client'

import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function YandexMap() {
  return (
    <div className='z-10 relative w-screen'>
    <YMaps query={{ lang: 'ru_RU', apikey:'ee706403-0ecd-48e8-bf2b-bec6eda8052b' }}>
      <Map className='w-full h-80' defaultState={{ center: [56.012109876100936, 92.8903306128995], zoom: 16 }} >
      <Placemark geometry={[56.012109876100936, 92.8903306128995]} />
      </Map>
  </YMaps>
  </div>
  )
}
