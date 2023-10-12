'use client'



import { useModalTest } from '@/hooks/modalTest/useModalTest'
import React, { useState } from 'react'

export default function EndTest({reset, prevSlide}:{reset:()=>void, prevSlide:()=>void}) {
  const [nameValue, setNameValue] = useState('')
  const [INNValue, setINNValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const {answers} = useModalTest()



  const fetchData:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    
    fetch('/api/test', {
      body: JSON.stringify({
        name: nameValue,
        INN: INNValue,
        email: emailValue,
        answers: answers
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })    
  }

  return (
    <form className='flex flex-col items-center' onSubmit={fetchData}>
        <label htmlFor="name">Имя</label>
        <input className='w-2/3 rounded-sm border-2 p-2 outline-none duration-150 focus:border-accent-color' onChange={(e) => setNameValue(e.currentTarget.value)} value={nameValue} type="text" id='name' required/>
        <br />
        <label htmlFor="INN">ИНН компании</label>
        <input className='w-2/3 rounded-sm border-2 p-2 outline-none duration-150 focus:border-accent-color' onChange={(e) => setINNValue(e.currentTarget.value)} value={INNValue} type="text" id='INN' required/>
        <br />
        <label htmlFor="Email">Электронная почта</label>
        <input className='w-2/3 rounded-sm border-2 p-2 outline-none duration-150 focus:border-accent-color' onChange={(e) => setEmailValue(e.currentTarget.value)} value={emailValue} type="text" id='email' required/>
        <br />
        <div className='mb-5'>
          <input type="checkbox" name="" id="check" required/>
          <label htmlFor="check">Я даю согласие на обработку своих персональных данных</label>
        </div>
        <div className='mb-5 w-2/3 flex justify-between'>
          <button className='bg-black bg-opacity-60 py-3 px-5 rounded-xl text-white duration-300 hover:bg-sub-color' onClick={prevSlide}>Назад</button>
          <button className='bg-black bg-opacity-60 py-3 px-5 rounded-xl text-white duration-300 hover:bg-red-600' onClick={reset}>Закрыть</button>
          <button className='bg-black bg-opacity-60 py-3 px-5 rounded-xl text-white duration-300 hover:bg-green-600' type='submit'>Отправить</button>
        </div>
    </form>
  )
}
