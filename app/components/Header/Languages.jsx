import styles from './_Header.scss';
import React from 'react';
import I18n from '../../constants/i18n/I18n';
import {ButtonToolbar, Button} from 'react-bootstrap';

export default class Languages extends React.Component {

  state = {language: localStorage.userLanguage};

  switchLanguage = (lang) => {
    localStorage.userLanguage = lang;
    this.setState({language: lang});
    I18n.setLocale(lang);
  };

  render() {
    let lang = this.state.language;
    return (
      <ButtonToolbar bsClass={styles.languages}>
        <Button bsSize="small" active={lang === 'ua'} onClick={this.switchLanguage.bind(this, "ua")}>UA</Button>
        <Button bsSize="small" active={lang === 'en'} onClick={this.switchLanguage.bind(this, "en")}>EN</Button>
      </ButtonToolbar>
    );
  }
}
