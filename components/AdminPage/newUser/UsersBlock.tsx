'use client'

import React, { useEffect, useState } from 'react'
import { HiArrowPath } from "react-icons/hi2";
import OneUser from './OneUser'

export default function UsersBlock() {
    const [users, setUsers] = useState<{id:string, login:string}[]>()
    const getUsers = async () => {
        const response = await fetch('/api/admin/users')
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
        
    }, [])

    const deleteUser = async (id: string) => {
        await fetch(`../api/admin/users/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          getUsers()
    }

  return (
    <div className=" bg-accent-color py-5 pb-0 sm:pt-10 pr-5 sm:pr-10  rounded-e-lg">
      <div className='flex items-center'>
          <h2 className="text-white text-xl font-bold">Удалить пользователя</h2>
          <button onClick={getUsers} className='bg-main-color ml-4 px-2 py-2 text-2xl text-black rounded-md hover:bg-opacity-50 duration-200'>
          <HiArrowPath />
          </button>
          </div>
    <div className='space-y-2 bg-accent-color p-5 h-[300px] overflow-auto'>
        {users?.map((user) => (
            <OneUser deleteUser={deleteUser} key={user.id} id={user.id} login={user.login}/>
        ))}
    </div>
    </div>
  )
}
