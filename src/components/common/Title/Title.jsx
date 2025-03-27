import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './Title.module.scss';

const Title = ({ className, title, description }) => {
  return (
    <div className={cx(s.sectionName, className)}>
      <h2 className={s.sectionName__title}>{title}</h2>
      <p className={s.sectionName__description}>{description}</p>
    </div>
  );
};

Title.propTypes = {
  title: string,
  description: string,
};

export default React.memo(Title);
