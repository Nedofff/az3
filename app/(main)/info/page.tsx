import InfoSection from "@/components/InfoPage/InfoSection";
import React from "react";
import ScalingImages from "@/components/InfoPage/ScalingImages";
import WrapperForText from "@/components/InfoPage/WrapperForText";
import styles from './InfoPage.module.css'
import AuditeesAndRevenue from "@/components/InfoPage/AuditeesAndRevenue/AuditeesAndRevenue";
import ReportsBlock from "@/components/InfoPage/ReportsBlock/ReportsBlock";

// TODO: Разделить на абзацы
export default function InfoPage() {
  const imagesData = [
    {
      key: 0,
      name: "img1",
      src: "/infoPage/img1.png",
      width: 200,
      height: 200,
      alt: "",
    },
    {
      key: 1,
      name: "img2",
      src: "/infoPage/img2.png",
      width: 200,
      height: 200,
      alt: "",
    },
    {
      key: 2,
      name: "img3",
      src: "/infoPage/img3.png",
      width: 200,
      height: 200,
      alt: "",
    },
    {
      key: 3,
      name: "img4",
      src: "/infoPage/img4.png",
      width: 200,
      height: 200,
      alt: "",
    },
  ];
  return (
    <main className="flex flex-col bg-main-color items-center pt-28 pb-20">
      <h1 className="text-4xl text-sub-color font-bold text-center">
        Раскрытие информации
      </h1>
      <div className="mt-8 space-y-1 w-full font-thin">
        <InfoSection label="1. Информация о наличии права аудиторской организации оказывать аудиторские услуги">
          <div className="px-5 sm:px-0 sm:flex sm:flex-col sm:items-center">
            <div className="sm:w-2/3 max-w-[650px]">
              <p>
                Аудиторская организация ООО «Аудиторская группа «Аземша и
                партнёры» является членом саморегулируемой организации аудиторов
                Ассоциация «Содружество» (СРО ААС) и включена в реестр аудиторов
                и аудиторских организаций 21 ноября 2016 г. за основным
                регистрационным номером записи (ОРНЗ) 11606061150
              </p>
              <br />
              <span className="font-semibold">ВАЖНО:</span>
              <p>
                ООО «Элент» было переименовано в ООО «Аудиторская группа «Аземша
                и партнёры». Изменения в Устав Общества зарегистрированы МИФНС
                России №23 по Красноярскому краю 09.08.2022 года.
              </p>
            </div>
            <div className="flex">
              <ScalingImages imagesData={imagesData} />
            </div>
          </div>
        </InfoSection>
        <InfoSection label="2. Информация о структуре аудиторской организации и лице, исполняющим обязанности ее единоличного исполнительного органа">
          <WrapperForText className="space-y-5">
            <div>
              <h3 className="text-lg font-normal">Генеральный директор</h3>
              <ul className="list-inside list-disc">
                <li>
                  Планирование деятельности и обеспечения развития аудиторской
                  организации;
                </li>
                <li>
                  Поддержание сотрудничества с организациями, государственными
                  органами и их представителями, иными лицами для целей
                  деятельности аудиторской организации;
                </li>
                <li>
                  Текущее управление и контроль деятельности аудиторской
                  организации
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-normal">Аудиторы</h3>
              <ul className="list-inside list-disc">
                <li>
                  Выполнение аудиторских процедур (действий) и оказание
                  сопутствующих аудиту и прочих услуг, связанных с аудиторской
                  деятельностью;
                </li>
                <li>
                  Организация работы и надзор за участниками аудиторской группы;
                </li>
                <li>
                  Руководство выполнения аудиторского задания и оказание
                  сопутствующих аудиту и прочих услуг, связанных с аудиторской
                  деятельностью.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-normal">Помощники аудитора</h3>
              <ul className="list-inside list-disc">
                <li>
                  Выполнение отдельных поручений для целей аудиторских заданий и
                  оказания прочих услуг, связанных с аудиторской деятельностью;
                </li>
                <li>
                  Выполнение аудиторских процедур (действий), осуществление
                  отдельных операций при оказании сопутствующих аудиту и прочих
                  услуг, связанных с аудиторской деятельностью.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-normal">
                Единоличный исполнительный орган
              </h3>
              <p>
                Единоличный исполнительный орган ООО «Аудиторская группа «Аземша
                и партнёры»:{" "}
                <i>Генеральный директор Аземша Екатерина Александровна</i>
              </p>
            </div>
          </WrapperForText>
        </InfoSection>
        <InfoSection label="3. Информация о лицах, связанных с аудиторской организацией">
          <div className={`${styles['wrapper-table-three']}  flex flex-col items-center`}>
          <table className={`${styles['table-three']} table-auto max-w-[700px] overflow border-2 border-black min-h-[300px] border-collapse mx-2 sm:mx-10`}>
            <tbody className={``}>
              <tr className="border-[1px] border-black">
                <td className="pl-3 sm:py-2">1. Перечень филиалов и представительств;</td>
                <td className="pl-3 sm:py-2">1. Филиалы и представительства отсутствуют;</td>
              </tr>
              <tr className="border-[1px] border-black">
                <td className="pl-3 sm:py-2">2. Перечень дочерних обществ аудиторской организации;</td>
                <td className="pl-3 sm:py-2">2. Дочерние общества отсутствуют;</td>
              </tr>
              <tr className="border-[1px] border-black">
                <td className="pl-3 sm:py-2">
                  3. Наименование организации, по отношению к которой
                  аудиторская организация является дочерним обществом;
                </td>
                <td className="pl-3 sm:py-2">3. Материнская компания отсутствует;</td>
              </tr>
              <tr className="border-[1px] border-black">
                <td className="pl-3 sm:py-2">
                  4. Перечень аудиторских организаций, участвующих в уставном
                  капитале аудиторской организации;
                </td>
                <td className="pl-3 sm:py-2">
                  4. Аудиторские организации, участвующие в уставном капитале
                  отсутствуют;
                </td>
              </tr>
              <tr className="border-[1px] border-black">
                <td className="pl-3 sm:py-2">
                  5. Размер доли уставного капитала аудиторской организации,
                  принадлежащей всем аудиторам аудиторской организации;
                </td>
                <td className="pl-3 sm:py-2">
                  5. Доля в уставном капитале аудиторской организации в размере
                  100% принадлежит аудитору, работающему в аудиторской
                  организации по основному месту работы;
                </td>
              </tr>
              <tr className="border-[1px] border-black">
                <td className="pl-3 sm:py-2">
                  6. Перечень бенефициарных владельцев аудиторской организации;
                </td>
                <td className="pl-3 sm:py-2">
                  6. Аземша Екатерина Александровна, гражданка РФ, страна
                  постоянного проживания – РФ;
                </td>
              </tr>
              <tr className="border-[1px] border-black">
                <td className="pl-3 sm:py-2">
                  7. Перечень иностранных граждан, лиц без гражданства,
                  иностранных юридических лиц, международных компаний,
                  являющихся контролирующими лицами аудиторской организации;
                </td>
                <td className="pl-3 sm:py-2">7. Отсутствуют;</td>
              </tr>
              <tr className="border-[1px] border-black">
                <td className="pl-3 sm:py-2">
                  8. Наименование российской и (или) международной сети
                  аудиторских организаций, членом которой является аудиторская
                  организация.
                </td>
                <td className="pl-3 sm:py-2">
                  8. В международных и российских сетях аудиторских организаций
                  не состоит.
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </InfoSection>
        <InfoSection label="4. Информация об организации и обеспечении соблюдения аудиторской организацией требований профессиональной этики и независимости">
          <WrapperForText>
            <p className="mt-3">
              Генеральный директор ООО «Аудиторская группа «Аземша и партнёры»
              подтверждает, что аудиторская организация полностью соблюдает
              требования ст. 8 Федерального закона №307-ФЗ «Об аудиторской
              деятельности» и Правил независимости аудиторов и аудиторских
              организаций и принимает для этого все необходимые меры, в том
              числе, осуществляет проведение внутренней проверки соблюдения
              независимости, что предусмотрено внутрифирменными стандартами.
            </p>
            <br />
            <p>
              Внутренние проверки соблюдения условий независимости аудиторов и
              аудиторской организации проводятся при принятии клиента на
              обслуживание, продолжении сотрудничества с имеющимися клиентами, в
              ходе выполнения аудиторских заданий, мониторинга (инспекции)
              завершенных аудиторских заданий, а также путем получения ежегодных
              подтверждений сотрудников о соблюдении правил независимости.
              <br />
              Ежегодно сотрудники тестируются на предмет соблюдения принципов
              персональной независимости.
            </p>
            <br />
            <p>
              Меры, принимаемые аудиторской организаций для обеспечения своей
              независимости основаны на:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="mt-2">
                Правилах независимости аудиторов и аудиторских организаций –
                членов СРО ААС, принятые Решением Правления СРО ААС от 14 мая
                2021 года, согласно которым все руководители и сотрудники
                аудиторской организации обязаны знать, понимать и выполнять
                требования и ограничения, установленные статьей 8 Независимость
                аудиторских организаций, аудиторов Федерального закона 307-ФЗ
                «Об аудиторской деятельности»;
              </li>
              <li>
                Кодексе профессиональной этики аудиторов, утвержденным решением
                Правления НП ААС протокол № 167 от 13 марта 2015 г., изменения
                внесены протоколом № 535 от 19 ноября 2021 г;
              </li>
              <li>
                Кодексе профессиональной этики аудиторов, одобрен Советом по
                аудиторской деятельности 21 мая 2019 г., протокол N 47,
                изменения внесены Советом по аудиторской деятельности 17 ноября
                2021 г., протокол № 61;
              </li>
              <li>
                МСК 1 (ISQM 1) «Управление качеством в аудиторских организациях,
                проводящих аудит или обзорные проверки»;
              </li>
              <li>МСК 2 (ISQM 2) «Проверки качества выполнения заданий»;</li>
              <li>
                МСА 220 (пересмотренный) «Управление качеством при проведении
                аудита финансовой отчетности» и МСА 200 «Основные цели
                независимого аудитора и проведение аудита в соответствии с
                Международными стандартами аудита».
              </li>
            </ul>
            <br />
            <p>
              Данные Международные стандарты аудита (далее - МСА) устанавливают
              особые обязанности аудитора в отношении процедур контроля качества
              при проведении аудита бухгалтерской (финансовой) отчетности. При
              осуществлении аудиторских проверок применяются внутрифирменные
              стандарты, инструкции и методики, разработанные на основе
              действующих МСА.
            </p>
            <ul className="list-decimal list-inside marker:font-normal space-y-2">
              <li className="mt-2">
                Описание системы вознаграждения руководства аудиторской
                организации, руководителей аудита, в том числе факторов,
                влияющих на размер их вознаграждений. Вознаграждение
                руководителей аудиторских проверок зависит от условий трудового
                договора, в части постоянной суммы вознаграждения, ежегодной
                оценки качества работы каждого руководителя аудиторской группы,
                финансовых результатов деятельности ООО «Аудиторская группа
                «Аземша и партнёры» за соответствующий период.
              </li>
              <li>
                Описание мер, принимаемых в аудиторской организации в целях
                обеспечения ротации руководителей аудита. Действующее
                законодательство, нормативные документы, Правила независимости
                аудиторов и аудиторских организаций, требуют от работников,
                осуществляющих руководство аудиторской проверкой, регулярной (не
                реже одного раза в семь лет) ротации в отношении аудируемых лиц.
                Для обеспечения независимости аудиторской организации
                чрезвычайно важно поддерживать разумное соотношение между
                преимуществами преемственности в аудиторской группе, и
                формирование благоприятных рабочих отношений с сотрудниками
                клиента, а также угрозой привычности. Для предотвращения угрозы
                привычности в ООО «Аудиторская группа «Аземша и партнёры»
                проводится периодическая ротация персонала, в соответствии с
                требованиями действующего законодательства.
              </li>
            </ul>
          </WrapperForText>
        </InfoSection>
        <InfoSection label="5. Информация о контроле (надзоре) за деятельностью (качества работы) аудиторской организации">
          <WrapperForText>
            <p>
              Генеральный директор ООО «Аудиторская группа «Аземша и партнёры»
              заявляет об ответственности за разработку, внедрение, мониторинг и
              обеспечение соблюдения на постоянной основе правил и процедур
              обеспечения качества предоставляемых аудиторских, сопутствующих
              аудиту и прочих связанных с аудиторской деятельностью услуг,
              основанных на принципах независимости и профессиональной этики
              аудиторов.
            </p>
            <br />
            <p>
              Основной целью функционирования системы контроля качества услуг в
              аудиторской организации является обеспечение оказания аудиторских
              услуг в соответствии с МСА и требованиями нормативных правовых
              актов, выдачи аудиторского заключения или иного отчета,
              соответствующих условиям конкретного задания, а также соблюдения
              аудиторской тайны, коммерческой, налоговой, банковской тайны лиц,
              которым оказывались услуги, неразглашения инсайдерской информации,
              персональных данных, иных конфиденциальных сведений и информации,
              не подлежащих разглашению в соответствии с действующим
              законодательством.
            </p>
            <br />
            <p>
              Система внутреннего контроля качества ООО «Аудиторская группа
              «Аземша и партнёры» устанавливает принципы и процедуры в отношении
              следующих элементов:
            </p>
            <br />
            </WrapperForText>
            <div className={styles['wrapper-table-five']}>
  <table className={styles['table-five']}>
    <thead>
		<tr>
			<td>Согласно Международному стандарту контроля качества 1 «Контроль качества в аудиторских организациях, проводящих аудит и обзорные проверки финансовой отчетности, а также выполняющих прочие задания, обеспечивающие уверенность, и задания по оказанию сопутствующих услуг» до 14.12.2022</td>
			<td>Согласно МСК 1 (ISQM 1) «Управление качеством в аудиторских организациях, проводящих аудит или обзорные проверки» с 15.12.2022</td>
		</tr>
    </thead>
	<tbody>

		<tr>
			<td>а) обязанности генерального директора ООО «Аудиторская группа «Аземша и партнёры» по обеспечению качества услуг, оказываемых аудиторской организацией;</td>
			<td>процесс оценки рисков в аудиторской организации;</td>
		</tr>
		<tr>
			<td>б) этических требований;</td>
			<td>управление и высшее руководство;</td>
		</tr>
		<tr>
			<td>в) принятия на обслуживание нового клиента и продолжение сотрудничества;</td>
			<td>соответствующие этические требования;</td>
		</tr>
		<tr>
			<td>г) кадровой работы;</td>
			<td>принятие решения о начале и (или) продолжении работы с клиентом либо работы по определенному заданию;</td>
		</tr>
		<tr>
			<td>д) выполнения заданий;</td>
			<td>выполнение задания;</td>
		</tr>
		<tr>
			<td>е) мониторинга.</td>
			<td>ресурсы;</td>
		</tr>
		<tr>
			<td></td>
			<td>информационная система и информационное взаимодействие;</td>
		</tr>
		<tr>
			<td></td>
			<td>процесс мониторинга и устранения недостатков.</td>
		</tr>
	</tbody>
</table>
</div>
<WrapperForText>
            <p>
              Генеральный директор ООО «Аудиторская группа «Аземша и партнёры»
              заявляет о наличии и результативности системы внутреннего контроля
              аудиторской организации, ее соответствии МССК 1, введенному в
              действие на территории РФ и приказом Министерства финансов РФ от
              09.01.2019 г. №2н «О введении в действие международных стандартов
              аудита на территории Российской Федерации и о признании
              утратившими силу некоторых приказов Министерства финансов
              Российской Федерации», а также МСК 1 (ISQM 1) «Управление
              качеством в аудиторских организациях, проводящих аудит или
              обзорные проверки».
            </p>
            <br />
            <p>
              На протяжении ряда лет страховщиком профессиональной
              ответственности ООО «Аудиторская группа «Аземша и партнёры»
              является страховое открытое акционерное общество «ВСК», при этом
              случаев некачественного исполнения услуг и предъявления санкций по
              возмещению ущерба в практике ООО «Аудиторская группа «Аземша и
              партнёры» не было.
            </p>
            <br />
            <p>
              Система внутреннего контроля качества обеспечивает разумную
              уверенность в том, что ООО «Аудиторская группа «Аземша и партнёры»
              и его работники осуществляют проведение аудита и оказание
              сопутствующих аудиту услуг в соответствии с требованиями
              законодательства Российской Федерации и применимых
              профессиональных стандартов, а также, что аудиторские заключения и
              иные отчеты, выданные ООО «Аудиторская группа «Аземша и партнёры»,
              соответствуют условиям конкретного задания.
            </p>
            <br />
            <h3 className="text-lg font-normal">
              Сведения о внешних проверках деятельности аудиторской организации
            </h3>
            <p> 
              Сведения о внешних проверках деятельности аудиторской организации,
              проведенных в течение трех лет, непосредственно предшествующих
              году, в котором раскрывается информация, с указанием контрольного
              (надзорного) органа (организации), проводившего проверки, года
              проведения проверок.
            </p>
            <br />
            <p>
              Орган, проводивший проверку: <br />
              <i>
              Саморегулируемая организация аудиторов Ассоциация «Содружество»
              </i>
            </p>
            <p>Год прохождения проверки качества: 2019</p>
            <br />
            <p>
              Меры дисциплинарного и иного воздействия, примененные в отношении
              аудиторской организации в течение года, в котором раскрывается
              информация, и предшествующего ему года. <br />
              Меры дисциплинарного и иного воздействия не применялись.
            </p>
          </WrapperForText>
        </InfoSection>
        {/* TODO: Сделать нормальную таблицу (НИЖЕ) 6. Информация об аудиторах, работающих в аудиторской организации по трудовому договору*/}
        <InfoSection label="6. Информация об аудиторах, работающих в аудиторской организации по трудовому договору">
          <WrapperForText>
            <p>
              Численность работающих в аудиторской организации по основному
              месту работы и по совместительству аудиторов, доля таких аудиторов
              в общей численности аудиторов, работающих в аудиторской
              организации по трудовому договору (по состоянию на 01.01.2022):
            </p>
          </WrapperForText>
          <div className={styles['wrapper-table-six-desk']}>
          <table className={styles['table-six-desk']}>
            <thead>
              <tr>
                <th>Наименование показателя</th>
                <th>Количество, чел</th>
                <th>
                  Доля в общей численности аудиторов, работающих в аудиторской
                  организации по трудовому договору
                </th>
                <th>
                  Аудиторы, имеющие квалификационный аттестат аудитора, выданный
                  СРО в соответствии со ст. 11 ФЗ от 30 декабря 2008 г. N 307-ФЗ{" "}
                  {'"'}Об аудиторской деятельности{'"'}
                </th>
              </tr>
              </thead>
            <tbody>

              <tr>
                <td>
                  Количество аудиторов, работающих по основному месту работы
                </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Количество аудиторов, работающих по совместительству</td>
                <td>4</td>
                <td>100</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Итого</td>
                <td>4</td>
                <td>100</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          </div>
          <table className={styles['table-six-mobile']}>
	<tbody>
		<tr>
			<th colSpan={2}>Количество аудиторов, работающих по основному месту работы</th>
		</tr>
		<tr>
			<td>Количество, чел</td>
			<td>	0</td>
		</tr>
		<tr>
			<td>Доля в общей численности аудиторов, работающих в аудиторской организации по трудовому договору</td>
			<td>0</td>
		</tr>
		<tr>
			<td>Аудиторы, имеющие квалификационный аттестат аудитора, выданный СРО в соответствии со ст. 11 ФЗ от 30 декабря 2008 г. N 307-ФЗ "Об аудиторской деятельности"</td>
			<td>0</td>
		</tr>
		<tr>
			<th colSpan={2}>Количество аудиторов, работающих по совместительству</th>
		</tr>
		<tr>
			<td>Количество, чел</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Доля в общей численности аудиторов, работающих в аудиторской организации по трудовому договору</td>
			<td>100</td>
		</tr>
		<tr>
			<td>Аудиторы, имеющие квалификационный аттестат аудитора, выданный СРО в соответствии со ст. 11 ФЗ от 30 декабря 2008 г. N 307-ФЗ "Об аудиторской деятельности"</td>
			<td>1</td>
		</tr>
		<tr>
			<th colSpan={2}>Итого</th>
		</tr>
		<tr>
			<td>Количество, чел</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Доля в общей численности аудиторов, работающих в аудиторской организации по трудовому договору</td>
			<td>100</td>
		</tr>
		<tr>
			<td>Аудиторы, имеющие квалификационный аттестат аудитора, выданный СРО в соответствии со ст. 11 ФЗ от 30 декабря 2008 г. N 307-ФЗ "Об аудиторской деятельности"</td>
			<td>1</td>
		</tr>
	</tbody>
</table>
          <br />
          <WrapperForText>
            <p>
              Численность работающих в аудиторской организации по основному
              месту работы и по совместительству аудиторов, доля таких аудиторов
              в общей численности аудиторов, работающих в аудиторской
              организации по трудовому договору (по состоянию на 01.01.2023):
            </p>
          </WrapperForText>
          <div className={styles['wrapper-table-six-desk']}>
          <table className={styles['table-six-desk']}>
            <thead>
              <tr>
                <th>Наименование показателя</th>
                <th>Количество, чел</th>
                <th>
                  Доля в общей численности аудиторов, работающих в аудиторской
                  организации по трудовому договору, %
                </th>
                <th>
                  Аудиторы, имеющие квалификационный аттестат аудитора, выданный
                  СРО в соответствии со ст. 11 ФЗ от 30 декабря 2008 г. N 307-ФЗ{" "}
                  {'"'}Об аудиторской деятельности{'"'}
                </th>
              </tr>
              </thead>
            <tbody>

              <tr>
                <td>
                  Количество аудиторов, работающих по основному месту работы
                </td>
                <td>4</td>
                <td>57</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Количество аудиторов, работающих по совместительству</td>
                <td>3</td>
                <td>43</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Итого</td>
                <td>7</td>
                <td>100</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          </div>
          <table className={styles['table-six-mobile']}>
                  <tbody><tr>
                      <th colSpan={2}>
                          Количество аудиторов, работающих по основному месту работы
                      </th>
                  </tr>
                  <tr>
                      <td>Количество, чел</td>
                      <td>
                          4
                      </td>

                  </tr>
                  <tr>
                      <td>Доля в общей численности аудиторов, работающих в аудиторской организации по трудовому
                          договору
                      </td>
                      <td>
                          57
                      </td>
                  </tr>
                  <tr>
                      <td>Аудиторы, имеющие квалификационный аттестат аудитора, выданный СРО в соответствии со ст. 11
                          ФЗ от 30 декабря 2008 г. N 307-ФЗ "Об аудиторской деятельности"
                      </td>
                      <td>
                          2
                      </td>
                  </tr>
                  <tr>
                      <th colSpan={2}>
                          Количество аудиторов, работающих по совместительству
                      </th>
                  </tr>
                  <tr>
                      <td>Количество, чел</td>
                      <td>
                          3
                      </td>
                  </tr>
                  <tr>
                      <td>Доля в общей численности аудиторов, работающих в аудиторской организации по трудовому
                          договору
                      </td>
                      <td>
                          43
                      </td>

                  </tr>
                  <tr>
                      <td>Аудиторы, имеющие квалификационный аттестат аудитора, выданный СРО в соответствии со ст. 11
                          ФЗ от 30 декабря 2008 г. N 307-ФЗ "Об аудиторской деятельности"
                      </td>
                      <td>
                          1
                      </td>
                  </tr>
                  <tr>
                      <th colSpan={2}>
                          Итого
                      </th>
                  </tr>
                  <tr>
                      <td>Количество, чел</td>
                      <td>7</td>
                  </tr>
                  <tr>
                      <td>Доля в общей численности аудиторов, работающих в аудиторской организации по трудовому
                          договору
                      </td>
                      <td>100</td>
                  </tr>
                  <tr>
                      <td>Аудиторы, имеющие квалификационный аттестат аудитора, выданный СРО в соответствии со ст. 11
                          ФЗ от 30 декабря 2008 г. N 307-ФЗ "Об аудиторской деятельности"
                      </td>
                      <td>3</td>
                  </tr>
              </tbody>
            </table>
          <WrapperForText>
            <h3 className="font-bold">
              Заявление руководителя аудиторской организации о соблюдении
              аудиторами, работающими в аудиторской организации требования о
              прохождении обучения по программам повышения квалификации,
              предусмотренным ст. 11 федерального закона от 30 декабря 2008 г. N
              307-фз «об аудиторской деятельности» по состоянию на 01.01.2023
              года
            </h3>
            <p className="mb-3">
              Все сотрудники ООО «Аудиторская группа «Аземша и партнёры» имеющие
              квалификационный аттестат аудитора, выполняют требования
              Федерального закона «Об аудиторской деятельности» от 30.12.2008 г.
              № 307-ФЗ и ежегодно проходят повышение квалификации по программам,
              утвержденным CPO Ассоциация «Содружество».
            </p>
          </WrapperForText>
        </InfoSection>
        <InfoSection label="7. Информация об аудируемых лицах и величине выручки от оказанных аудиторской организацией услуг">
          {/* TODO: сделать компонент для этой части, чтоб можно было в админке добавлять */}
          <WrapperForText>
            <AuditeesAndRevenue/>
          </WrapperForText>
        </InfoSection>
        <InfoSection label="8. Отчёты о деятельности ООО «Аудиторская группа «Аземша и партнёры»">
          {/* TODO: сделать тут соединение с БД */}
          {/* TODO: разделить на строки и выделить, чтоб было понятно, что это ссылка*/}
          <WrapperForText>
            
            <ReportsBlock/>
          </WrapperForText>
        </InfoSection>
      </div>
    </main>
  );
}
