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
  themeIndex: number;
  nextSlide: (themeIndex: number) => void;
  prevSlide: () => void;
  reset: () => void;
}) {
  if (theme.title === "FORM") {
    return <EndTest reset={reset} prevSlide={prevSlide} />;
  }

  const buttonStyle =
    "bg-black text-sm bg-opacity-60 p-2 sm:py-3 sm:px-5 rounded-xl text-white duration-300 active:scale-95";

  return (
    <div className="flex flex-col items-center h-full overflow-hidden">
      <div className="w-2/3 flex flex-col items-start" key={theme.id}>
        <h4 className="text-xl">{theme.title}</h4>
        <div className="min-h-[350px] h-[70vh] max-h-[700px] py-10 w-full flex flex-col content-start overflow-y-auto">
          {theme.questions.map((question: any) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
      <div className="mt-5 sm:w-2/3 flex justify-between">
        {theme.id !== "1" && (
          <button
            className={`${buttonStyle} hover:bg-sub-color`}
            onClick={prevSlide}
          >
            Назад
          </button>
        )}
        <button
          className={`${buttonStyle} hover:bg-red-600 mx-1`}
          onClick={reset}
        >
          Закрыть
        </button>
        <button
          onClick={() => nextSlide(themeIndex)}
          className={`${buttonStyle} hover:bg-sub-color`}
        >
          Дальше
        </button>
      </div>
    </div>
  );
}
