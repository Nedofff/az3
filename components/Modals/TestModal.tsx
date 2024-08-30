"use client";

import React, { useState, useRef } from "react";
import DialogBaseModal from "../BaseModals/DialogBaseModal";
import { useModalTest } from "@/hooks/modalTest/useModalTest";
import useModalTestActions from "@/hooks/modalTest/useModalTestActions";
import { Carousel } from "react-responsive-carousel";
import { questionsTest } from "./TestModal.data";
import FormTest from "./FormTest/FormTest";
import checkIsCanGo from "@/service/chekIsCanGo";

export default function TestModal() {
  const { isOpen, countAnswers, answers } = useModalTest();
  const { closeModal, resetAnswer } = useModalTestActions();
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const nextSlide = (themeIndex: number) => {
    if (selectedItem < 5 && checkIsCanGo(countAnswers, themeIndex)) {
      setSelectedItem((state) => state + 1);
    } else {
      alert("Ответьте на все вопросы.");
    }
  };

  const prevSlide = () => {
    setSelectedItem((state) => state - 1);
  };

  const onCloseModal = () => {
    document.documentElement.style.overflowY = "scroll";
    setSelectedItem(0);
    resetAnswer();
    closeModal();
  };

  return (
    <>
      {isOpen && (
        <DialogBaseModal onClose={onCloseModal} title={"Расчет стоимости"}>
          <div className="w-full flex justify-center mb-3">
            <div className="h-4 w-2/3 relative rounded-2xl border-2 overflow-hidden">
              <div
                className="h-full duration-300 bg-accent-color absolute"
                style={{ width: `${(selectedItem / 5) * 100}%` }}
              />
              <div className="h-full absolute border-r-2 border-accent-color w-[20%]"></div>
              <div className="h-full absolute border-r-2 border-accent-color w-[40%]"></div>
              <div className="h-full absolute border-r-2 border-accent-color w-[60%]"></div>
              <div className="h-full absolute border-r-2 border-accent-color w-[80%]"></div>
            </div>
          </div>
          <Carousel
            className="h-min"
            useKeyboardArrows
            swipeable={false}
            // dynamicHeight
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            selectedItem={selectedItem}
          >
            {questionsTest.map((theme, themeIndex) => (
              <FormTest
                themeIndex={themeIndex}
                theme={theme}
                key={theme.id}
                nextSlide={nextSlide}
                reset={onCloseModal}
                prevSlide={prevSlide}
              />
            ))}
          </Carousel>
        </DialogBaseModal>
      )}
    </>
  );
}
