"use client";

import React from "react";
import Image from "next/image";
import {BsEyeFill} from "react-icons/bs";
import DialogBaseModal from "../BaseModals/DialogBaseModal";
import { useModalFeedback } from "@/hooks/modalFeedback/useModalFeedback";
import useModalFeedbackActions from "@/hooks/modalFeedback/useModalFeedbackActions";

const dataForFeedback = [
  {
    title: "Е.В. Беляева",
    subTitle: "Микрокредитная компания Хакасии",
    jobTitle: "Главный бухгалтер",
    content: [
      { id: "1", text: "Республиканский фонд - Микрокредитная компания Хакасии выражает признательность аудиторам ООО «Аудиторская группа «Аземша и партнёры», которые проявили себя как специалисты высокого уровня, готовые вести профессиональный диалог, принимали участие в решении сложных вопросов в области бухгалтерского учета." },
      { id: "2", text: "Мы отмечаем профессионализм и обязательность специалистов, точное соблюдение сроков по догорным отношениям, а также полную конфиденциальность в отношении любой информации, полученной в ходе проверки нашей организации, а также наших клиентов." },
      { id: "3", text: "С полным основанием можем рекомендовать компанию ООО «Аудиторская группа «Аземша и партнёры» как квалифицированного партнера в области аудиторских услуг." },
    ],
    srcPdf: "/feedback/pdfs/Belyaeva.pdf",
    srcImg: "/feedback/imgs/Belyaeva.png"
  },
  {
    title: "А.В. Калинин",
    subTitle: "Гарантийный фонд Хакасии",
    jobTitle: "Директор",
    content: [
      { id: "1", text: "ООО Аудиторская группа «Аземша и партнёры» зарекомендовало себя как профессиональная аудиторская компания, сотрудники которой способны оперативно реагировать на все проблемы, возникающие у клиента." },
      { id: "2", text: "В проверке принимают участие квалифицированные аудиторы, которые предоставляют четко аргументированные ответы с учетом последних изменений в действующем законодательстве." },
      { id: "3", text: "Со своей стороны, мы намерены в дальнейшем сотрудничать с ООО «Аудиторская группа «Аземша и партнёры» и с уверенностью можем рекомендовать данную аудиторскую компанию другим организациям." },
    ],
    srcPdf: "/feedback/pdfs/Kalinin.pdf",
    srcImg: "/feedback/imgs/Kalinin.png"
  },
  {
    title: "С.И. Омельченко",
    subTitle:
      'АНО МКК "Центр микрокредитной поддержки предпринимательства Амурской области"',
    jobTitle: "Главный бухгалтер",
    content: [
      { id: "1", text: 'Автономная некоммерческая организация микрокредитная компания "Центр кредитной поддержки предпинимательства Амурской области" выражает благодарность аудторской компании ООО «Аудиторская группа «Аземша и партнёры» по итогам проведения обязательной адуиторской проверки бухгалтерской (финансовой) отчетности.' },
      { id: "2", text: 'В ходе проведения проверки нам представлялись квалифицированные консультации, относяшиеся к порядку ведения учета, составлению отчетнсоти и особенности налогообложения.' },
      { id: "3", text: "Все работы выполнялись в уставноленные сроки и с надлежащим качеством." },
      { id: "4", text: "АНО МКК «ЦКПП АО» высоко оценивает квалификацию и опыт сотрудников ООО «Аудиторская группа «Аземша и партнёры» и может рекомендовать как надежную и профессионально работающую компанию в сфере аудита." },
    ],
    srcPdf: "/feedback/pdfs/Omelchenko.pdf",
    srcImg: "/feedback/imgs/Omelchenko.png"
  },
];

export default function FeedbackModal() {
  const { isOpen, whatFeedback } = useModalFeedback();
  const { closeModal } = useModalFeedbackActions();
  const currentFeedback = dataForFeedback[Number(whatFeedback) - 1];

  return (
    <>
      {isOpen && (
        <DialogBaseModal
          title={`${currentFeedback.jobTitle} ${currentFeedback.title}`}
          onClose={closeModal}
        >
          <h4 className="text-black text-opacity-40">{currentFeedback.subTitle}</h4>
          <div className="flex mt-3 justify-between space-x-3">
            <div className="w-2/3 overflow-scroll h-[550px] sm:h-auto sm:overflow-auto">
              {currentFeedback.content.map((oneP) => (
                <p className="break-words mb-2" key={oneP.id}>{oneP.text}</p>
              ))}
            </div>
            <div className="w-1/3">
              <p className="font-thin mb-4 sm:mb-2">Скачать рекомендательное письмо:</p>
            <a download href={currentFeedback.srcPdf} className="h-min relative block border-2 border-black rounded-md">
                <div className="absolute z-10 w-full h-full bg-opacity-50 bg-sub-color flex items-center justify-center">
                  <BsEyeFill className='text-6xl text-white'/>
                </div>
              <Image className="rounded-md" src={currentFeedback.srcImg} alt="" width={300} height={300} />
            </a>
            </div>
          </div>
        </DialogBaseModal>
      )}
    </>
  );
}
