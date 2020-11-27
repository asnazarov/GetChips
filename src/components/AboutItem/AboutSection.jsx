import React from 'react';
import './aboutSection.scss';

const AboutSection = () => {

  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__background"/>
        <div className="about__item">
          <h2 className="about__title">О нас</h2>
          <p className="about__text">
            В 2012 году создан проект, который мог бы объединить в одном окне все предложения дистрибьюторов на
            принципах открытости и высокой степени автоматизации. Это направление получило название GetChips.ru. В 2014
            году состоялся запуск системы, через которую совершаются покупки электронных компонентов. GetChips
            взаимодействует с профессиональными участниками рынка электронных компонентов, предлагая самую актуальную
            информацию по складам глобальных и локальных дистрибьюторов, прозрачные условия и прямую логистику.
          </p>
          <p className="about__text">
            В 2018 году в соответствии с потребностями клиентов мы соединили систему нашего отдела логистики с личным
            кабинетом клиента. Это позволило отслеживать грузы онлайн и автоматически получать информацию о статусе
            груза и конкретную дату поступления на склад.
          </p>
          <p className="about__text">
            С 2020 года в личном кабинете реализована автоматическая загрузка авансовых счет фактур и формирование актов
            сверки, а также постановка счетов в работу через СМС подтверждение. На стадии тестирования находится
            сквозное размещение заказов клиента на склад поставщика посредством electronic data interchange (при
            поддержке со стороны технических специалистов Arrow Electronics и Digi-key Electronics).
          </p>
        </div>
      </div>
      <hr align="center" width="auto" size="1" color="#cccccc"/>
      <div className="about__wrapper">
        <p className="about__text">ООО «ГетЧипс» входит в состав компаний Арвис Групп. Арвис Групп основана в 2008 году
          в Екатеринбурге и работает в 3 офисах в России: Екатеринбург, Москва, Санкт-Петербург, представительстве в
          Гонконге и Шенчжене (КНР). Компания развивалась по модели логистической дистрибьюции и является надежным
          региональным партнером глобальных дистрибьюторов Arrow Electronics, Avnet Electronics, Digi-key Electronics,
          Mouser Electronics, Future Electronics, Rutronik.
        </p>
        <p className="about__text">
          С 2014 года компания расширила штат инженеров и занялась проектными продажами. Оборот группы по результатам
          2019 года превысил 25 миллионов долларов США. Ежемесячно наши специалисты завозят, производят таможенное
          оформление и реализуют на территории России более 6000 наименований электронных компонентов. Количество
          клиентов по результатам 2019 года превысило 800 предприятий и компаний по территории РФ.
        </p>
      </div>
    </section>
  )
}

export default AboutSection;