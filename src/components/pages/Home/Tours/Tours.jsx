import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { string } from 'prop-types';

import tourOtions from 'src/stubs/tourOptions';
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
        <div className={cx(s.toursBlock)}>
          <ul className={cx(s.toursBlock__list)}>
            {tourOtions.map(({ href, text }) => (
              // eslint-disable-next-line react/jsx-key
              <li className={cx(s.toursBlock__point)}>
                <Link
                  className={cx(s.toursBlock__link)}
                  href={href}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx(s.tourCards)}>
        {cardTours.map(({ alt, image }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.tourCard)}>
            <Image
              src={image}
              className={cx(s.tourCard__photo)}
              width={1000}
              height={1000}
              alt={alt}
            />
            <div className={cx(s.tourCard__conntent)}>
              <div className={cx(s.tourCard__name)}>
                <h3 className={cx(s.tourCard__subtitleSection)}>
                  Путешествие в горы
                </h3>
                <p className={cx(s.tourCard__cost)}>от 80 000 руб</p>
              </div>
              <div className={cx(s.tourCard__detail)}>
                <Button
                  className={cx(s.detailedButton)}
                  type="submit"
                  value="Подробнее"
                  text="Подробнее"
                  image={arrow}
                />
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
