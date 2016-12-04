import React from 'react';
import {Row, Col, Thumbnail} from 'react-bootstrap';
import I18n from '../constants/i18n/I18n';
import DocumentTitle from 'react-document-title';

export default class WorkGroup extends React.Component {
  render() {
    return (
      <DocumentTitle title={I18n.t("menu.work_group")}>
        <div>
          <Row>
            <Col md={3} sm={6}>
              <Thumbnail alt="Удовик Ірина Михайлівна" src={require("../images/photos/Udovik.jpg")}>
                <h3>Удовик Ірина Михайлівна</h3>
                <p>Кандидат физико-математических наук, доцент, зав. кафедри Програмного забезпечення комп’ютерних
                  систем</p>
              </Thumbnail>
            </Col>
            <Col md={3} sm={6}>
              <Thumbnail alt="УС Світлана Альбертівна" src={require("../images/photos/us.jpg")}>
                <h3>УС Світлана Альбертівна</h3>
                <p>Кандидат фізико-математичних наук, доцент, професор кафедри системного аналізу і управління</p>
              </Thumbnail>
            </Col>
            <Col md={3} sm={6}>
              <Thumbnail alt="Чуріканова Олена Юріївна" src={require("../images/photos/churikanova.jpg")}>
                <h3>Чуріканова Олена Юріївна</h3>
                <p>к.е.н. доцент кафедри електронної економіки та економічної кібернетики</p>
              </Thumbnail>
            </Col>
            <Col md={3} sm={6}>
              <Thumbnail alt="Коряшкина Лариса Сергіївна" src={require("../images/photos/koryaskina.jpg")}>
                <h3>Коряшкина Лариса Сергіївна</h3>
                <p>кандидат физико-математичних наук, доцент кафедри кафедри системного аналізу і управління</p>
              </Thumbnail>
            </Col>
          </Row>
        </div>
      </DocumentTitle>
    );
  }
}
