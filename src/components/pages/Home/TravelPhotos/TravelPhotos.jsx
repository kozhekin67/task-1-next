import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import { string } from 'prop-types';

import travelPhotosRowFirst from 'src/stubs/travelPhotosRowFirst';
import travelPhotosRowSecond from 'src/stubs/travelPhotosRowSecond';
import travelPhotosRowThird from 'src/stubs/travelPhotosRowThird';

import s from './TravelPhotos.module.scss';

const TravelPhotos = ({ className }) => {
  return (
    <section className={cx(s.root, className)}>
      <div className={s.sectionName}>
        <h2 className={s.sectionName__title}>Фотографии путешествий</h2>
        <p className={s.sectionName__description}>
          Идейные соображения высшего порядка,
          <br />а также рамки и место обучения кадров
        </p>
      </div>
      <div className={s.container}>
        {travelPhotosRowFirst.map(({ image, id }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className={cx(s.row, s.row_first)}
            key={id}
          >
            <Image
              src={image}
              className={s.photo}
              width={1000}
              height={1000}
              alt={id}
            />
          </div>
        ))}
        {travelPhotosRowSecond.map(({ image, id }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className={cx(s.row, s.row_second)}
            key={id}
          >
            <Image
              src={image}
              className={s.photo}
              width={1000}
              height={1000}
              alt={id}
            />
          </div>
        ))}
        {travelPhotosRowThird.map(({ image, id }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className={cx(s.row, s.row_third)}
            key={id}
          >
            <Image
              src={image}
              className={s.photo}
              width={1000}
              height={1000}
              alt={id}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

TravelPhotos.propTypes = {
  className: string,
};

export default React.memo(TravelPhotos);
