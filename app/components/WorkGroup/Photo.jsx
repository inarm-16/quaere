import styles from './_Photo.scss';
import React from 'react';
import {Thumbnail} from 'react-bootstrap';
import I18n from '../../constants/i18n/I18n';
var Translate = require('react-i18nify').Translate;

export default class Photo extends React.Component {

  static defaultProps = {
    src: "",
    person: ""
  };

  static propTypes = {
    src: React.PropTypes.isRequired,
    person: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <Thumbnail alt={I18n.t("pages.workingGroup." + this.props.person + ".name")} src={this.props.src}>
        <h3 className={styles.name}><Translate value={"pages.workingGroup." + this.props.person + ".name"}/></h3>
        <p className={styles.description}>
          <Translate value={"pages.workingGroup." + this.props.person + ".description"}/>
        </p>
      </Thumbnail>
    );
  }
}
