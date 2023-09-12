'use client'

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Recall from "./Recall/Recall";


export default function Feedback() {
  const feedbacks: IFeedback[] = [
    {
      id: "1",
      name: "Е.В. Беляева",
      company: "Микрокредитная компания Хакасии",
      text: 'Микрокредитная компания Хакасии выражает признательность аудиторам ООО "Аудиторская группа "Аземша и парнеры", которые проявили себя как специалисты высокого уровня',
    },
    {
      id: "2",
      name: "А.В. Калинин",
      company: "Гарантийный фонд Хакасии",
      text: 'ООО "Аудиторская группа "Аземша и парнеры" зарекомендовало себя как профессиональная аудиторская компания, сотрудники которой способны оперативно реагировать на все проблемы, возникающие у клиента',
    },
    {
      id: "3",
      name: "С.И. Омельченко",
      company:
        'АНО МКК "Центр микрокредитной поддержки предпринимательства Амурской области"',
      text: "В ходе проведения проверки нам предоставлялись квалифицированные консультации, относящиеся к порядку ведения учета, составлению отчетности и особенностей налогообложения",
    },
  ];
  const indicatorStyles: any = {
    background: '#A9ADB9',
    width: 12,
    height: 12,
    display: 'inline-block',
    margin: '0 14px',
    borderRadius: '9999px',
    position:'relative',
    bottom: '-2%'
};
  return (
    <section className="separator">
      <h2 className="heading">Отзывы клиентов</h2>
      <div className="items-between hidden md:flex mt-10">
      {feedbacks.map((AFeedback) => (
          <Recall key={AFeedback.id} {...AFeedback} />
        ))}
      </div>

        <Carousel className="block md:hidden" useKeyboardArrows infiniteLoop dynamicHeight showThumbs={false} showArrows showStatus={false} renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                        style={{ ...indicatorStyles, background: '#374699' }}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}>
        {feedbacks.map((AFeedback) => (
          <Recall key={AFeedback.id} {...AFeedback} />
        ))}
        </Carousel>
    </section>
  );
}

