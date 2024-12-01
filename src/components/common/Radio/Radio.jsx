import React from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';

import s from './Radio.module.scss';

const Radio = ({ className, type, register, id, name }) => {
  return (
    <input
      id={id}
      className={cx(s.root, className)}
      type={type}
      value={id}
      {...register(name, {
        required: true,
      })}
    />
  );
};

Radio.propTypes = {
  className: string,
  type: string,
  id: string,
  name: string,
  register: func,
};

Radio.defaultProps = {
  type: 'radio',
};

export default React.memo(Radio);
