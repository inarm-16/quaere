import React from "react";
import {Button, Glyphicon, Panel} from "react-bootstrap";
import I18n from "../constants/i18n/I18n";
import DocumentTitle from "react-document-title";
import DocumentLink from "../components/Links/DocumentLink.jsx";
import Article from "../components/NMUinProject/Article";

export default class NMUinProject extends React.Component {
  render() {
    return (
      <DocumentTitle title={I18n.t("menu.nmu_in_project")}>
        <div>
          <div>
            <Article/>
          </div>
          <div>
            <h3>{I18n.t("pages.nmuInProject.additionalInfo")}</h3>
            <DocumentLink icon="file"
                          name="pages.links.presentation_of_NMU"
                          src={require("../files/nmuInProject/Presentation_of_NMU_QUARE_en.pptx")}/>
            <DocumentLink icon="file"
                          name="pages.links.NMU_structure_and_functionality"
                          src={require("../files/nmuInProject/NMU_structure_and_func_of_internal_qa.pdf")}/>
            <DocumentLink icon="file"
                          name="pages.links.article_education_QA"
                          src={require("../files/nmuInProject/obespechenie_standartov_obrazovania.pdf")}/>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
