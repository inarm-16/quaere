import styles from './_Page.scss';
import React from 'react';
import Header from './Header/Header.jsx';
import {Grid, Row} from 'react-bootstrap';

export default class Page extends React.Component {
  render() {
    return (
      <Grid bsClass={styles.body_container}>
        <Header/>
        <Grid className={styles.page_container}>
          {this.props.children}
        </Grid>
      </Grid>
    );
  }
}
