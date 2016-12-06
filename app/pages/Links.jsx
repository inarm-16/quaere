import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import I18n from '../constants/i18n/I18n';
import DocumentTitle from 'react-document-title';
import DocumentLink from '../components/Links/DocumentLink.jsx';

export default class Links extends React.Component {
  render() {
    return (
      <DocumentTitle title={I18n.t("menu.useful_links")}>
        <div>
          <DocumentLink icon="link"
                        name="pages.links.law_of_education"
                        src="http://zakon5.rada.gov.ua/laws/show/1556-18"/>
          <DocumentLink icon="file"
                        name="pages.links.standards_and_recommendations"
                        src={require("../files/links/standards-and-guidelines_for_qa_in_the_ehea_2015.pdf")}/>
          <DocumentLink icon="file"
                        name="pages.links.development_of_quality"
                        src={require("../files/links/Rozvytok_Systemy_Zabezpechennya_Yakosti.pdf")}/>
        </div>
      </DocumentTitle>
    );
  }
}
