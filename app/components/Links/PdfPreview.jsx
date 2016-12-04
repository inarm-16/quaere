import styles from './_Links.scss';
import React from 'react';
import {Button, Modal, Glyphicon} from 'react-bootstrap';
import spdf from 'simple-react-pdf';
var Translate = require('react-i18nify').Translate;

export default class PdfPreview extends React.Component {

  state = {showModal: false};

  static defaultProps = {
    name: ""
  };

  static propTypes = {
    file: React.PropTypes.string.isRequired,
    name: React.PropTypes.string
  };

  close = () => {
    this.setState({showModal: false});
  };

  open = () => {
    this.setState({showModal: true});
  };

  render() {
    return (
      <div>
        <Button bsStyle="link" onClick={this.open}>
          <Glyphicon glyph="file"/> {this.props.name}</Button>
        <Modal show={this.state.showModal} onHide={this.close} dialogClassName={styles.modal}>
          <Modal.Header  bsClass={styles.modal_header} closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
            <Button href={this.props.file} target="_blank">
              <Glyphicon glyph="download-alt"/> <Translate value="pages.links.general.download"/>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <spdf.SimplePDF file={this.props.file}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
