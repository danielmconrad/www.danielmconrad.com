import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import styles from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => this.setState({ navVisibility: styles.navVisible }), 500);
  }

  render() {
    return (
      <header
        className={cx(
          styles.Header,
          this.props.className,
          this.state.navVisibility
        )}
      >
        <h1>Dan M Conrad</h1>
        <h2>Full Stack Engineer</h2>

        <nav
          className={cx(styles.nav, this.state.navVisibility)}
        >
          <ul className={styles.navList}>
            <li>
              <a href="mailto:danmconrad@gmail.com">
                <Icon type="google" className={styles.icon} />
                <strong>danmconrad</strong><ins>@gmail.com</ins>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/danmconrad/">
                <Icon type="linkedin" className={styles.icon} />
                <ins>linkedin.com/in/</ins><strong>danmconrad</strong>
              </a>
            </li>
            <li>
              <a href="https://github.com/danmconrad">
                <Icon type="github" className={styles.icon} />
                <ins>github.com/</ins><strong>danmconrad</strong>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@danmconrad">
                <Icon type="medium" className={styles.icon} />
                <ins>medium.com/@</ins><strong>danmconrad</strong>
              </a>
            </li>
            <li>
              <a href="http://cv.danmconrad.com">
                <Icon type="resume" className={styles.icon} />
                <strong>printable resume</strong>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
