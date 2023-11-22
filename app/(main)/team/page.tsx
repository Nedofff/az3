import React from "react";
import TeamSlider from "@/components/TeamPage/TeamSlider/TeamSlider";
import { teamData } from "./teamPerson.data";
import styles from "./page.module.css";

export default function TeamPage() {
  return (
    <main className="separator pb-14 bg-main-color">
      <h1 className="heading">Наша команда</h1>
      <TeamSlider teamData={teamData} />
      <div className="w-[90vw] mx-auto mt-12">
        <h2 className="font-bold text-xl mb-5">
          Также нашими сотрудниками являются:
        </h2>
        <div className={`${styles.grid}`}>
          <h3 className="font-bold">Валентина Алексеевна Силина</h3>
          <h3 className="font-bold">Ирина Андреева</h3>
          <div>
            <p lang="ru">
              Аудитор, знающий все тонкости бухгалтерского учета, с опытом
              аудиторской деятельности более 20 лет. Аудитор учитывающий самые
              мелкие нюансы и особенности вашего бизнеса.
            </p>
            <p>Аудитор - имеет аттестат в области общего аудита №040015; </p>
          </div>
          <div>
            <p>
              Аудитор, справляющийся с любыми самыми сложными задачами, в том
              числе в области консолидации либо трансформации отчетности по
              МСФО. Имеет огромный опыт работы с компаниями имеющими выручку от
              1 млрд. руб. и более.
            </p>
            <p>Аудитор - имеет аттестат в области общего аудита №К029612;</p>
            <p>
              С 2016 года квалификационный аттестат аудитора нового образца
              «единый» № 01-000569;
            </p>
            <p>Диплом АССА по Международной Финансовой Отчетности.</p>
          </div>
          <div className={`${styles["grid-item"]} mt-10 font-bold`}>
            И 5 аудиторов по совместительству.
          </div>
        </div>
      </div>
    </main>
  );
}
