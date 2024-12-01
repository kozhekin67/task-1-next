import React from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';

import s from './Checkbox.module.scss';

const Checkbox = ({ className, register, id }) => {
  return (
    <input
      id={id}
      className={cx(s.root, className)}
      type={id}
      {...register(id, {
        required: true,
      })}
    />
  );
};

Checkbox.propTypes = {
  className: string,
  type: string,
  id: string,
  register: func,
};

Checkbox.defaultProps = {
  type: 'Checkbox',
};

export default React.memo(Checkbox);
