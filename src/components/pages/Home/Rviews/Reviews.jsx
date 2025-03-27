import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import { string } from 'prop-types';

import reviews from 'src/stubs/reviews';

import Title from 'components/Title';

import s from './Reviews.module.scss';

const Reviews = ({ className }) => {
  return (
    <section
      className={cx(s.root, className)}
      id="/reviews"
    >
      <Title
        title="Отзывы наших путешественников"
        description="Идейные соображения высшего порядка, а также рамки и место обучения
          кадров"
      />
      <div className={s.blocks}>
        {reviews.map(({ text, userName, tourName, userPhoto, id }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className={s.block}
            key={id}
          >
            {text}
            <div className={s.userBlock}>
              <div className={s.userBlockName}>
                <h3 className={s.subtitleSection}>{userName}</h3>
                <p className={s.tourName}>{tourName}</p>
              </div>
              <Image
                className={s.photo}
                width={75}
                height={75}
                src={userPhoto}
                alt={id}
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

export default React.memo(Reviews);
