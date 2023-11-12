'use client'

import React, { useEffect, useState } from 'react'
import OneUser from './OneUser'

export default function UsersBlock() {
    const [users, setUsers] = useState<{id:string, login:string}[]>()
    const getUsers = async () => {
        const response = await fetch('/api/admin/users/list')
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
        
    }, [])

    const deleteUser = (id: string) => {
        fetch("../api/admin/users/delete", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: id,
          });
          getUsers()
    }

  return (
    <div className='space-y-2 bg-accent-color p-5 h-[300px] overflow-auto'>
        {users?.map((user) => (
            <OneUser deleteUser={deleteUser} key={user.id} id={user.id} login={user.login}/>
        ))}
    </div>
  )
}
