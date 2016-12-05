import styles from './_Header.scss';
import React from 'react';
import I18n from '../../constants/i18n/I18n';
var Translate = require('react-i18nify').Translate;
import Languages from './Languages';
import {Thumbnail, Grid, Row, Col} from 'react-bootstrap';
import Menu from './Menu';

export default class Header extends React.Component {
  render() {
    return (
      <Grid className={styles.header}>
        <Row>
          <Col mdOffset={1} md={3}>
            <Thumbnail href="https://ec.europa.eu/programmes/erasmus-plus/node_en"
                       title={I18n.t("logos.erasmus")}
                       alt={I18n.t("logos.erasmus")}
                       target="_blank"
                       className={styles.logos}
                       src={require('../../images/logos/erasmus_+.jpg')}/>
          </Col>
          <Col md={2}>
            <Thumbnail title={I18n.t("logos.quaere")}
                       alt={I18n.t("logos.quaere")}
                       className={styles.logos}
                       src={require('../../images/logos/quaere.png')}/>
          </Col>
          <Col md={2}>
            <Thumbnail href="http://www.nmu.org.ua/"
                       title={I18n.t("logos.nmu")}
                       alt={I18n.t("logos.nmu")}
                       target="_blank"
                       className={styles.logos}
                       src={require('../../images/logos/nmu.png')}/>
          </Col>
          <Col md={3}>
            <Thumbnail href="http://www.programmer.dp.ua/"
                       title={I18n.t("logos.pzks")}
                       alt={I18n.t("logos.pzks")}
                       target="_blank"
                       className={styles.logos}
                       src={require('../../images/logos/pzks.jpg')}/>
          </Col>
        </Row>
        <Row className={styles.title_row}>
          <Col md={10}>
            <h2 className={styles.site_title}><Translate value="site_name"/></h2>
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
