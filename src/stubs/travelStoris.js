import Link from 'next/link';

import s from 'src/components/pages/Home/TravelStories/TravelStories.module.scss';

const travelStoris = [
  {
    id: 'travel-history-1',
    image: '/images/travelStories/travel-history-1.png',
    advantages: (
      <ul className={s.advantages}>
        <li className={s.advantage}>вкусная еда</li>
        <li className={s.advantage}>дешевый транспорт</li>
        <li className={s.advantage}>красивый город.</li>
      </ul>
    ),
    socialNetwork: (
      <ul className={s.socialNetwork}>
        <li>
          <Link
            className={s.linkSocialNetwork}
            href="#0"
          >
            instagram
          </Link>
        </li>
        <li>
          <Link
            className={s.linkSocialNetwork}
            href="#0"
          >
            facebook
          </Link>
        </li>
        <li>
          <Link
            className={s.linkSocialNetwork}
            href="#0"
          >
            YouTube
          </Link>
        </li>
      </ul>
    ),
  },
  {
    id: 'travel-history-2',
    image: '/images/travelStories/travel-history-2.png',
    socialNetwork: (
      <ul className={s.socialNetwork}>
        <li>
          <Link
            className={s.linkSocialNetwork}
            href="#0"
          >
            instagram
          </Link>
        </li>
        <li>
          <Link
            className={s.linkSocialNetwork}
            href="#0"
          >
            Вконтакте
          </Link>
        </li>
      </ul>
    ),
  },

  {
    id: 'travel-history-3',
    image: '/images/travelStories/travel-history-3.png',
    socialNetwork: (
      <ul className={s.socialNetwork}>
        <li>
          <Link
            className={s.linkSocialNetwork}
            href="#0"
          >
            instagram
          </Link>
        </li>
        <li>
          <Link
            className={s.linkSocialNetwork}
            href="#0"
          >
            facebook
          </Link>
        </li>
        <li>
          <Link
            className={s.linkSocialNetwork}
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
