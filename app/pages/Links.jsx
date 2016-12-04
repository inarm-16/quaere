import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import I18n from '../constants/i18n/I18n';
import DocumentTitle from 'react-document-title';

export default class Links extends React.Component {
  render() {
    return (
      <DocumentTitle title={I18n.t("menu.useful_links")}>
        <div>

          <Button bsStyle="link" target="_blank"
                  href="http://zakon5.rada.gov.ua/laws/show/1556-18">
            <Glyphicon glyph="link"/> {I18n.t("pages.links.law_of_education")}
          </Button>

          <Button bsStyle="link" target="_blank"
                  href={require("../files/links/standards-and-guidelines_for_qa_in_the_ehea_2015.pdf")}>
            <Glyphicon glyph="file"/> {I18n.t("pages.links.standards_and_recommendations")}
          </Button>

          <Button bsStyle="link" target="_blank"
                  href={require("../files/links/Rozvytok_Systemy_Zabezpechennya_Yakosti.pdf")}>
            <Glyphicon glyph="file"/> {I18n.t("pages.links.development_of_quality")}
          </Button>

        </div>
      </DocumentTitle>
    );
  }
}
