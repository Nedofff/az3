"use client";

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import styles from "./TeamSlider.module.css";

export default function TeamSlider({ teamData }: { teamData: Omit<IPerson, 'fullName'>[] }) {
  const [activeId, setActiveId] = useState(1);
  const lenghtData = teamData.length

  const next = () => {
    setActiveId(state => {
      if (state < lenghtData) {
        return state + 1
      }
      return state
    })
  }

  const prev = () => {
    setActiveId(state => {
      if (state > 1) {
        return state - 1
      }
      return state
    })
  }

  return (
    <>
    <div className='hidden sm:w-screen sm:flex sm:flex-col mt-10'>
      <div className="self-center flex justify-end w-[90vw] mb-5">
        <div className="space-x-5 flex">
        <button className={`text-3xl text-main-color rounded-full py-3 pl-2 pr-3 flex items-center justify-center bg-accent-color  ${activeId===1 ? 'bg-opacity-50' : 'hover:bg-sub-accent-color'}`}
        disabled={activeId===1}
        onClick={prev}
        >
          <IoIosArrowBack />
        </button>
        <button className={`text-3xl text-main-color rounded-full py-3 pl-3 pr-2 flex items-center justify-center bg-accent-color  ${activeId===teamData.length ? ' bg-opacity-50' : 'hover:bg-sub-accent-color'}`}
        disabled={activeId===teamData.length}
        onClick={next}
        
        >
          <IoIosArrowForward />
        </button>
        </div>
      </div>
      <div className="flex w-[90vw] gap-2 duration-200 self-center">
        {teamData.map((person) => {
          return (
            <button
              className={`${styles.slide} ${
                activeId === person.id ? styles.active : ''
              }`} 
              disabled={activeId === person.id}
              onClick={() => setActiveId(person.id)}
              key={person.id}
            >
              <Link href={`/team/${person.id}`} className={styles.content}>
                <div>{person.name}</div>
                <div className="text-sm">Подробнее</div>
              </Link>
              <Image
                className=''
                src={`/teamPage/team${person.id}.jpg`}
                alt={person.name}
                width={person.width}
                height={person.height}
              />
            </button>
          );
        })}
      </div>
    </div>
    <Carousel className="sm:hidden pb-10" 
    swipeable showIndicators={false} showStatus={false}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
        <button type="button" title={label} className={`text-3xl absolute top-[40%] ml-4 z-30 text-main-color rounded-full py-3 pl-2 pr-3 flex items-center justify-center bg-accent-color  ${!hasPrev ? 'bg-opacity-50' : 'hover:bg-sub-accent-color'}`}
        disabled={!hasPrev}
        onClick={onClickHandler}
        >
          <IoIosArrowBack />
        </button>
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
        <button type="button" title={label} className={`text-3xl absolute top-[40%] right-0 mr-4 z-10 text-main-color rounded-full py-3 pl-3 pr-2 flex items-center justify-center bg-accent-color  ${!hasNext ? ' bg-opacity-50' : 'hover:bg-sub-accent-color'}`}
        disabled={!hasNext}
        onClick={onClickHandler}
        
        >
          <IoIosArrowForward />
        </button>
  }
    >
    {teamData.map((person) => {
          return (
            <button
              className={`w-2/3 ${styles.slide} ${styles.active
              }`}
              onClick={() => setActiveId(person.id)}
              key={person.id}
            >
              <Link href={`/team/${person.id}`} className={styles.content}>
                <div>{person.name}</div>
                <div className="text-sm">Подробнее</div>
              </Link>
              <Image
                className=''
                src={`/teamPage/team${person.id}.jpg`}
                alt={person.name}
                width={person.width}
                height={person.height}
              />
            </button>
          );
        })}
    </Carousel>
    </>
  );
}
