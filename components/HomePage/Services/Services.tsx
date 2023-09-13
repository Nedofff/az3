import React from "react";
import AService from "./AService/AService";

export default function Services() {
  const services = [];
//   inline break-words hyphens-auto
  return (
    <section id="Services" className="separator">
      <h2 className="heading">Услуги</h2>
      <div className="flex flex-col items-center px-3 mt-12">
        <AService title="Аудит">
          <ul className="pl-5 list-disc marker:text-lg break-words hyphens-auto">
            <li className="">Отчетности по Российским стандартам бухгалтерского учета</li>
            <li>
              Отчетности по Международным стандартам финансовой отчетности
            </li>
          </ul>
        </AService>
        <AService title="Налоговый консалтинг">
          <ul className="pl-5 break-words hyphens-auto list-disc">
            <li>Определение налоговых рисков компании</li>
            <li>
              Помощь в выстраивании конструктивного диалога с налоговыми
              органами
            </li>
          </ul>
        </AService>
        <AService title='Управленческий консалтинг'>
          <ul className="pl-5 list-disc break-words hyphens-auto">
            <li>Выстраивание модели учета групп компаний</li>
            <li>Проверка финансовых показателей компаний</li>
            <li>Выстраивание управленческого учета в 1С</li>
            <li>Оптимизация финансовых потоков</li>
          </ul>
        </AService>
        <AService title="Транформация отчетности под МСФО">
          <p className="break-words hyphens-auto">
            Это процедура формирования отчетности в соответствии с
            Международными стандартами финансовой отчетности, на основе данных
            отчетности, составленной по национальным стандартам.
          </p>
          <p className="break-words hyphens-auto my-5">
            Производится посредством изменения параметров классификации и оценки
            объектов учета и раскрытия информации о них с целью приведения к
            международным стандартам.
          </p>
          <p className="break-words hyphens-auto">
            Трансформация необходима, например, перед консолидацией отчетности
            отдельных компаний группы в единую отчетность по МСФО.
          </p>
        </AService>
      </div>
    </section>
  );
}
