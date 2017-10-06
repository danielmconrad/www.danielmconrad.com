import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import styles from './Header.css';

const Header = (props) => (
  <header className={cx(styles.Header, props.className)}>
    <h1>Dan M Conrad</h1>
    <h2>Full Stack Engineer</h2>

    <nav>
      <ul>
        <li>
          <a href="#THELINK">
            <Icon type="gmail" />
            <strong>danmconrad</strong><ins>@gmail.com</ins>
          </a>
        </li>
        <li>
          <a href="#THELINK">
            <Icon type="linkedin" />
            <ins>linkedin.com/in/</ins><strong>danmconrad</strong>
          </a>
        </li>
        <li>
          <a href="#THELINK">
            <Icon type="github" />
            <ins>github.com/</ins><strong>danmconrad</strong>
          </a>
        </li>
        <li>
          <a href="#THELINK">
            <Icon type="medium" />
            <ins>medium.com/@</ins><strong>danmconrad</strong>
          </a>
        </li>
        <li>
          <a href="#THELINK">
            <Icon type="resume" />
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
