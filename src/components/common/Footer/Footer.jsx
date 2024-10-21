import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { string } from 'prop-types';

import socialNetwork from 'src/stubs/socialNetwork';

import s from './Footer.module.scss';

const Footer = ({ className }) => {
  return (
    <footer className={cx(s.container, className)}>
      <div className={cx(s.bottom)}>
        <p className={cx(s.bottom__description)}>Наши социальные сети</p>
        <ul className={cx(s.bottom__listSocialNetworks)}>
          {socialNetwork.map(({ icon, text }) => (
            // eslint-disable-next-line react/jsx-key
            <li className={cx(s.bottom__socialNetworkItem)}>
              {icon}
              <Link
                className={cx(s.bottom__socialNetworkLink)}
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

Footer.defaultProps = {};

export default React.memo(Footer);
