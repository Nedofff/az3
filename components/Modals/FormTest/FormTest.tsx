import React from "react";
import Question from "./Question/Question";
import EndTest from "./EndTest/EndTest";

export default function FormTest({
  theme,
  themeIndex,
  nextSlide,
  prevSlide,
  reset,
}: {
  theme: any;
  themeIndex: number
  nextSlide: (themeIndex: number) => void;
  prevSlide: () => void;
  reset: () => void;
}) {
  if (theme.title === "FORM") {
    return <EndTest reset={reset} prevSlide={prevSlide}/>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-2/3 flex flex-col items-start" key={theme.id}>
          <h4 className="text-xl">{theme.title}</h4>
        <div className="h-[500px] py-10 w-full flex flex-col content-start overflow-y-auto">
          {theme.questions.map((question: any) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
      <div className="mt-5 w-2/3 flex justify-between">
        {theme.id !== '1' && <button className="bg-black bg-opacity-60 py-3 px-5 rounded-xl text-white duration-300 hover:bg-sub-color" onClick={prevSlide}>
          Назад
        </button>}
        <button className="bg-black bg-opacity-60 py-3 px-5 rounded-xl text-white duration-300 hover:bg-red-600" onClick={reset}>
          Закрыть
        </button>
        <button onClick={() => nextSlide(themeIndex)} className="bg-black bg-opacity-60 py-3 px-5 rounded-xl text-white duration-300 hover:bg-sub-color">
          Дальше
        </button>
      </div>
    </div>
  );
}
