import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import styles from './Header.css';

const Header = (props) => (
  <header className={cx(styles.Header, props.className)}>
    <h1>Daniel M Conrad</h1>
    <h2>Full Stack Engineer</h2>

    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <a href="mailto:danielmconrad@gmail.com">
            <Icon type="google" className={styles.icon} />
            <strong>danielmconrad</strong><ins>@gmail.com</ins>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danielmconrad/">
            <Icon type="linkedin" className={styles.icon} />
            <ins>linkedin.com/in/</ins><strong>danielmconrad</strong>
          </a>
        </li>
        <li>
          <a href="https://github.com/danielmconrad">
            <Icon type="github" className={styles.icon} />
            <ins>github.com/</ins><strong>danielmconrad</strong>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@danielmconrad">
            <Icon type="medium" className={styles.icon} />
            <ins>medium.com/@</ins><strong>danielmconrad</strong>
          </a>
        </li>
        <li>
          <a href="http://cv.danielmconrad.com">
            <Icon type="resume" className={styles.icon} />
            <strong>printable resume</strong>
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
