import styles from './_Header.scss';
import React from 'react';
import I18n from '../../constants/i18n/I18n';
import {ButtonToolbar, Button} from 'react-bootstrap';

export default class Languages extends React.Component {

  switchLanguage(lang) {
    localStorage.userLanguage = lang;
    I18n.setLocale(lang);
  };

  render() {
    return (
      <ButtonToolbar bsClass={styles.languages}>
        <Button bsSize="small" onClick={this.switchLanguage.bind(this, "ua")}>UA</Button>
        <Button bsSize="small" onClick={this.switchLanguage.bind(this, "ru")}>RU</Button>
        <Button bsSize="small" onClick={this.switchLanguage.bind(this, "en")}>EN</Button>
      </ButtonToolbar>
    );
  }
}
