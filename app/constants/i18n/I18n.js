let I18n = require('react-i18nify').I18n;
import GeneralInformation from './GeneralInformation';
import UsefulLinks from './UsefulLinks';
import Partners from './Partners';

I18n.setTranslations({
  ua: {
    application: {
      title: ""
    },
    logos: {
      pzks: "Кафедра програмного забезпечення комп'ютерних систем",
      nmu: 'Національний гірничий університет',
      erasmus: 'Erasmus+'
    },
    menu: {
      general_information: 'Загальна інформація',
      partners: 'Партнери проекту',
      stages: 'Етапи виконання',
      useful_links: 'Корисні посилання',
      work_group: 'Склад робочої групи від НГУ',
      nmu_in_project: 'НГУ в проекті'
    },
    pages: {
      generalInformation: GeneralInformation.ua,
      links: UsefulLinks.ua,
      partners: Partners.ua
    }
  },
  ru: {
    application: {
      title: ""
    },
    logos: {
      pzks: 'Кафедра программного обеспечения компьютерных систем',
      nmu: 'Национальный горный университет',
      erasmus: 'Erasmus+'
    },
    menu: {
      general_information: 'Общая информация',
      partners: 'Партнеры проекта',
      stages: 'Эапы выполнения',
      useful_links: 'Полезные ссылки',
      work_group: 'Состав рабочей группы от НГУ',
      nmu_in_project: 'НГУ в проекте'
    },
    pages: {
      generalInformation: GeneralInformation.ru,
      links: UsefulLinks.ru,
      partners: Partners.ru
    }
  },
  en: {
    application: {
      title: ""
    },
    logos: {
      pzks: 'Department of Software Engineering',
      nmu: 'National Mining University',
      erasmus: 'Erasmus+'
    },
    menu: {
      general_information: 'General information',
      partners: 'Project partners',
      stages: 'Stages of implementation',
      useful_links: 'Useful links',
      work_group: 'Working group from NMU',
      nmu_in_project: 'NMU in project'
    },
    pages: {
      generalInformation: GeneralInformation.en,
      links: UsefulLinks.en,
      partners: Partners.en
    }
  }
});

let language = '';

if (localStorage.userLanguage) {
  language = localStorage.userLanguage;
} else {
  let defLanguage = navigator.language;
  if (defLanguage === 'ua' || defLanguage === 'ru' || defLanguage === 'en')
    language = defLanguage;
  else
    language = 'ru';
  localStorage.userLanguage = language;
}

I18n.setLocale(language);

export default I18n;
