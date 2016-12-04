import styles from './_GeneralInformation.scss';
import React from 'react';

export default class TextParagraph extends React.Component {

  static defaultProps = {
    text: ""
  };

  static propTypes = {
    text: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <p className={styles.paragraph}>
        {this.props.text}
      </p>
    );
  }
}
