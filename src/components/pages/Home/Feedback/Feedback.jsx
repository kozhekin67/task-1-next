import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { string } from 'prop-types';

import s from './Feedback.module.scss';

const Feedback = ({ className }) => {
  return (
    <section className={cx(s.email, className)}>
      <Image
        className={s.email__photo}
        src="/images/feedback-photo.jpeg"
        alt="feedback-photo"
        width={370}
        height={370}
      />
      <div className={s.email__block}>
        <h3 className={s.email__subtitleSection}>
          Пора в путешествие вместе с нами!
        </h3>
        <p className={s.email__text}>
          Напиши на почту и узнай подробности на{' '}
          <Link
            className={s.email__link}
            href="mailto:yourtour@gmail.com?subject=Выбор тура&body=Привет, после долгих раздумий я определился с туром и готов сделать заказ"
          >
            yourtour@gmail.com
          </Link>
        </p>
      </div>
    </section>
  );
};

Feedback.propTypes = {
  className: string,
};

export default React.memo(Feedback);
