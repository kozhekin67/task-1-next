import React from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';

import s from './Input.module.scss';

const Input = ({ className, type, placeholder, register, id }) => {
  return (
    <input
      id={id}
      className={cx(s.root, className)}
      type={type}
      placeholder={placeholder}
      {...register(id, {
        required: true,
      })}
    />
  );
};

Input.propTypes = {
  className: string,
  type: string,
  placeholder: string,
  id: string,
  register: func,
};

Input.defaultProps = {
  type: 'text',
};

export default React.memo(Input);
