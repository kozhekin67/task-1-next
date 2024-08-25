import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './Home.module.scss';

const Home = ({ className }) => {
  return <div className={cx(s.root, className)}>Home</div>;
};

Home.propTypes = {
  className: string,
};

Home.defaultProps = {};

export default React.memo(Home);
