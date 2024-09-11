import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import Header from 'components/Header';
import Hero from './Hero';
import s from './Home.module.scss';

const Home = ({ className }) => {
  return (
    <div className={cx(s.root, className)}>
      <Header />
      <Hero />
      {/* <main className={cx(s.root, className)}>
        <p>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
      </main> */}
    </div>
  );
};

Home.propTypes = {
  className: string,
};

Home.defaultProps = {};

export default React.memo(Home);
