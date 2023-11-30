'use client'
import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"

export default function SearchBar({ setSearchQuery }: { setSearchQuery: (searchQuery:string) => void }) {
  const [valueInput, setValueInput] = useState('')
  const [wasSearch, setWasSearch] = useState(false)

  const onSubmitForm:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setSearchQuery(valueInput)
    setWasSearch(true)
  }
  const onResetForm = () => {
    setWasSearch(false)
    setValueInput('')
    setSearchQuery('')
  }

  return (
    <form
      className="relative mt-1 mb-20 z-10 sm:mb-5 w-5/6 shadow-md shadow-black rounded-xl"
      action=""
      onSubmit={onSubmitForm}
    >
      <input onChange={(e) => setValueInput(e.target.value)} value={valueInput} className="w-full rounded-lg p-2 sm:px-4 border-2 outline-none" />
      <div className="absolute right-0 h-full top-full px-2 text-white mt-4 bg-sub-color rounded-lg sm:mt-0 sm:rounded-l-none sm:rounded-r-lg sm:top-0">
        {wasSearch && <button onClick={onResetForm} type="reset" className="mr-5 h-full text-white relative top-[-20%]">Сбросить результаты</button>}
        <button type="submit" className="h-full text-white duration-300 text-3xl "><HiOutlineMagnifyingGlass /></button>
      </div>
    </form>
    
  );
}
