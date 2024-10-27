import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { string } from 'prop-types';

import travelStoris from 'src/stubs/travelStoris';

import Arrow from 'public/images/svg/Arrow.svg';

import s from './TravelStories.module.scss';

const arrow = (
  <Arrow
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
  />
);

const TravelStories = ({ className }) => {
  return (
    <section
      className={cx(s.sectionBlock, className)}
      id="/travel-stories"
    >
      <div className={cx(s.sectionName)}>
        <h2 className={cx(s.sectionName__title)}>Истории путешествий</h2>
        <p className={cx(s.sectionName__description)}>
          Идейные соображения высшего порядка,
          <br />а также рамки и место обучения кадров
        </p>
      </div>
      <div className={cx(s.block)}>
        {travelStoris.map(({ image, alt, advantages, socialNetwork }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.blockHistory)}>
            <Image
              className={cx(s.blockHistory__foto)}
              src={image}
              alt={alt}
              width={1000}
              height={1000}
            />
            <div className={cx(s.blockHistory__conntent)}>
              <div className={cx(s.blockHistory__name)}>
                <h3 className={cx(s.blockHistory__subtitleSection)}>
                  Автостопом в Стамбул
                </h3>
                <p className={cx(s.blockHistory__description)}>
                  Идейные соображения высшего порядка, а также рамки и место
                  обучения кадров обеспечивает широкому кругу (специалистов)
                  участие в формировании новых предложений:
                </p>
                {advantages}
              </div>
              <div className={cx(s.blockHistory__bottom)}>
                <div className={cx(s.blockHistory__detail)}>
                  <Link
                    className={cx(s.detailedLink)}
                    href="#0"
                  >
                    Подробнее {arrow}
                  </Link>
                </div>
                {socialNetwork}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

TravelStories.propTypes = {
  className: string,
};

TravelStories.defaultProps = {};

export default React.memo(TravelStories);
