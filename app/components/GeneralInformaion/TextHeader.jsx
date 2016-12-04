import React from 'react';

export default class TextHeader extends React.Component {

  static defaultProps = {
    header: ""
  };

  static propTypes = {
    header: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <h2>
        {this.props.header}
      </h2>
    );
  }
}
