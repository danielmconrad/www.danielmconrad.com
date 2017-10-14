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
        I'm a lifelong technology enthusiast, software fanatic, and overall computer dork.
      </p>

      <p>
        <strong>Professionally</strong>, I'm a full stack engineer and strong technical leader with a focus on lean and agile approaches to solving today's product challenges. I have a wide range of experience, and an innate ability to quickly identify underlying business requirements and build efficient, scalable, and secure web architectures. I have an extremely vigilant eye for design implementation and adherence to web best-practices, accompanied by a drive to construct team coding standards.
      </p>

      <p>
        <strong>Personally</strong>, I'm a tinkerer, foodie, and volunteer. I spend most of my free time split between woodworking and building furniture, hacking together robots and random electronics, making cheese and experimenting with new cooking techniques, and teaching kids how to code.
      </p>
    </section>

    <section>
      <h2>Recent Work</h2>

      <div className={styles.workItem}>
        <div className={styles.workItemIconContainer}>
          <Icon type="medium" className={styles.Icon} />
        </div>
        <div>
          <a href="https://goo.gl/VEs2mW" className={styles.workItemTitle}>
            DIY Minimalist Weather Display (ReactJS + RaspberryPi)
          </a>
          <p>
            Weather monitors are all over the place. They're one of those
            little projects that countless people post on Reddit. Some have
            integrations with Google Calendars, Twitter accounts, and a ton of
            other neat features. But there's always one major gripe I have
            with them: they're way too busy, and impossible to read from a
            few feat away. I wanted one that I could see and understand from my
            bed…
          </p>
        </div>
      </div>
    </section>
  </div>
);

Body.propTypes = {
  className: PropTypes.string
};

export default Body;
