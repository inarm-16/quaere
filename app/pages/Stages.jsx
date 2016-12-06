import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import I18n from '../constants/i18n/I18n';
import PdfPreviewer from '../components/Links/DocumentLink';
import DocumentTitle from 'react-document-title';
import DocumentLink from '../components/Links/DocumentLink.jsx';

export default class Stages extends React.Component {
  render() {
    return (
      <DocumentTitle title={I18n.t("menu.stages")}>
        <div>
          <DocumentLink icon="file"
                        name="pages.links.lviv_2016"
                        src={require("../files/stages/Lviv_Kick_Off_April_2016_Minutes.pdf")}/>
          <DocumentLink icon="file"
                        name="pages.links.wp8"
                        src={require("../files/stages/Meeting_on_WP8.pdf")}/>
          <DocumentLink icon="file"
                        name="pages.links.QUAERE_agenda"
                        src={require("../files/stages/QUAERE_Kick_off_Agenda.pdf")}/>
          <DocumentLink icon="file"
                        name="pages.links.sa_2016"
                        src={require("../files/stages/SA2016_QUAERE.pdf")}/>
        </div>
      </DocumentTitle>
    );
  }
}
