let I18n = require('react-i18nify').I18n;
import GeneralInformation from './GeneralInformation';
import UsefulLinks from './UsefulLinks';
import Partners from './Partners';
import WorkingGroup from './WorkingGroup';

I18n.setTranslations({
  ua: {
    site_name: 'Система забезпечення якості освіти в Україні',
    logos: {
      pzks: "Кафедра програмного забезпечення комп'ютерних систем",
      nmu: 'Національний гірничий університет',
      erasmus: 'Erasmus+',
      quaere: 'QUAERE'
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
      partners: Partners.ua,
      workingGroup: WorkingGroup.ua
    }
  },
  en: {
    site_name: 'The quality assurance system of education in Ukraine',
    logos: {
      pzks: 'Department of Software Engineering',
      nmu: 'National Mining University',
      erasmus: 'Erasmus+',
      quaere: 'QUAERE'
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
      partners: Partners.en,
      workingGroup: WorkingGroup.en
    }
  }
});

let language = '';

if (localStorage.userLanguage) {
  language = localStorage.userLanguage;
} else {
  let defLanguage = navigator.language;
  if (defLanguage === 'ua' || defLanguage === 'en')
    language = defLanguage;
  else
    language = 'ua';
  localStorage.userLanguage = language;
}

I18n.setLocale(language);

export default I18n;
