'use client'
import React, { useState } from 'react'


export default function ContactForm({className}:{className?:string}) {
    const [nameValue, setNameValue] = useState('')
    const [surnameValue, setSurnameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [commentValue, setCommentValue] = useState('')

    const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        fetch("/api/test", {
            body: JSON.stringify({
                nameValue,
                surnameValue,
                phoneValue,
                emailValue,
                commentValue
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });

          e.currentTarget.reset()
          setNameValue('')
          setSurnameValue('')
          setPhoneValue('')
          setEmailValue('')
          setCommentValue('')
    }

  return (
    <form className={className} onSubmit={submitHandler}>
            <input required value={nameValue} onChange={(e) => setNameValue(e.target.value)} id="name" name="name" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="Имя" />
            <input required value={surnameValue} onChange={(e) => setSurnameValue(e.target.value)} id='surname' name="surname" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="Фамилия" />
            <input required value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} id='phone' name="phone" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="Телефон" />
            <input required value={emailValue} onChange={(e) => setEmailValue(e.target.value)} id='email' name="email" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="E-mail" />
            <input value={commentValue} onChange={(e) => setCommentValue(e.target.value)} id='comment' name="comment" className="bg-transparent border-b-[3px] mb-5 mx-10 lg:mx-2 px-2 py-5 outline-none focus:border-accent-color" type="text" placeholder="Комментарий" />
            <label className= "flex items-start mx-10 lg:mx-0">
            <input required type="checkbox"  className="mt-0.5 mr-1" />
            <p className="inline text-[11px] opacity-70">
              Нажимая кнопку «Отправить», я даю свое согласие на обработку моих
              персональных данных, в соответствии с Федеральным законом от
              27.07.2006 года №152-ФЗ «О персональных данных».
            </p>
          </label>
          <button type='submit' className="bg-[#34BCF2] mt-10 duration-200 rounded-sm hover:bg-opacity-80 py-2 mx-10 sm:mx-0 sm:py-5">Отправить</button>
        </form>
  )
}
