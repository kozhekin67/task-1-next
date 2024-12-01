import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { string } from 'prop-types';

import socialNetwork from 'src/stubs/socialNetwork';

import s from './Footer.module.scss';

const Footer = ({ className }) => {
  return (
    <footer className={cx(s.root, className)}>
      <div className={s.block}>
        <p className={s.description}>Наши социальные сети</p>
        <ul className={s.listSocialNetworks}>
          {socialNetwork.map(({ icon, text }) => (
            // eslint-disable-next-line react/jsx-key
            <li
              className={s.socialNetworkItem}
              key={text}
            >
              {icon}
              <Link
                className={s.socialNetworkLink}
                href="#0"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: string,
};

export default React.memo(Footer);
