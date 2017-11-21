import React from "react";
import {Panel} from "react-bootstrap";

export default class Article extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <Panel header="Вплив проекту INURE на проект QUAERE" bsStyle="info">
          <p>
            Проект INURE був спрямований в першу чергу на адаптацію сучасної європейської методики
            управління університетом в ЄС, заснований на використанні новітніх комп&#39;ютерних та
            управлінських технологій. Крім того, буде розроблено та впроваджено програмне забезпечення
            нового покоління для управління університетом на основі аналізу і обробки інформаційних
            потоків, пристосоване до існуючих систем управління в університетах-партнерах.
          </p>

          <p>
            При розгляді бізнес-процесу забезпечення якості освіти спиратимемося на &quot;Стандарти і
            рекомендації щодо якості вищої освіти в Європейському просторі&quot;, розроблені Європейською
            асоціацією з гарантії якості вищої освіти ENQA за прямим дорученням Конференції міністрів освіти
            європейських країн, що підписали Болонську декларацію.
          </p>

          <p>
            Першим кроком у бізнес-процесі має стати ухвалення в університеті трьох основних документів:
            <ol>
              <li>Стратегії університету щодо постійного підвищення якості освіти;</li>
              <li>Політики гарантування підвищення якості освіти;</li>
              <li>Набору процедур гарантії якості освіти.</li>
            </ol>
          </p>

          <p>
            Ці документи мають бути зареєстровані й знаходитись у відкритому доступі. У політиці університету
            повинні знайти відображення такі пункти:

            <ul>
              <li>співвідношення між навчанням і дослідницькою роботою в освітній установі;</li>
              <li>стратегія ВНЗ щодо якості і стандартів;</li>
              <li>організація системи гарантії якості;</li>
              <li>обов'язки кафедр, шкіл, факультетів й інших організаційних підрозділів, а також персоналу щодо
                гарантії якості;
              </li>
              <li>участь студентів у процедурах гарантії якості;</li>
              <li>методи, за допомогою яких реалізується політика, здійснюється її контроль і перегляд.</li>
            </ul>
          </p>

          <p>
            Надалі бізнес-процес забезпечення якості можна розбити на кілька підпроцесів:

            <ul>
              <li>контроль за розробленням і публікацією запланованих результатів навчання;</li>
              <li>постійний контроль за розробленням навчального плану, складанням і змістом освітніх програм;</li>
              <li>контроль специфічних вимог, що висуваються до різних видів навчання (денне, заочне, дистанційне, Інтернет-навчання) і типів вищої освіти (академічна, виробнича, професійна);</li>
              <li>контроль за доступністю відповідних ресурсів навчання;</li>
              <li>офіційні процедури контролю за ухваленням програм сторонніми органами;</li>
              <li>періодичне оцінювання програм (зокрема, зовнішня експертиза);</li>
              <li>контроль за оцінюванням рівня знань студентів;</li>
              <li>контроль рівня викладання;</li>
              <li>моніторинг успішності і досягнень студентів;</li>
              <li>постійна взаємодія з працедавцями, представниками ринку праці й іншими організаціями;</li>
              <li>участь студентів у процедурах гарантії якості;</li>
              <li>контроль інформування про якість;</li>
              <li>контроль періодичності оцінювання якості.</li>
            </ul>
          </p>

          <p>
            Базуючи роботу над проектом QUAERE на цих заставах, достеменно розроблених в рамках проекту INURE,
            та описаних в <br /> «<a href="https://essuir.sumdu.edu.ua/handle/123456789/47881">Методологічних основах створення, впровадження і розвитку інтегрованої інформаційної
            системи управління університетом</a>», розробка відділу контроля якості університету та його інформаційного
            забезпечення успішно просувається в напрямку Європейського рівня оцінки якості освіти.
          </p>
        </Panel>;
    }
}

Article.propTypes = {};