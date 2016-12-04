import styles from './_Header.scss';
import React from 'react';
import I18n from '../../constants/i18n/I18n';
import Languages from './Languages';
import {Thumbnail, PageHeader, Grid, Row, Col} from 'react-bootstrap';
import Menu from './Menu';

export default class Header extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={2}>
            <PageHeader>QUAERE Erasmus
              <small>+</small>
            </PageHeader>
          </Col>
          <Col md={3}>
            <Thumbnail href="https://ec.europa.eu/programmes/erasmus-plus/node_en"
                       title={I18n.t("logos.erasmus")}
                       alt={I18n.t("logos.erasmus")}
                       target="_blank"
                       src={require('../../images/logos/erasmus_+.jpg')}/>
          </Col>
          <Col md={2}>
            <Thumbnail href="http://www.nmu.org.ua/"
                       title={I18n.t("logos.nmu")}
                       alt={I18n.t("logos.nmu")}
                       target="_blank"
                       src={require('../../images/logos/nmu.png')}/>
          </Col>
          <Col md={3}>
            <Thumbnail href="http://www.programmer.dp.ua/"
                       title={I18n.t("logos.pzks")}
                       alt={I18n.t("logos.pzks")}
                       target="_blank"
                       src={require('../../images/logos/pzks.jpg')}/>
          </Col>
          <Col md={2}>
            <Languages/>
          </Col>
        </Row>
        <Row>
          <Menu/>
        </Row>
      </Grid>
    );
  }
}
