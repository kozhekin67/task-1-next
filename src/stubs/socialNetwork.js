import cx from 'classnames';

import Instagram from 'public/images/svg/Instagramm.svg';
import Facebook from 'public/images/svg/Facebook.svg';
import Vkontakte from 'public/images/svg/Vkontakte.svg';

import s from 'src/components/common/Footer/Footer.module.scss';

// const instagram = <Instagram className={cx(s.bottom__socialNetworkIcon)} />;

const socialNetwork = [
  {
    icon: <Instagram className={cx(s.bottom__socialNetworkIcon)} />,
    text: 'instagram',
  },
  {
    icon: <Facebook className={cx(s.bottom__socialNetworkIcon)} />,
    text: 'facebook',
  },
  {
    icon: <Vkontakte className={cx(s.bottom__socialNetworkIcon)} />,
    text: 'vkontakte',
  },
  // {
  //   icon: { instagram },
  //   text: 'instagram',
  // },
  // {
  //   icon: { instagram },
  //   text: 'instagram',
  // },
  //   {
  //     icon: <Facebook className={cx(s.bottom__socialNetworkIcon)} />,
  //     text: 'facebook',
  //   },
  //   {
  //     icon: <Vkontakte className={cx(s.bottom__socialNetworkIcon)} />,
  //     text: 'vkontakte',
  //   },
];

export default socialNetwork;
