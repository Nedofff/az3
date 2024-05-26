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
      <div className={`${styles['title align_self_center width-100']}`}>ПРОФЕССИОНАЛЬНОЕ СУЖДЕНИЕ <textarea  placeholder="МФО «АРЕНДАТОР»" className={`${styles['text-font bold border-none padding-0 textarea-height textarea-width-1 textarea']}`}/><br/> ПО
      КЛАССИФИКАЦИИ ДОГОВОРА АРЕНДЫ № <input className={`${styles['small border-bottom bold text-font']}`}/></div>
      <div className={`${styles['date']}`}>«<input className={`${styles['small border-bottom text-font']}`}/>»<input className={`${styles['middle border-bottom text-font']}`}/> 20<input className={`${styles['small border-bottom text-font']}`}/>года</div>
      <br/>
      <table className={`${styles['table']}`}>
        <tbody>
          <tr>
            <td colSpan={2} className={`${styles['table_body_td']}`}>Отчетная дата, на которую выносится профессиональное суждение</td>
            <td colSpan={18} className={`${styles['table_body_td padding-0']}`}><textarea  placeholder="Дата г." className={`${styles['text-font border-none padding-0 textarea-height-1 width-100 textarea']}`}/></td>
          </tr>
          <tr>
            <td colSpan={2} className={`${styles['table_body_td']}`}>Объект профессионального суждения</td>
            <td colSpan={18} className={`${styles['table_body_td']}`}>Наличие у договора (далее –Договор), признаков аренды, в соответствии с требованиями Положения Банка России от 22 марта 2018 г. 
            N 635-П «О порядке отражения на счетах бухгалтерского учета договоров аренды некредитными финансовыми организациями». <textarea  placeholder="МФО «АРЕНДАТОР»" className={`${styles['text-font bold border-none padding-0 textarea-height textarea-width-1 textarea']}`}/> выступает Арендатором.</td>
          </tr>
          <tr>
            <td colSpan={2} className={`${styles['table_body_td']}`}>Заключение</td>
            <td colSpan={18} className={`${styles['table_body_td padding-0']}`}>Предмет аренды по договору аренды <input className={`${styles['middle height-100 padding-0 border-none text-font']}`} placeholder='XXX'/> (признается/не признается) в качестве права пользования активом и обязательство по аренде не признается.</td>
          </tr>
          <tr>
            <td colSpan={2} className={`${styles['table_body_td']}`}>Обоснование мнения:</td>
            <td colSpan={18} className={`${styles['table_body_td padding-0']}`}><textarea  placeholder="МФО «АРЕНДАТОР»" className={`${styles['text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/></td>
          </tr>
          <tr className={`${styles['table_head width-100 grey']}`}>
            <td colSpan={1} className={`${styles['table_body_td bold text-align-center']}`}>п.<br/>МСФО<br/>(IFRS)<br/>16</td>
            <td colSpan={13} className={`${styles['table_body_td bold text-align-center']}`}>Событие</td>
            <td colSpan={2} className={`${styles['table_body_td bold text-align-center']}`}>Отметить (да/нет)</td>
            <td colSpan={4} className={`${styles['table_body_td bold text-align-center']}`}>Комментарий</td>
          </tr>
          <tr>
            <td colSpan={20} className={`${styles['table_body_td bold text-align-center']}`}>Понятие аренды</td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            Прил.А<br/>(МСФО 16)
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Договор или часть договора, согласно которому(ой) передается право пользования активом (базовый актив) в течение определенного периода имеет возмездный характер
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`}>
              <textarea  className={`${styles['text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={20} className={`${styles['table_body_td bold text-align-center']}`}>Имеет ли место идентифицированный актив (пункты В13-В20):</td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B13
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Актив, как правило, идентифицируется ввиду прямого указания в договоре. Однако актив также может идентифицироваться на основании косвенного свидетельства в тот момент, когда актив становится доступным для использования клиентом.
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`}>
              <textarea  className={`${styles['text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B13
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Актив, как правило, идентифицируется ввиду прямого указания в договоре. Однако актив также может идентифицироваться на основании косвенного свидетельства в тот момент, когда актив становится доступным для использования клиентом.
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`}>
              <textarea  className={`${styles['text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B14
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Даже если актив напрямую указан, у клиента отсутствует право использовать идентифицированный актив, если поставщик имеет существенное право заменить актив в течение срока использования. Право поставщика на замену актива является существенным только при соблюдении двух следующих условий:
            <br/>(a) поставщик имеет практическую возможность заменить альтернативные активы в течение срока использования (например, клиент не может препятствовать замене актива поставщиком, а у поставщика есть свободный доступ к альтернативным активам либо они могут быть поставлены поставщиком в течение приемлемого периода); и
            <br/>(b) поставщик получит экономическую выгоду от реализации своего права на замену актива (т.е. ожидается, что экономические выгоды, связанные с заменой актива, превысят затраты, связанные с заменой актива).
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B20
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Производительная часть актива является идентифицированным активом, если она отличима с физической точки зрения (например, этаж здания). 
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={20} className={`${styles['table_body_td bold text-align-center']}`}>
              Имеет ли Арендатор право на получение практически всех экономических выгод от использования актива в течение срока использования (пункты В21-В23):
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B21
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Чтобы контролировать использование идентифицированного актива, клиент должен иметь право на получение практически всех экономических выгод от использования актива в течение срока использования (например, ввиду исключительного использования актива в течение такого срока). Клиент может получить экономические выгоды от использования актива напрямую или косвенно различными способами, например, используя актив, удерживая актив или предоставляя его в субаренду. Экономические выгоды от использования актива включают его основную продукцию и побочные продукты (включая потенциальные денежные потоки, полученные от этих объектов), а также прочие экономические выгоды от использования актива, которые могут быть реализованы в результате коммерческой операции с третьим лицом.
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B22
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Оценивая право на получение практически всех экономических выгод от использования актива, организация должна учитывать экономические выгоды, обусловленные использованием актива в рамках определенного объема права клиента на использование актива (см. пункт B30)
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B23
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Если договор требует от клиента выплаты поставщику или другой стороне части денежных потоков, полученных от использования актива, в качестве возмещения, такие денежные потоки, выплачиваемые в качестве возмещения, необходимо считать частью экономических выгод, которые клиент получает от использования актива. 
            <br/>Например, если клиент должен выплатить поставщику процент от продаж в результате использования торговых площадей в качестве возмещения за такое использование, такое требование не препятствует наличию у клиента права на получение практически всех экономических выгод от использования торговых площадей. 
            <br/>Это обусловлено тем, что денежные потоки в результате таких продаж считаются экономическими выгодами, которые клиент получает от использования торговых площадей, часть из которых он впоследствии выплачивает поставщику в качестве возмещения за право использовать такие площади.
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={20} className={`${styles['table_body_td bold text-align-center']}`}>
            Имеет ли Арендатор или Арендодатель право определять то, как и для какой цели используется актив в течение срока использования, либо ни одна из сторон не имеет такого права? См. пункты B25 - B30
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B24
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Клиент имеет право определять способ использования идентифицированного актива в течение срока использования исключительно при соблюдении одного из следующих условий:
            <br/>(a) клиент имеет право определять, как и для какой цели используется актив в течение срока использования (как описано в пунктах B25 - B30); или
            <br/>(b) значимые решения о том, как и для какой цели используется актив, предопределены и:
            <br/>(i) клиент имеет право эксплуатировать актив (или определять способ эксплуатации актива другими лицами по своему усмотрению) в течение срока использования, при этом поставщик не вправе изменять указания по эксплуатации; либо
            <br/>(ii) клиент спроектировал актив (или определенные аспекты актива) таким образом, который предопределяет то, как и для какой цели будет использоваться актив в течение срока использования.
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B25
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Клиент имеет право определять, как и для какой цели используется актив, если в рамках своего права пользования, определенного в договоре, он может изменять то, как и для какой цели используется актив в течение срока использования. Осуществляя такой анализ, организация учитывает права принятия решений, являющиеся наиболее значимыми для изменения того, как и для какой цели используется актив в течение срока использования. Права принятия решений являются значимыми, когда они влияют на экономические выгоды, которые будут получены от использования. Права принятия решений, которые являются наиболее значимыми, вероятнее всего, будут различными для различных договоров в зависимости от характера актива и условий договора.
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B26
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            К примерам прав принятия решений, которые в зависимости от обстоятельств предусматривают право изменять то, как и для какой цели используется актив, в рамках установленного объема права клиента на использование, относятся:
            <br/>(a) права на изменение вида продукции, производимой активом (например, решение использовать грузовой контейнер для транспортировки товаров или для хранения либо решение относительно ассортимента продукции, реализуемой на торговых площадях);
            <br/>(b) права на изменение момента производства продукции (например, решение о моменте использования станка или силовой установки);
            <br/>(c) права на изменение места производства продукции (например, решение о пункте назначения для грузового автомобиля или корабля или решение о месте использования оборудования); и
            <br/>(d) права на изменение решения о выпуске продукции и о количестве такой продукции (например, решение о производстве электроэнергии силовой установкой и о количестве энергии, производимой силовой установкой).
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B27
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            К примерам прав принятия решений, которые не предусматривают права изменять то, как и для какой цели используется актив, относятся права, которые ограничены эксплуатацией или техническим обслуживанием актива. 
            <br/>Такими правами может обладать клиент или поставщик. Несмотря на то, что такие права, как право на эксплуатацию или техническое обслуживание актива, зачастую важны для эффективного использования актива, они не являются правами на определение того, как и для какой цели используется актив, и зачастую зависят от решений относительно того, как и для какой цели используется актив. 
            <br/>Однако права на эксплуатацию актива могут предоставить покупателю право определять способ использования актива, если значимые решения относительно того, как и для какой цели используется актив, предопределены (см. пункт B24(b)(i)).
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B28
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Значимые решения относительно того, как и для какой цели используется актив, могут быть предопределены несколькими способами. 
            <br/>Например, значимые решения могут быть предопределены структурой актива или предусмотренными договором ограничениями на использование актива.
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B29
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Оценивая наличие у клиента права определять способ использования актива, организация должна учитывать исключительно права принятия решений относительно способа использования актива в течение срока использования, за исключением случаев, когда клиент спроектировал актив (или определенные аспекты актива), как описано в пункте B24(b)(ii). 
            <br/>Соответственно, за исключением случаев соблюдения условий пункта B24(b)(ii), организация не должна учитывать решения, которые предопределены до срока использования. 
            <br/>Например, если клиент вправе определить результат от использования актива лишь до начала срока использования, клиент не имеет права определять способ использования такого актива.
            <br/>Возможность определить результат от использования в договоре до начала срока использования и в отсутствие прав на принятие иных решений по использованию актива дает клиенту такие же права, как и в том случае, когда клиент покупает товары или услуги.
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            B30
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Договор может содержать условия, призванные защитить интересы поставщика, связанные с данным активом или другими активами, защитить его персонал или обеспечить соблюдение поставщиком законов или нормативно-правовых актов. 
            <br/>Например, договор может
            <br/>(i) указывать максимальную величину использования актива либо ограничивать место или момент использования актива клиентом, 
            <br/>(ii) требовать от клиента придерживаться определенной практики эксплуатации либо 
            <br/>(iii) требовать от клиента информировать поставщика об изменениях в части того, как будет использоваться актив. 
            <br/><u>Права защиты интересов, как правило, определяют объем права клиента на использование, но сами по себе не препятствуют наличию у клиента права на определение способа использования актива.</u>
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr>
            <td colSpan={20} className={`${styles['table_body_td bold text-align-center']}`}>
            Существенность обязательства по договору аренды из расчета по приведенной стоимости арендных платежей
            </td>
          </tr>
          <tr>
            <td colSpan={1} className={`${styles['table_body_td text-align-center']}`}>
            П.1.6.<br/>612-П
            </td>
            <td colSpan={13} className={`${styles['table_body_td']}`}>
            Дисконтированная стоимость актива в форме права пользования более <input placeholder="1" className={`${styles['small height-100 padding-0 border-none text-align-right text-font']}`}/>% от стоимости активов баланса?
            </td>
            <td colSpan={2} className={`${styles['table_body_td text-align-center']}`}>
              <input className={`${styles['width-100 height-100 padding-0 border-none text-align-center text-font']}`}/>
            </td>
            <td colSpan={4} className={`${styles['table_body_td']}`} valign='top'>
              <textarea  className={`${styles[' text-font border-none padding-0 textarea-height-1 textarea-width textarea']}`}/>
            </td>
          </tr>
          <tr className={`${styles['grey bold']}`}>
            <td colSpan={14} className={`${styles['table_body_td']}`}>ВЫВОД:</td>
            <td colSpan={6} className={`${styles['table_body_td text-align-center']}`}>
              Договор не является арендой
            </td>
          </tr>
        </tbody>
        
      </table>
      <br/>
      <div className={`${styles['text-align-justify text-font  text-indent']}`}>
      На основании вышеизложенного договор аренды нежилого помещения <textarea  placeholder="№ХХХ (не)" className={`${styles['text-font border-none padding-0 textarea-height middle textarea']}`}/> является арендой, согласно критериям (IFRS) 16 «Аренда» и Положения Банка России от 22 марта 2018 г. N 635-П «О порядке отражения на счетах бухгалтерского учета договоров аренды некредитными финансовыми организациями» по следующим признакам:
      </div>
      <br/>
      <div className={`${styles['text-align-justify text-font padding-left']}`}>Профессиональное суждение составил <input className={`${styles['text-font border-bottom ep ']}`}/> (<input className={`${styles['text-font long border-bottom ep ']}`}/>) </div>
      <button ref={ref} onClick = {downloadPdf}>
      Download PDF
      </button>
    </div>
  );
}