



// TODO: Сделать админку

import React from 'react'

export default function AdminPage() {
  return (
    <main>
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
