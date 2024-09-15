/* eslint-disable react/jsx-key */
import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { string } from 'prop-types';

import YourTur from 'public/images/svg/YourTour.svg';
import navigationPoints from 'src/stubs/navigationPoints';

import s from './Header.module.scss';

const Header = ({ className }) => {
  return (
    <header
      id="header"
      className={cx(s.headerBlock, className)}
    >
      <nav className={s.headerMenu}>
        <div className={s.yourTur}>
          <Link
            href="#header"
            className={s.yourTur__link}
          >
            <YourTur
              className={s.yourTur__img}
              alt="your-tur__img"
              xmlns="http://www.w3.org/2000/svg"
              width="182"
              height="32"
              viewBox="0 0 182 32"
              fill="none"
            />
          </Link>
        </div>
        <div className={cx(s.headerBlock__siteSections, s.siteSections)}>
          <ul className={cx(s.siteSections__listSiteSections)}>
            {navigationPoints.map(({ href, text }) => (
              <li>
                <Link
                  className={cx(s.siteSections__sectionLink)}
                  href={href}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx(s.headerBlock__phoneNumber, s.phoneNumber)}>
          <p>
            <Link
              className={cx(s.phoneNumber__referenceNumber)}
              href="tel:+79999999999"
            >
              +7 999 999 99 99
            </Link>
          </p>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: string,
};

Header.defaultProps = {};

export default React.memo(Header);
