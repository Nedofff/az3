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
    <div className={`${styles["page"]}`}>
      <div className={`${styles["title align_self_center"]}`}>Профессиональное суждение № <input className={`${styles['text-font bold small border-none']}`}/><br/>
      по оценке основных средств в целях проверки на обесценение</div>
      <div className={`${styles['date']}`}>«<input className={`${styles['small border-bottom text-font']}`}/>»<input className={`${styles['middle border-bottom text-font']}`}/> 20<input className={`${styles['small border-bottom text-font']}`}/>года</div>
      <div className={`${styles['flex_column width-100 ']}`}>
        <div className={`${styles['align_stretch margin-07']}`}>Наименование оцениваемого основного средства (группы основных средств):</div>
        <div className={`${styles['width-100']}`}><input className={`${styles['width-100 border-bottom text-font']}`}/></div>
        <div className={`${styles['width-100']}`}><input className={`${styles['width-100 border-bottom text-font']}`}/></div>
      </div>
      <br/>
      <ol className={`${styles['ol-bold']}`}>
        <li className={`${styles['text-align-justify']}`} ><b>Объект, учитывался в составе</b> (указать нужное):</li>
        <table className={`${styles['table']}`}>
          <thead className={`${styles['table_head']}`}>
            <th className={`${styles['table_head_ceils']}`}>Номер счета</th>
            <th className={`${styles['table_head_ceils']}`}>Отметить<br/>нужное</th>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles['table_body_td']}`}>№60401  «Основные средства (кроме земли)»</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td']}`}>№ 60804 «Имущество, полученное в финансовую аренду»</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
          </tbody>
        </table>
        <br/>
        <li className={`${styles['text-align-justify']}`}><b>Балансовая стоимость до проведения теста на обесценение основного средства (группы основных средств)</b> составляет <input className={`${styles['border-bottom large text-font']}`}/> руб.</li>
        <table className={`${styles['table']}`}>
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
        <li className={`${styles['text-align-justify']}`}><b>Обесценивались ли основные средства ранее:</b> <i>(указать нужное да/ нет)</i> <input className={`${styles['text-font small border-bottom']}`}/></li>
        Если да, указать стоимость убытка, определенного ранее <input className={`${styles['large text-font border-bottom']}`}/> руб.
        <li><b>Возникали ли следующие события в отчетном периоде:</b></li>
        <table className={`${styles['table']}`}>
          <tbody>
            <tr className={`${styles['table_head']}`}>
              <td className={`${styles['table_head_ceils']}`}>Событие</td>
              <td className={`${styles['table_head_ceils']}`}>Отметить<br/>(да/нет)</td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td text-align-justify']}`}>1. Наличие наблюдаемых признаков того, что стоимость основного средства 
              снизилась в течение периода значительно больше, чем ожидалось с течением 
              времени или при обычном использовании (более 20%);</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/></td>
            </tr>
            <tr>
              <td className={`${styles['table_body_td text-align-justify']}`}>2. Значительные изменения, имеющие неблагоприятные последствия для 
              организации, произошли в течение периода или произойдут в ближайшем 
              будущем в технических, рыночных, экономических или правовых условиях, 
              в которых организация осуществляет деятельность, или на рынке, 
              для которого предназначен актив;</td>
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
        <li className={`${styles['text-align-justify']}`}><b>В случае возникновения вышеописанных ситуаций</b>, определена возмещаемая 
        стоимость, как максимальная из ценности использования и справедливой цены за 
        вычетом расходов на продажу. (указать нужное да/ нет). <input className={`${styles['text-font small border-bottom']}`}/>
        </li>
        <li className={`${styles['text-align-justify']}`}><i>(В случае положительного ответа в п.5 – заполняются, пп.6-8)</i><br/><b>Возмещаемая стоимость объекта составляет <input className={`${styles['text-font border-bottom middle']}`}/> руб.</b> (максимум из п.7 и 
        п.8)</li>
        <li className={`${styles['text-align-justify']}`}>Ценность использования, рассчитанная как сумма дисконтированных будущих потоков денежных средств от рассматриваемого актива, составляет <input className={`${styles['text-font border-bottom large']}`}/>руб.</li>
        <table className={`${styles['table']}`}>
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
              <td colSpan={5} className={`${styles['table_body_td']}`}>Ценность использования актива</td>
              <td className={`${styles['table_body_td padding-0']}`}><input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`} placeholder='∑'/></td>
            </tr>
          </tbody>
        </table>
        <i><p>i - ставка дисконтирования (средневзвешенная ставка кредитования)</p>
        <p>n-срок дисконтирования (5 лет)</p></i>
        <li className={`${styles['text-align-justify']}`} ><b>Справедливая стоимость за вычетом расходов на продажу</b>, определенная  на основе
        экспертных оценок специалистов отдела на дату оценки составляет <input className={`${styles['text-font border-bottom middle']}`}/> руб.<br/>
        <b>Для оценки справедливой стоимости был проведен анализ следующих интернет ресурсов:</b><br/>
        <input className={`${styles['text-font border-bottom width-100']}`}/>
        <input className={`${styles['text-font border-bottom width-100']}`}/>
        <p>Анализ данных интернет ресурсов показал, что средняя стоимость аналогичных активов составляет <input className={`${styles['text-font border-bottom middle']}`}/> руб.</p></li>
        <li className={`${styles['text-align-justify']}`}>Сравнение балансовой стоимости (п.2) и возмещаемой стоимости (п.6) показал, что <b>убыток от
        обесценения</b> признается в размере <input className={`${styles['text-font border-bottom middle']}`}/> руб. (п.2-п.6) /не признается <i>(зачеркнуть не нужное).</i></li>
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
