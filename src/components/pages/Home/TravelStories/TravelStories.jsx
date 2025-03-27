import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { string } from 'prop-types';

import travelStoris from 'src/stubs/travelStoris';

import Title from 'components/Title/Title';
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
      className={cx(s.root, className)}
      id="/travel-stories"
    >
      <Title
        title="Истории путешествий"
        description="Идейные соображения высшего порядка, а также рамки и место обучения
          кадров"
      />
      <div className={s.blocks}>
        {travelStoris.map(({ image, id, advantages, socialNetwork }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className={s.block}
            key={id}
          >
            <Image
              className={s.foto}
              src={image}
              alt={id}
              width={1000}
              height={1000}
            />
            <div className={s.conntent}>
              <div className={s.name}>
                <h3 className={s.subtitleSection}>Автостопом в Стамбул</h3>
                <p className={s.description}>
                  Идейные соображения высшего порядка, а также рамки и место
                  обучения кадров обеспечивает широкому кругу (специалистов)
                  участие в формировании новых предложений:
                </p>
                {advantages}
              </div>
              <div className={s.bottom}>
                <div className={s.detail}>
                  <Link
                    className={s.detailedLink}
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

export default React.memo(TravelStories);
