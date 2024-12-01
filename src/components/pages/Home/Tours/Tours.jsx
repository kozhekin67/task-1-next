import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { string } from 'prop-types';

import tourOptions from 'src/stubs/tourOptions';
import cardTours from 'src/stubs/cardTours';

import Button from 'components/Button';
import Arrow from 'public/images/svg/Arrow.svg';

import s from './Tours.module.scss';

const arrow = (
  <Arrow
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
  />
);

const Tours = ({ className }) => {
  return (
    <section
      className={cx(s.sectionBlock, className)}
      id="/choosing-tour"
    >
      <div className={s.sectionName}>
        <h2 className={s.sectionName__title}>Выбери свой тур</h2>
        <div className={s.block}>
          <ul className={s.list}>
            {tourOptions.map(({ text, name }) => (
              // eslint-disable-next-line react/jsx-key
              <li
                className={s.point}
                key={name}
              >
                <Button
                  className={s.selectionButton}
                  value={text}
                  text={text}
                  type="submit"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.cards}>
        {cardTours.map(({ id, image }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className={s.card}
            key={id}
          >
            <Image
              src={image}
              className={s.photo}
              width={1000}
              height={1000}
              alt={id}
            />
            <div className={s.conntent}>
              <div className={s.name}>
                <h3 className={s.subtitleSection}>Путешествие в горы</h3>
                <p className={s.cost}>от 80 000 руб</p>
              </div>
              <div className={s.detail}>
                <Link
                  className={s.detailedLink}
                  href="#0"
                >
                  Подробнее {arrow}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Tours.propTypes = {
  className: string,
};

export default React.memo(Tours);
