import styles from './_Page.scss';
import React from 'react';
import Header from './Header/Header.jsx';
import {Grid, Row} from 'react-bootstrap';

export default class Page extends React.Component {
  render() {
    return (
      <Grid>
        <Header/>
        <Row className={styles.page_content}>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}
