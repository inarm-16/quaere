import React from 'react';
import TextHeader from './TextHeader';
import TextParagraph from './TextParagraph';

export default class TextSection extends React.Component {

  static defaultProps = {
    section: {
      title: "",
      paragraphs: []
    }
  };

  static propTypes = {
    section: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      paragraphs: React.PropTypes.array
    })
  };

  render() {
    let s = this.props.section;
    let paragraphs = s.paragraphs.map(p => <TextParagraph text={p} key={s.paragraphs.indexOf(p)}/>);
    return (
      <div>
        <TextHeader header={s.title}/>
        {paragraphs}
      </div>
    );
  }
}
