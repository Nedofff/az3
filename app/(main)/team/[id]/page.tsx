import React, { useEffect } from "react";
import { teamData } from "../teamPerson.data";
import { redirect } from "next/navigation";
import Image from "next/image";
import ScalingImages from "@/components/InfoPage/ScalingImages";
import Link from "next/link";

export default function page({ params: { id } }: { params: { id: number } }) {
  const person: IPerson | undefined = teamData.find((item) => item.id == id);
  if (!person) {
    redirect("/404");
  }
  return (
    <main className={`px-1 sm:px-14 flex justify-center relative pb-10`}>
      <div className="sticky w-1/2 pt-24 top-0 h-min mr-1 sm:mx-2 sm:ml-14">
      <div className="relative">
        <Image
          className="rounded-lg shadow-xl w-full max-w-[300px]"
          src={`/teamPage/team${id}.jpg`}
          alt={person.name}
          width={3200}
          height={3200}
        />
        <p className="absolute bg-white bg-opacity-80 p-1 rounded-lg text-opacity-60 bottom-0 text-sm sm:text-base leading-none sm:leading-normal mb-1 ml-1">
          {person.fullName}
        </p>
      </div>
        <Link className="block mt-4 bg-accent-color text-white px-5 py-2 rounded-md hover:bg-opacity-50 duration-200 text-center" href={'/team'}>Назад</Link>
      </div>
      <div className="w-5/6 sm:px-5 mt-24">
        <div>
          <h1 className="text-xl mb-2">{person.fullName}</h1>
          <div className="space-y-7">
            <p className="italic">{person.text[0]}</p>
            <p>{person.text[1]}</p>
            <p>{person.text[2]}</p>
            <div className="space-y-1 text-xs font-thin">
              {person.text[3].map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>
        </div>
        {Boolean(person.id <= 6) &&
        <div className="flex flex-wrap mt-5 sm:mt-12">
          <ScalingImages className="w-1/2" imagesData={person.certificates!}/>
        </div>}
      </div>
    </main>
  );
}
