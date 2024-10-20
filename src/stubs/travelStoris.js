import cx from 'classnames';
import Link from 'next/link';

import s from 'src/components/pages/Home/TravelStories/TravelStories.module.scss';

const travelStoris = [
  {
    alt: 'travel-history-1',
    image: '/images/travelStories/travel-history-1.png',
    advantages: (
      <ul className={cx(s.blockHistory__advantages)}>
        <li className={cx(s.blockHistory__advantage)}>вкусная еда</li>
        <li className={cx(s.blockHistory__advantage)}>дешевый транспорт</li>
        <li className={cx(s.blockHistory__advantage)}>красивый город.</li>
      </ul>
    ),
    socialNetwork: (
      <ul className={cx(s.blockHistory__linksSocialNetworks)}>
        <li>
          <Link
            className={cx(s.blockHistory__linksSocialNetworksLink)}
            href="#0"
          >
            instagram
          </Link>
        </li>
        <li>
          <Link
            className={cx(s.blockHistory__linksSocialNetworksLink)}
            href="#0"
          >
            facebook
          </Link>
        </li>
        <li>
          <Link
            className={cx(s.blockHistory__linksSocialNetworksLink)}
            href="#0"
          >
            YouTube
          </Link>
        </li>
      </ul>
    ),
  },
  {
    alt: 'travel-history-2',
    image: '/images/travelStories/travel-history-2.png',
    socialNetwork: (
      <ul className={cx(s.blockHistory__linksSocialNetworks)}>
        <li>
          <Link
            className={cx(s.blockHistory__linksSocialNetworksLink)}
            href="#0"
          >
            instagram
          </Link>
        </li>
        <li>
          <Link
            className={cx(s.blockHistory__linksSocialNetworksLink)}
            href="#0"
          >
            Вконтакте
          </Link>
        </li>
      </ul>
    ),
  },

  {
    alt: 'travel-history-3',
    image: '/images/travelStories/travel-history-3.png',
    socialNetwork: (
      <ul className={cx(s.blockHistory__linksSocialNetworks)}>
        <li>
          <Link
            className={cx(s.blockHistory__linksSocialNetworksLink)}
            href="#0"
          >
            instagram
          </Link>
        </li>
        <li>
          <Link
            className={cx(s.blockHistory__linksSocialNetworksLink)}
            href="#0"
          >
            facebook
          </Link>
        </li>
        <li>
          <Link
            className={cx(s.blockHistory__linksSocialNetworksLink)}
            href="#0"
          >
            Вконтакте
          </Link>
        </li>
      </ul>
    ),
  },
];

export default travelStoris;
