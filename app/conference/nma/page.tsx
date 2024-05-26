"use client";
import styles from "./Page.module.css";
import { useRef} from 'react';

export default function Page() {
  const ref = useRef<any>(null);
  function downloadPdf() {
    ref.current.style.display="none";
    window.print();
    ref.current.style.display="block";
  }
  
  return (
    <div className={`${styles['page']}`}>
      <div className={`${styles['title align_self_center text-align-center']}`}>Профессиональное суждение № <input className={`${styles['text-font bold small border-none']}`}/><br/>
      по проверке на обесценение нематериальных активов</div>
      <br/>
      <div className={`${styles['date']}`}>«<input className={`${styles['small border-bottom text-font']}`}/>»<input className={`${styles['middle border-bottom text-font']}`}/> 20<input className={`${styles['small border-bottom text-font']}`}/>года</div>
      <br/>
      <div className={`${styles['flex_column width-100 margin-07']}`}>
        <div className={`${styles['align_stretch text-indent']}`}>Наименование оцениваемого основного средства (группы основных средств):</div>
        <div className={`${styles['width-100']}`}><input className={`${styles['width-100 border-bottom text-font']}`}/></div>
        <div className={`${styles['align_stretch']}`}>характеристика нематериального актива:</div>
      </div>
      <br/>
      <ol className={`${styles['ol-bold']}`}>
        <li className={`${styles['text-align-justify']}`}><b>Объект, учитывался в составе</b> (указать нужное):</li>
        <table className={`${styles['table margin-07']}`}>
          <thead className={`${styles['table_head']}`}>
            <th className={`${styles['table_head_ceils']}`}>Номер счета</th>
            <th className={`${styles['table_head_ceils']}`}>Отметить<br/>нужное</th>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles['table_body_td']}`}>№ 60901 «Нематериальные активы»</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td']}`}>№ 60905 «Деловая репутация»</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
          </tbody>
        </table>
        <br/>
        <li className={`${styles['text-align-justify']}`}><b>Балансовая стоимость нематериального актива по состоянию на 31.12.<textarea  placeholder="____" className={`${styles['text-font bold border-none padding-0 textarea-height middle textarea']}`}/></b> составляет <textarea className={`${styles['text-font border-bottom padding-0 textarea-height large textarea']}`}/> руб.</li>
        <table className={`${styles['table margin-07']}`}>
          <thead className={`${styles['table_head']}`}>
            <th className={`${styles['table_head_ceils']}`}>№<br/>пп</th>
            <th className={`${styles['table_head_ceils']}`}>Наименование показателя</th>
            <th className={`${styles['table_head_ceils']}`}>Сумма руб.</th>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles['table_body_td']}`}>1</td>
              <td className={`${styles['table_body_td']}`}>Первоначальная стоимость</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td']}`}>2</td>
              <td className={`${styles['table_body_td']}`}>Накопленная амортизация на дату оценки</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td']}`}>3</td>
              <td className={`${styles['table_body_td']}`}>Убыток от обесценения (см.п.3)</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td']}`}>4</td>
              <td className={`${styles['table_body_td']}`}><b>Балансовая стоимость до проведения теста на обесценение</b></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
          </tbody>
        </table>
        <br/>
        <li className={`${styles['text-align-justify']}`}><b>Модель учета последующей оценки:</b> По первоначальной стоимости за вычетом накопленной амортизации и накопленных убытков от обесценения (модель учета по фактическим затратам).</li>
        <br/>
        <li className={`${styles['text-align-justify']}`}><b>Проверка на обесценение (п.12.16. главы 12 №612-п): Возникали ли следующие события в отчетном периоде:</b></li>
        <table className={`${styles['table margin-07']}`}>
          <tbody>
            <tr className={`${styles['table_head']}`}>
              <td className={`${styles['table_head_ceils']}`}>Событие</td>
              <td className={`${styles['table_head_ceils']}`}>Отметить<br/>(да/нет)</td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td text-align-justify']}`}>1. Наличие наблюдаемых признаков того, что стоимость нематериального 
              актива снизилась в течение периода значительно больше, 
              чем ожидалось с течением времени или при обычном использовании;</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td text-align-justify']}`}>2. Значительные изменения, имеющие неблагоприятные последствия для организации, 
              произошли в течение периода или произойдут в ближайшем будущем в технических, рыночных, экономических или правовых условиях, 
              в которых организация осуществляет деятельность, или на рынке, для которого предназначен актив;</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td text-align-justify']}`}>3. Рыночные процентные ставки или иные рыночные нормы прибыли на 
              инвестиции повысились в течение периода, и данный рост, вероятно, будет 
              иметь существенные неблагоприятные последствия для ставки 
              дисконтирования, используемой при расчете ценности использования и 
              возмещаемой стоимости актива;</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td text-align-justify']}`}> 4. Существуют признаки морального устаревания или физической порчи 
              актива;</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td text-align-justify']}`}>5. Значительные изменения, имеющие неблагоприятные последствия для 
              предприятия, произошли в течение периода или предположительно могут 
              иметь место в ближайшем будущем в отношении интенсивности и способа 
              использования (или предположительного использования) актива; данные 
              изменения включают простой актива, планы по прекращению или 
              реструктуризации деятельности, к которой относится актив, планы по 
              выбытию актива до ранее запланированной даты, а также реклассификацию 
              срока службы  актива с неопределенного на определенный;</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td text-align-justify']}`}>6. Из внутренней отчетности явствует, что экономическая эффективность 
              актива оказалась хуже или будет хуже, чем ожидалось.</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
          </tbody>
        </table>
        <br/>
        <li className={`${styles['text-align-justify']}`}><b>В случае возникновения вышеописанных ситуаций</b>, а также для НМА с неопределенным сроком полезного использования, определена возмещаемая стоимость, 
        как максимальная из ценности использования и справедливой цены за вычетом расходов на продажу.
        </li>
        <li className={`${styles['text-align-justify']}`}><b>Ценность использования</b>, рассчитанная как сумма дисконтированных будущих потоков денежных средств от рассматриваемого актива, составляет <textarea className={`${styles['text-font border-bottom padding-0 textarea-height large textarea']}`}/>руб.</li>
        <table className={`${styles['table margin-07']}`}>
          <thead className={`${styles['table_head']}`}>
            <th className={`${styles['table_head_ceils']}`}>Наименование<br/>объекта</th>
            <th className={`${styles['table_head_ceils']}`}>Приток денежных<br/>средств от<br/>использования<br/>актива</th>
            <th className={`${styles['table_head_ceils']}`}>Приток денежных<br/>средств при<br/>реализации актива по<br/>окончании срока<br/>полезного<br/>использования</th>
            <th className={`${styles['table_head_ceils']}`}>Отток денежных средств при использовании актива</th>
            <th className={`${styles['table_head_ceils']}`}>Индекс дисконтиро-<br/>вания 1/(1+i)n</th>
            <th className={`${styles['table_head_ceils']}`}>Дисконтированные<br/>потоки</th>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles['table_body_td']}`}>1</td>
              <td className={`${styles['table_body_td']}`}>2</td>
              <td className={`${styles['table_body_td']}`}>3</td>
              <td className={`${styles['table_body_td']}`}>4</td>
              <td className={`${styles['table_body_td']}`}>5</td>
              <td className={`${styles['table_body_td']}`}>6=(2+3+4)*5</td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td colSpan={5} className={`${styles['table_body_td text-align-center']}`}>Ценность использования актива</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`} placeholder='∑'/></td>
            </tr>
          </tbody>
        </table>
        <i><p>i - ставка дисконтирования (средневзвешенная ставка кредитования)</p>
        <p>n-срок дисконтирования (5 лет)</p></i>
        <li className={`${styles['text-align-justify']}`} ><b>Справедливая стоимость за вычетом расходов на продажу</b>, определенная  на основе
        экспертных оценок специалистов на дату оценки составляет <textarea placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> руб.<br/>
        </li>
        <br/>
        <li className={`${styles['text-align-justify']}`}>
          Срок полезного использования (<i>подлежит/ не подлежит пересмотру</i>), срок определить не представляется возможным. 
        </li>
      </ol>
      <div className={`${styles['text-align-justify text-font padding-left']}`}>Профессиональное суждение составил <input className={`${styles['text-font border-bottom ep']}`}/> /должность, подразделение, Ф.И.О./ </div>
      <div className={`${styles['text-align-center  text-font width-100']}`}><i>(подпись)</i></div>
      <div className={`${styles['date']}`}>«<input className={`${styles['small border-bottom text-font']}`}/>»<input className={`${styles['middle border-bottom text-font']}`}/> 20<input className={`${styles['small border-bottom text-font']}`}/>года</div>
      <button ref={ref} onClick = {downloadPdf}>
      Download PDF
      </button>
    </div>
  );
};
