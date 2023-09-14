'use client'

import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function YandexMap() {
  return (
    <YMaps query={{ lang: 'ru_RU', apikey:'254603c8-4a91-49d1-b86d-604acd276688' }}>
      <Map className='w-full h-80' defaultState={{ center: [56.012086852244444, 92.89065258388192], zoom: 16 }} >
      <Placemark geometry={[56.012086852244444, 92.89065258388192]} />
      </Map>
  </YMaps>
  )
}
