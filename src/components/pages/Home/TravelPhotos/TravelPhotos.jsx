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
    <section className={cx(s.sectionBlock, className)}>
      <div className={cx(s.sectionName)}>
        <h2 className={cx(s.sectionName__title)}>Фотографии путешествий</h2>
        <p className={cx(s.sectionName__description)}>
          Идейные соображения высшего порядка,
          <br />а также рамки и место обучения кадров
        </p>
      </div>
      <div className={cx(s.container)}>
        {travelPhotosRowFirst.map(({ image, alt }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.container__row, s.container__row_first)}>
            <Image
              src={image}
              className={cx(s.container__photo)}
              width={1000}
              height={1000}
              alt={alt}
            />
          </div>
        ))}
        {travelPhotosRowSecond.map(({ image, alt }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.container__row, s.container__row_second)}>
            <Image
              src={image}
              className={cx(s.container__photo)}
              width={1000}
              height={1000}
              alt={alt}
            />
          </div>
        ))}
        {travelPhotosRowThird.map(({ image, alt }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.container__row, s.container__row_third)}>
            <Image
              src={image}
              className={cx(s.container__photo)}
              width={1000}
              height={1000}
              alt={alt}
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

TravelPhotos.defaultProps = {};

export default React.memo(TravelPhotos);
