import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import Button from 'components/Button';

import s from 'src/components/pages/Home/Hero/Hero.module.scss';

const Hero = ({ className }) => {
  return (
    <div className={cx(s.heroBlock, className)}>
      <div className={cx(s.heroBlock__title, s.title)}>
        <h1 className={cx(s.title__text)}>Идеальные путешествия существуют</h1>
      </div>
      <div className={cx(s.heroBlock__introduction, s.introduction)}>
        <p>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
      </div>
      <Button
        className={cx(s.searchButton)}
        text="Найти тур"
      />
    </div>
  );
};

Hero.propTypes = {
  className: string,
};

Hero.defaultProps = {};

export default React.memo(Hero);
