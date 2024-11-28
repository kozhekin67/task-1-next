import React from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';

import s from './Textarea.module.scss';

const Textarea = ({ className, register, id, rows }) => {
  return (
    <textarea
      id={id}
      className={cx(s.root, className)}
      rows={rows}
      {...register(id, {
        required: true,
      })}
    />
  );
};

Textarea.propTypes = {
  className: string,
  rows: string,
  id: string,
  register: func,
};

export default React.memo(Textarea);
