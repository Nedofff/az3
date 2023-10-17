




import React from 'react'

export default function AuthPage() {
  return (
    <main className='flex items-center justify-center'>
      <form>
        <label htmlFor="login">Логин</label>
        <input type="text" id='login'/>
        <label htmlFor="password">Пароль</label>
        <input type="text" id='password'/>
        <button>Войти</button>
      </form>
    </main>
  )
}
