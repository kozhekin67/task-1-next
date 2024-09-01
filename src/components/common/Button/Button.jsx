import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './Button.module.scss';

const Button = ({ className, type, text }) => {
  return (
    <button
      className={cx(s.root, className)}
      type={type} // eslint-disable-line
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: string,
  type: string,
};
Button.defaultProps = {
  type: 'button',
};

export default React.memo(Button);
