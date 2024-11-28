/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { string } from 'prop-types';

import YourTur from 'public/images/svg/YourTour.svg';
import navigationPoints from 'src/stubs/navigationPoints';
import smoothScrolling from 'utils/smoothScrolling';

import s from './Header.module.scss';

const Header = ({ className }) => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    if (window.scrollY > 450) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showMenu);
    return () => {
      window.removeEventListener('scroll', showMenu);
    };
  }, []);

  return (
    <header
      id="/header"
      className={cx(s.block, className)}
    >
      <nav className={cx(s.menu, { [s.menu_scroll]: show })}>
        <div className={s.yourTur}>
          <Link
            href="#header"
            className={s.yourTur__link}
            onClick={() => smoothScrolling(`/header`)}
          >
            <YourTur
              className={cx(s.yourTur__img, { [s.yourTur__img_scrool]: show })}
              alt="your-tur__img"
              xmlns="http://www.w3.org/2000/svg"
              width="182"
              height="32"
              viewBox="0 0 182 32"
            />
          </Link>
        </div>
        <div className={cx(s.block__siteSections, s.siteSections)}>
          <ul className={cx(s.siteSections__listSiteSections)}>
            {navigationPoints.map(({ text, id }) => (
              <li>
                <Link
                  className={cx(s.siteSections__link, {
                    [s.siteSections__link_scroll]: show,
                  })}
                  href={`#${id}`}
                  onClick={() => smoothScrolling(`/${id}`)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx(s.block__phoneNumber, s.phoneNumber)}>
          <p>
            <Link
              className={cx(s.phoneNumber__referenceNumber, {
                [s.phoneNumber__referenceNumber_scrool]: show,
              })}
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
