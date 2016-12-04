import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import I18n from '../constants/i18n/I18n';
import PdfPreviewer from '../components/Links/PdfPreview';
import DocumentTitle from 'react-document-title';

export default class NMUinProject extends React.Component {
  render() {
    return (
      <DocumentTitle title={I18n.t("menu.nmu_in_project")}>
        <div>
          <Button bsStyle="link" target="_blank"
                  href={require("../files/nmuInProject/Presentation_of_NMU_QUARE_en.pptx")}>
            <Glyphicon glyph="file"/> {I18n.t("pages.links.presentation_of_NMU")}
          </Button>
          <PdfPreviewer file={require("../files/nmuInProject/NMU_structure_and_func_of_internal_qa.pdf")}
                        name={I18n.t("pages.links.NMU_structure_and_functionality")}/>
          <PdfPreviewer file={require("../files/nmuInProject/obespechenie_standartov_obrazovania.pdf")}
                        name={I18n.t("pages.links.article_education_QA")}/>
        </div>
      </DocumentTitle>
    );
  }
}
