import React from 'react';
import Header from '../Header';
import Body from '../Body';
import styles from './App.css';

const App = () => (
  <div className={styles.App}>
    <Header className={styles.Header} />
    <Body className={styles.Body} />
  </div>
);

export default App;
