import pkg from '../../package';
const WEB_APP = "/";

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = pkg.name;
export const URL = {
  main: WEB_APP,
  generalInformation: WEB_APP + "general",
  partners: WEB_APP + "partners",
  stagesOfExecution: WEB_APP + "stages",
  usefulLinks: WEB_APP + "links",
  workGroup: WEB_APP + "workGroup",
  nmuInProject: WEB_APP + "NMUinProject"
};
