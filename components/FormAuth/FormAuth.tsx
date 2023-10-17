'use client'


import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'
import React from 'react'

export default function FormAuth() {
    const router = useRouter()

    const submitHandler:React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const res = await signIn('credentials', {
            login: formData.get('login'),
            password: formData.get('password'),
            redirect: false
        })

        if (res && !res.error) {
            router.push('/admin')
        } else {
            console.log(res)
        }
    }

  return (
    <form onSubmit={submitHandler}>
        <input type="login" name='login' required/>
        <input type="password" name='password' required/>
        <button type='submit'>Войти</button>
    </form>
  )
}