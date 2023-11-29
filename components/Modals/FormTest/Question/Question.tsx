'use client'

import useModalTestActions from "@/hooks/modalTest/useModalTestActions";
import React, {useId, useState, useEffect} from "react";
import Select from "../Select/Select";

export default function Question({ question }: { question: any }) {
    const id = useId()
    const {selectAnswer} = useModalTestActions()
    const answers = question.answers

    useEffect(() => {
      if (answers === 'SELECT') {
        selectAnswer({
          id: question.id,
          value: 'Красноярский край'
      })
      }
    }, [answers, question.id, selectAnswer])
    
    const clickHandler = (answer:string|null) => {
      console.log('message')
        selectAnswer({
            id: question.id,
            value: answer
        })
    }

    
  return (
    <>
      <h5 className="font-medium text-start mb-2">{question.question}</h5>
      <div className="flex flex-col mb-6">
      {answers === 'SELECT' ? <Select clickHandler={clickHandler}/> : Object.keys(question.answers).map((keyAnswer: any) => (
          <Answer key={keyAnswer} topId={id} answer={answers[keyAnswer]} clickHandler={clickHandler}/>
      ))}
      </div>
    </>
  );
}

function Answer({answer, topId, clickHandler}:{answer:string, topId:string, clickHandler: (answer:string|null)=>void}) {
    const id = useId()

    return (
        <label onClick={(e) => clickHandler(e.currentTarget.textContent)} className="inline-flex text-start items-baseline" htmlFor={id}>
            <input className="mr-2" type="radio" name={topId} id={id} />
            <p>{answer}</p>
          </label>
    )
}