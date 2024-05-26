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
      <div className={`${styles['title align_self_center width-100']}`}>ПРОФЕССИОНАЛЬНОЕ СУЖДЕНИЕ<br/>
      ПО ПРОЦЕНТНОЙ СТАВКЕ ПО МИКРОЗАЙМУ, ПРЕДОСТАВЛЕННОМУ <textarea  placeholder="ХХХ" className={`${styles['text-font bold border-none padding-0 textarea-height middle textarea']}`}/><br/>  
      (ДОГОВОР <textarea  placeholder="ХХ ОТ" className={`${styles['text-font bold border-none padding-0 textarea-height middle textarea']}`}/> )</div>
      <div className={`${styles['date']}`}>«<input className={`${styles['small border-bottom text-font']}`}/>»<input className={`${styles['middle border-bottom text-font']}`}/> 20<input className={`${styles['small border-bottom text-font']}`}/>года</div>
      <br/>
      <table className={`${styles['table']}`}>
        <tbody>
          <tr>
            <td className={`${styles['table_body_td']}`}>Отчетная дата, на которую выносится профессиональное суждение</td>
            <td className={`${styles['table_body_td padding-0']}`}>
                <textarea  placeholder="Дата г." className={`${styles['text-font border-none padding-0 textarea-height-1 width-100 textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td className={`${styles['table_body_td']}`}>Объект профессионального суждения</td>
            <td className={`${styles['table_body_td text-align-justify']}`}>Рыночность процентной ставки в размере <input placeholder="1" className={`${styles['small height-100 padding-0 border-none text-align-right text-font']}`}/>
            % по договору микрозайма <textarea  placeholder="XXX от" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
            , предоставленного <textarea  placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
            , на сумму <textarea  placeholder="X" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> на срок <textarea  placeholder="X" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
            , метод признания и учета микрозайма.</td>
          </tr>
          <tr>
            <td className={`${styles['table_body_td']}`}><b>Заключение</b></td>
            <td className={`${styles['table_body_td text-align-justify']}`}>Процентная ставка по договору займа <textarea  placeholder="XXX от" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
            , предоставленного <textarea  placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
            , на сумму <textarea  placeholder="X" className={`${styles['text-font border-none padding-0 textarea-height small textarea']}`}/> на срок составляет <input placeholder="1" className={`${styles['small height-100 padding-0 border-none text-align-right text-font']}`}/>
            %.  <textarea  placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> признает процентную ставку как <b>рыночную</b> и учитывает предоставленный микрозайм <b>линейным методом начисления процентов по амортизированной стоимости</b>.
            </td>
          </tr>
          <tr>
            <td className={`${styles['table_body_td']}`}><b>Обоснование профессионального суждения </b></td>
            <td className={`${styles['table_body_td text-align-justify']}`}>
              В связи с тем, что микрозайм по договору микрозайма <textarea  placeholder="XXX от" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
              , предоставленного <textarea  placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
              , на сумму <textarea  placeholder="X" className={`${styles['text-font border-none padding-0 textarea-height small textarea']}`}/>
              , предоставлен <textarea  
                              placeholder="с использованием целевых средств в рамках государственной поддержки субъектов малого и среднего предпринимательства, YYY действует в рамках Приказ Минэкономразвития России от 26.03.2021 N 142 «Об утверждении требований к реализации мероприятий, осуществляемых субъектами Российской Федерации, бюджетам которых предоставляются субсидии на государственную поддержку малого и среднего предпринимательства, а также физических лиц, применяющих специальный налоговый режим «Налог на профессиональный доход», в субъектах Российской Федерации, направленных на достижение целей, показателей и результатов региональных проектов, обеспечивающих достижение целей, показателей и результатов федеральных проектов, входящих в состав национального проекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы», и требований к организациям, образующим инфраструктуру поддержки субъектов малого и среднего предпринимательства», и требований к организациям, образующим инфраструктуру поддержки субъектов малого и среднего предпринимательства», в соответствии с которым существуют  ограничения по размеру процентной ставки по договору займа." 
                              className={`${styles['text-font border-none padding-0 textarea-width vertical textarea text-align-justify']}`}/>
              <br/>
              В зависимости о наличия обеспечения в форме залога ставка по договору займа по данной категории получателей средств финансовой поддержки не должна превышать <textarea  placeholder="2,5" className={`${styles['text-font border-none padding-0 textarea-height small textarea']}`}/>-кратного размера ключевой ставки Банка России, установленной на дату заключения договора микрозайма с субъектом малого и среднего предпринимательства.
              <br/>
              На момент предоставления микрозайма <textarea  placeholder="XXX" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> ключевая процентная ставка составляет <input placeholder="20" className={`${styles['small height-100 padding-0 border-none text-align-right text-font']}`}/>%.            
              <br/>
              Процентная ставка в размере <input placeholder="20" className={`${styles['small height-100 padding-0 border-none text-align-right text-font']}`}/>%
              , находится в рамках диапазона значений рыночных процентных ставок по выданным микрозаймам по аналогичным продуктам <textarea  placeholder="YYY" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
              . Для <textarea  placeholder="1 квартала" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> <textarea  placeholder="2024" className={`${styles['text-font border-none padding-0 textarea-height textarea']}`}/> года диапазон значений рыночных ставок для данной категории займов составляет <textarea  placeholder="от 0 до 7" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>%.
              <br/>
              На основании вышеизложенного ставка по договору микрозайма <textarea  placeholder="XX от " className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
              , предоставленного <textarea  placeholder="ХХХ" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
              , на сумму <textarea  placeholder="Х" className={`${styles['text-font border-none padding-0 textarea-height small textarea']}`}/>
              , признается рыночной, в связи с чем предоставленный микрозайм признается в учете по амортизированной стоимости.
              <br/>
              На основании расчета по амортизированной стоимости по методу ЭСП установлено, что разница между линейным способом и методом ЭСП составляет <textarea  placeholder="0,01" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/>
              %. Критерий существенности согласно учетной политике определен в размере <textarea  placeholder="10" className={`${styles['text-font border-none padding-0 textarea-height small textarea']}`}/>
              %. На основании вышеизложенного методом начисления процентов выбран линейный метод.
            </td>
          </tr>
        </tbody>
      </table>
      <div className={`${styles['text-align-justify text-font  text-indent']}`}>
        <textarea  placeholder="Начальник финансового отдела:" className={`${styles['text-font border-none padding-0 textarea-height width-100 textarea']}`}/>
      </div>
      <div className={`${styles['text-align-justify text-font  text-indent']}`}>
        <textarea  placeholder="Рассмотрено:" className={`${styles['text-font border-none padding-0 textarea-height width-100 textarea']}`}/>
      </div>
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
}