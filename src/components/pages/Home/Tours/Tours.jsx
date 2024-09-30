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
      id="choosing-tour"
    >
      <div className={cx(s.sectionName)}>
        <h2 className={cx(s.sectionName__title)}>Выбери свой тур</h2>
        <div className={cx(s.block)}>
          <ul className={cx(s.block__list)}>
            {tourOptions.map(({ text }) => (
              // eslint-disable-next-line react/jsx-key
              <li className={cx(s.block__point)}>
                <Button
                  className={cx(s.block__selectionButton)}
                  value={text}
                  text={text}
                  type="submit"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx(s.cards)}>
        {cardTours.map(({ alt, image }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.card)}>
            <Image
              src={image}
              className={cx(s.card__photo)}
              width={1000}
              height={1000}
              alt={alt}
            />
            <div className={cx(s.card__conntent)}>
              <div className={cx(s.card__name)}>
                <h3 className={cx(s.card__subtitleSection)}>
                  Путешествие в горы
                </h3>
                <p className={cx(s.card__cost)}>от 80 000 руб</p>
              </div>
              <div className={cx(s.card__detail)}>
                <Link
                  className={cx(s.detailedLink)}
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

Tours.defaultProps = {};

export default React.memo(Tours);
