import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import { string } from 'prop-types';

import reviews from 'src/stubs/reviews';

import s from './Reviews.module.scss';

const Reviews = ({ className }) => {
  return (
    <section
      className={cx(s.sectionBlock, className)}
      id="/reviews"
    >
      <div className={cx(s.sectionName)}>
        <h2 className={cx(s.sectionName__title)}>
          Отзывы наших <br />
          путешественников
        </h2>
        <p className={cx(s.sectionName__description)}>
          Идейные соображения высшего порядка,
          <br />а также рамки и место обучения кадров
        </p>
      </div>
      <div className={cx(s.reviews__block)}>
        {reviews.map(({ text, userName, tourName, userPhoto, alt }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.reviewBlock)}>
            {text}
            {/* <p className={cx(s.reviewBlock__text)}>{text}</p> */}
            <div className={cx(s.reviewBlock__userBlock)}>
              <div className={cx(s.reviewBlock__userBlockName)}>
                <h3 className={cx(s.subtitleSection)}>{userName}</h3>
                <p className={cx(s.reviewBlock__tourName)}>{tourName}</p>
              </div>
              <Image
                className={cx(s.reviewBlock__photo)}
                width={75}
                height={75}
                src={userPhoto}
                alt={alt}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Reviews.propTypes = {
  className: string,
};

Reviews.defaultProps = {};

export default React.memo(Reviews);
