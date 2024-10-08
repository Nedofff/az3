import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Трансформация отчетности под МСФО",
  description:
    "Трансформация отчетности под МСФО: услуги по приведению финансовой отчетности в соответствие с международными стандартами. Узнайте, как перейти на МСФО и повысить прозрачность бизнеса.",
};

export default function TransformPage() {
  return (
    <main className="pt-28 pb-20 px-2 sm:flex sm:justify-center">
      <div className="sm:w-2/3">
        <h1 className="text-4xl text-sub-color mb-8 font-bold break-words">
          Трансформация отчетности под МСФО
        </h1>
        <p>
          В настоящее время идет стремительное сближение федеральных стандартов
          бухгалтерского учета (ФСБУ) с международными стандартами финансовой
          отчетности (МСФО), но несмотря на это различия в системах все же
          существуют. Для формирования отчетности по МСФО требуется
          трансформация отчетности составленной в соответствии с ФСБУ.
        </p>
        <br />
        <p>
          Наши специалисты на протяжении многих лет успешно оказывают услугу по
          трансформации бухгалтерской (финансовой) отчетности - процессом
          составления отчетности в соответствии с МСФО путем в последовательной
          корректировки показателей отчетности составленной в соответствии с
          национальными стандартами учета
        </p>
        <br />
        <h2 className="text-md text-sub-color font-semibold mb-1">
          Кому необходима отчетность по МСФО:
        </h2>
        <ul className="space-y-2">
          <li>
            В случае если Ваша организация попадает под требования пп.1.ст.2
            Федерального закона от 27 июля 2010 г. N 208-ФЗ {'"'}О
            консолидированной финансовой отчетности{'"'}
          </li>
          <li>
            Отчетность по МСФО нужна для иных управленческих нужд, например,{" "}
            {'"'}
            материнская{'"'} компания является иностранной; привлечения
            зарубежных займов и кредитов; прочих целей.
          </li>
        </ul>
        <br />
        <p>
          Также основываясь на принципах МСФО, для принятия решений по Группе
          компаний, находящихся под единым контролем общих собственников. Мы
          оказываем услугу по комбинированию финансовой отчетности, которая
          подготовлена с целью принятия управленческих решений Группы, а также
          предоставления комбинированной финансовой отчетности Группы в
          кредитные организации и организации – контрагенты.
        </p>
      </div>
    </main>
  );
}
