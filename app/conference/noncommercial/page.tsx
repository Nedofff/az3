import styles from "./Page.module.css";
import { useRef} from 'react';

export default function page() {
  const ref = useRef<any>(null);
  function downloadPdf() {
    ref.current.style.display="none";
    window.print();
    ref.current.style.display="block";
  }
  
  return (
    <div className={`${styles['page']}`}>
    <div className={`${styles['title align_self_center width-100']}`}>ПРОФЕССИОНАЛЬНОЕ СУЖДЕНИЕ <textarea  placeholder="НЕКОММЕРЧЕСКОЙ ОРГАНИЗАЦИИ «ХХХ»" className={`${styles['text-font bold border-none padding-0 textarea-height large textarea']}`}/>
    <br/>ПО ПОРЯДКУ ОТРАЖЕНИЯ ЦЕЛЕВОГО ФИНАНСИРОВАНИЯ, ПОЛУЧЕННОГО <textarea  placeholder="ОТ ПО СОГЛАШЕНИЮ " className={`${styles['text-font bold border-none padding-0 textarea-height large textarea']}`}/>
    <br/><textarea  placeholder="№" className={`${styles['text-font bold border-none padding-0 textarea-height small textarea']}`}/></div>
    <div className={`${styles['date']}`}>«<input className={`${styles['small border-bottom text-font']}`}/>»<input className={`${styles['middle border-bottom text-font']}`}/> 20<input className={`${styles['small border-bottom text-font']}`}/>года</div>
    <br/>
    <table className={`${styles['table']}`}>
      <tbody>
        <tr>
          <td className={`${styles['table_body_td vertical-align']}`}>Дата, на которую выносится профессиональное суждение</td>
          <td className={`${styles['table_body_td ']}`}>
            <textarea  placeholder="Дата г." className={`${styles['text-font border-none padding-0 textarea-height-1 width-100 textarea']}`}/>
          </td>
        </tr>
        <tr>
          <td className={`${styles['table_body_td vertical-align']}`}>Объект профессионального суждения</td>
          <td className={`${styles['table_body_td text-align-justify']}`}>Отражение в учете средств субсидии, 
          выделенной из <textarea  placeholder="федерального и регионального бюджета" className={`${styles['text-font border-none padding-0 textarea-height large textarea']}`}/> в рамках 
          Соглашения с <textarea placeholder="YYY" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> <textarea  placeholder="№  от г." className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> в 
          сумме <textarea  placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> рублей на предоставление <textarea  placeholder="..." className={`${styles['text-font border-none padding-0 textarea-width vertical textarea text-align-justify']}`}/> и признание их.</td>
        </tr>
        <tr>
          <td className={`${styles['table_body_td vertical-align']}`}>Заключение</td>
          <td className={`${styles['table_body_td text-align-justify']}`}>Признать средства субсидии, выделенной из федерального и регионального бюджета в рамках Соглашения <textarea  placeholder="YYY" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> <textarea  placeholder="№  от г." className={`${styles['text-font bold border-none padding-0 textarea-height middle textarea']}`}/>в 
          сумме <textarea  placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> рублей на предоставление <textarea  placeholder="..." className={`${styles['text-font border-none padding-0 textarea-width vertical textarea text-align-justify']}`}/> невозвратными и отразить на счетах бухгалтерского учета 11001 Целевое финансирования. 
          </td>
        </tr>
        <tr>
          <td className={`${styles['table_body_td vertical-align']}`}>Обоснование профессионального суждения</td>
          <td className={`${styles['table_body_td text-align-justify']}`}>
            В соответствие с Разъяснением Банка России по вопросам, связанным с применением Положения Банка России от 25.10.2017 № 612-П «О порядке отражения на счетах бухгалтерского учета объектов бухгалтерского учета некредитными финансовыми организациями» (далее – Положение № 612-П),
            <br/>Положения Банка России от 01.10.2015 № 493-П «Отраслевой стандарт бухгалтерского учета некредитными финансовыми организациями операций по выдаче (размещению) денежных средств по договорам займа и договорам банковского вклада» (далее – Положение № 493-П) на 13 декабря 2018 года по вопросу отражения поступлений от учредителей предусмотрен следующий порядок бухгалтерского учета:
            <i>
              В случае если бюджетные средства поступают в МКК от учредителя, при определении того являются ли такие поступления взносом в капитал МКК, необходимо оценить вероятность и возможные основания для возврата полученных средств.
              <br/>Безвозвратное поступление денежных средств от учредителя МКК, выступающего в качестве собственника, классифицируется как взнос в капитал и отражается МКК бухгалтерскими записями:
              <br/>Дебет счета № 20501 «Расчетные счета в кредитных организациях»
              <br/>Кредит счета № 60330 «Расчеты с акционерами, участниками, пайщиками»;
              <br/>Дебет счета № 60330 «Расчеты с акционерами, участниками, пайщиками»
              <br/>Кредит счета № 11001 «Целевое финансирование некоммерческих организаций».
              <br/>В соответствии с пунктом 7.18 Приложения 2 к Положению № 486-П в первый рабочий день нового года остатки, отраженные на счетах по учету доходов и расходов отчетного года (№ 710 - № 719), подлежат переносу на счета доходов и расходов прошлого года (№ 720 - № 729).
              <br/>Согласно пункту 7.21 Приложения 2 к Положению № 486-П на дату подписания годовой бухгалтерской (финансовой) отчетности остатков на счетах № 720 - № 729 быть не должно. Перенос остатков со счетов по учету доходов и расходов прошлого года осуществляется на счет № 708 «Прибыль (убыток) прошлого года».
              <br/>В соответствии с пунктом 1.5 Приложения 2 к Положению № 486-П списание суммы убытка отражается бухгалтерской записью:
              <br/>Дебет счета № 10901 «Непокрытый убыток»
              <br/>Кредит счета № 70802 «Убыток прошлого года».
              <br/>В соответствии с законодательством Российской Федерации и учредительными документами некоммерческой организации отражение использования целевого финансирования МКК отражает бухгалтерской записью:
              <br/>Дебет счета № 11001 «Целевое финансирование некоммерческих организаций»
              <br/>Кредит счета № 10901 «Непокрытый убыток».
              <br/>Корреспонденции счета № 11001 «Целевое финансирование некоммерческих организаций» со счетом № 71802 «Расходы, связанные с обеспечением деятельности» Положением № 486-П не предусмотрено.
            </i>
            В связи  с тем, что  является учредителем некоммерческой организации – <textarea  placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> и 
            вероятность возврата средств субсидии, выделенной на предоставление <textarea  placeholder="..." className={`${styles['text-font border-none padding-0 textarea-width vertical textarea text-align-justify']}`}/> оценивается 
            не более <input placeholder="5" className={`${styles['small border-none text-font text-align-right']}`}/>% (уровень существенности по Учетной политики) указанные средства в размере <textarea  placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> рублей признаются невозвратными и подлежат отражению на счете бухгалтерского учета 11001 в качестве Целевого финансирования. 
          </td>
        </tr>
      </tbody>
    </table>
    <br/>
    <div className={`${styles['text-align-justify text-font  text-indent']}`}>
      <textarea  placeholder="Главный бухгалтер:" className={`${styles['text-font border-none padding-0 textarea-height width-100 textarea']}`}/>
    </div>
    <div className={`${styles['text-align-justify text-font  text-indent']}`}>
      <textarea  placeholder="Генеральный директор:" className={`${styles['text-font border-none padding-0 textarea-height width-100 textarea']}`}/>
    </div>
    <br/>
    <button ref={ref} onClick = {downloadPdf}>
    Download PDF
    </button>
  </div>
  );
};
