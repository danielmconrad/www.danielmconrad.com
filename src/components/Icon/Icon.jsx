import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.css';

const Icon = () => (
  <i className={styles.Icon} />
);

Icon.propTypes = {
  className: PropTypes.string
};

export default Icon;
