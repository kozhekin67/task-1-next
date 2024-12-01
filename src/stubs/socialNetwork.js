import Instagram from 'public/images/svg/Instagramm.svg';
import Facebook from 'public/images/svg/Facebook.svg';
import Vkontakte from 'public/images/svg/Vkontakte.svg';

import s from 'src/components/common/Footer/Footer.module.scss';

const socialNetwork = [
  {
    icon: <Instagram className={s.socialNetworkIcon} />,
    text: 'instagram',
  },
  {
    icon: <Facebook className={s.socialNetworkIcon} />,
    text: 'facebook',
  },
  {
    icon: <Vkontakte className={s.socialNetworkIcon} />,
    text: 'vkontakte',
  },
];

export default socialNetwork;
