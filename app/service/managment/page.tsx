




import React from 'react'

export default function ManagmentPage() {
  return (
    <main className='pt-32 pb-20 md:flex md:justify-center md:flex-col md:items-center'>
      <h1 className="text-4xl text-sub-color mb-8 font-bold break-words">Управленческий консалтинг</h1>
      <div className='space-y-4 px-2 sm:space-y-0 md:w-2/3 sm:grid sm:grid-rows-2 sm:justify-center sm:grid-cols-2 gap-10'>
        <div>
          <h2 className='text-lg text-sub-color font-semibold'>Выстраивание модели учёта групп компаний</h2>
          <p>Для получения общей финансовой картины</p>
        </div>
        <div>
          <h2 className='text-lg text-sub-color font-semibold'>Проверка финансовых показателей компаний</h2>
          <p>Подтверждение финансовых показателей управленческого учета</p>
        </div>
        <div>
          <h2 className='text-lg text-sub-color font-semibold'>Выстраивание управленческого учета в 1с</h2>
          <p>Разработка системы субконто под конкретные задачи Вашей компании</p>
        </div>
        <div>
          <h2 className='text-lg text-sub-color font-semibold'>Оптимизация финансовых потоков</h2>
          <p>Построение бюджета компании с учетом плановых налоговых и прочих платежей</p>
        </div>
      </div>
    </main>
  )
}
