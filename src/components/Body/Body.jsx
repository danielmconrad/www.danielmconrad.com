import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import styles from './Body.css';

const Body = (props) => (
  <div className={cx(styles.Body, props.className)}>
    <section>
      <h2>Who Am I?</h2>

      <p>
        THIS WHOLE SECTION NEEDS TO BE MORE WARM. I am a lifelong technology
        enthusiast, software fanatic, and overall computer dork.
      </p>

      <p>
        Strong technical leader with a focus on lean and agile approaches to
        solving today's product challenges in web development. Innate ability
        to quickly identify underlying business requirements and build
        efficient, scalable, and secure web architectures.
      </p>

      <p>
        Extremely vigilant eye for design implementation and adherence to web
        best-practices, accompanied by ability to construct standards to be
        used by other developers.
      </p>
    </section>

    <section>
      <h2>Recent Work</h2>

      <ul>
        <li>
          <a href="#THELINK">
            <Icon type="medium" />
            Using a PS4 Controller to Move a Robot
          </a>
        </li>
        <li>
          <a href="#THELINK">
            <Icon type="reviewtrackers" />
            Some Article at ReviewTrackers
          </a>
        </li>
        <li>
          <a href="#THELINK">
            <Icon type="medium" />
            DIY Minimalist Weather Display (built in ReactJS and RaspberryPi)
          </a>
        </li>
      </ul>
    </section>
  </div>
);

Body.propTypes = {
  className: PropTypes.string
};

export default Body;
