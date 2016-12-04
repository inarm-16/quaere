import styles from './_Header.scss';

import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { URL } from '../../constants/AppConstants';
var Translate = require('react-i18nify').Translate;


export default class Menu extends React.Component {

  render() {
    return (
      <Nav bsStyle="tabs">
        <LinkContainer to={URL.generalInformation}>
          <NavItem eventKey={1}><Translate value="menu.general_information"/></NavItem>
        </LinkContainer>
        <LinkContainer to={URL.partners}>
          <NavItem eventKey={2}><Translate value="menu.partners"/></NavItem>
        </LinkContainer>
        <LinkContainer to={URL.stagesOfExecution}>
          <NavItem eventKey={3}><Translate value="menu.stages"/></NavItem>
        </LinkContainer>
        <LinkContainer to={URL.usefulLinks}>
          <NavItem eventKey={4}><Translate value="menu.useful_links"/></NavItem>
        </LinkContainer>
        <LinkContainer to={URL.workGroup}>
          <NavItem eventKey={5}><Translate value="menu.work_group"/></NavItem>
        </LinkContainer>
        <LinkContainer to={URL.nmuInProject}>
          <NavItem eventKey={6}><Translate value="menu.nmu_in_project"/></NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}
