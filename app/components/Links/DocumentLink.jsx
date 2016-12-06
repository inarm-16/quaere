import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
var Translate = require('react-i18nify').Translate;

export default class DocumentLink extends React.Component {

  static defaultProps = {
    icon: ""
  };

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string
  };

  render() {
    return (
      <p>
        <Button bsStyle="link" target="_blank" href={this.props.src}>
          <Glyphicon glyph={this.props.icon}/> <Translate value={this.props.name}/>
        </Button>
      </p>
    );
  }
}
