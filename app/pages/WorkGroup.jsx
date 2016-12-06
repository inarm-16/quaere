import React from 'react';
import {Row, Col} from 'react-bootstrap';
import I18n from '../constants/i18n/I18n';
import DocumentTitle from 'react-document-title';
import Photo from '../components/WorkGroup/Photo';

export default class WorkGroup extends React.Component {
  render() {
    return (
      <DocumentTitle title={I18n.t("menu.work_group")}>
        <div>
          <Row>
            <Col md={4} sm={6}>
              <Photo person="alekseev_m" src={require("../images/photos/alekseev_m.jpg")}/>
            </Col>
            <Col md={4} sm={6}>
              <Photo person="udovyk" src={require("../images/photos/udovyk.jpg")}/>
            </Col>
            <Col md={4} sm={6}>
              <Photo person="us" src={require("../images/photos/us.jpg")}/>
            </Col>
          </Row>
          <Row>
            <Col md={4} sm={6}>
              <Photo person="churikanova" src={require("../images/photos/churikanova.jpg")}/>
            </Col>
            <Col md={4} sm={6}>
              <Photo person="alekseev_a" src={require("../images/photos/alekseev_a.jpg")}/>
            </Col>
            <Col md={4} sm={6}>
              <Photo person="koryashkina" src={require("../images/photos/koryashkina.jpg")}/>
            </Col>
          </Row>
        </div>
      </DocumentTitle>
    );
  }
}
