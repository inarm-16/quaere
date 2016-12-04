import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import I18n from '../constants/i18n/I18n';
import PdfPreviewer from '../components/Links/PdfPreview';
import DocumentTitle from 'react-document-title';

export default class Stages extends React.Component {
  render() {
    return (
      <DocumentTitle title={I18n.t("menu.stages")}>
        <div>
          <PdfPreviewer file={require("../files/stages/Lviv_Kick_Off_April_2016_Minutes.pdf")}
                        name={I18n.t("pages.links.lviv_2016")}/>
          <PdfPreviewer file={require("../files/stages/Meeting_on_WP8.pdf")}
                        name={I18n.t("pages.links.wp8")}/>
          <PdfPreviewer file={require("../files/stages/QUAERE_Kick_off_Agenda.pdf")}
                        name={I18n.t("pages.links.QUAERE_agenda")}/>
          <PdfPreviewer file={require("../files/stages/SA2016_QUAERE.pdf")}
                        name={I18n.t("pages.links.sa_2016")}/>
        </div>
      </DocumentTitle>
    );
  }
}
