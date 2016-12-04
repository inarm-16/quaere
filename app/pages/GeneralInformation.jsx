import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import I18n from '../constants/i18n/I18n';
import TextSection from '../components/GeneralInformaion/TextSection';
import DocumentTitle from 'react-document-title';

export default class GeneralInformation extends React.Component {

  state = {sections: I18n.t("pages.generalInformation").sections};

  render() {
    let sections = this.state.sections.map(s => <TextSection section={s} key={s.title}/>);
    return (
      <DocumentTitle title={I18n.t("menu.general_information")}>
        <div>
          {sections}
          <Image src={require('../images/photos/participants.png')} responsive/>
        </div>
      </DocumentTitle>
    );
  }
}
