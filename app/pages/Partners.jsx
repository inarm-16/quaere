import React from 'react';
import {ProjectPartners} from '../constants/ProjectPartners';
import {Button} from 'react-bootstrap';
var Translate = require('react-i18nify').Translate;
import I18n from '../constants/i18n/I18n';
import DocumentTitle from 'react-document-title';

export default class Partners extends React.Component {
  render() {
    let partners = ProjectPartners.map(p =>
      <p>
        <Button bsStyle="link" target="_blank" href={p.link}>
          <Translate value={p.name}/>
        </Button>
      </p>);

    return (
      <DocumentTitle title={I18n.t("menu.partners")}>
        <div>
          {partners}
        </div>
      </DocumentTitle>
    );
  }
}
