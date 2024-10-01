import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import Header from 'components/Header';
import Hero from './Hero';
import Tours from './Tours';
import CreateTour from './CreateTour';
import s from './Home.module.scss';

const Home = ({ className }) => {
  return (
    <div className={cx(s.root, className)}>
      <Header />
      <Hero />
      <main className={cx(s.mainBlock, className)}>
        <Tours />
        <CreateTour />
      </main>
    </div>
  );
};

Home.propTypes = {
  className: string,
};

Home.defaultProps = {};

export default React.memo(Home);
