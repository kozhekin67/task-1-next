/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
import React from 'react';
import cx from 'classnames';
// import Image from 'next/image';
import Link from 'next/link';
import { string } from 'prop-types';

import tourOtions from 'src/stubs/tourOptions';

// import Arrow from 'public/images/svg/Arrow.svg';
// import cardTourPhoto from '/public/images/headerPhoto.png';
// import Button from 'components/Button';

import s from './Tours.module.scss';

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
      {/* <div className={cx(s.tourCards)}>
        <div className={cx(s.tourCard)}> */}
      {/* <Image
            src='/public/images/headerPhoto.png'
            className={cx(s.tourCard__photo, s.tourCard__photo_vertical)}
            loading="lazy"
            width={100}
            height={100}
            alt="card-tour-photo-1"
          />
          <div className={cx(s.tourCard__conntent)}>
            <div className={cx(s.tourCard__name)}>
              <h3 className={cx(s.tourCard__subtitleSection)}>
                Путешествие в горы
              </h3>
              <p className={cx(s.tourCard__cost)}>от 80 000 руб</p>
            </div>
            <div className={cx(s.tourCard__detail)}>
              <button
                className={cx(s.detailedButton)}
                type="submit"
                value="Подробнее"
              >
                Подробнее
                <Arrow
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                />
              </button>
            </div>
          </div>
        </div> */}
      {/* <div class="tour-card">
                    <img class="tour-card__photo" src="img/tour-cards/card-tour-photo-2.png" alt="card-tour-photo-2">
                    <div class="tour-card__conntent">   
                        <div class="tour-card__name">
                            <h3 class="tour-card__subtitle-section">Путешествие в горы</h3>
                            <p class="tour-card__cost">от 80 000 руб</p>
                        </div>
                        <div class="tour-card__detail">
                            <button class="detailed-button" type="submit" value="Подробнее">Подробнее 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                    <path d="M22.7004 12.2833L16.1535 5.79682C15.7541 5.40106 15.1063 5.40106 14.7068 5.79682C14.3073 6.19266 14.3073 6.83433 14.7068 7.23017L19.5074 11.9865H2.02294C1.45803 11.9865 1 12.4403 1 13C1 13.5596 1.45803 14.0135 2.02294 14.0135H19.5074L14.707 18.7698C14.3075 19.1656 14.3075 19.8073 14.707 20.2032C14.9067 20.4009 15.1686 20.5 15.4304 20.5C15.6921 20.5 15.9539 20.4009 16.1537 20.2032L22.7004 13.7167C23.0999 13.3208 23.0999 12.6792 22.7004 12.2833Z" fill="white"/>
                                </svg>
                            </button> 
                        </div>
                    </div> 
                </div>
                <div class="tour-card">
                    <img class="tour-card__photo" src="img/tour-cards/card-tour-photo-3.png" alt="card-tour-photo-3">
                    <div class="tour-card__conntent">   
                        <div class="tour-card__name">
                            <h3 class="tour-card__subtitle-section">Путешествие в горы</h3>
                            <p class="tour-card__cost">от 80 000 руб</p>
                        </div>
                        <div class="tour-card__detail">
                            <button class="detailed-button" type="submit" value="Подробнее">Подробнее 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                    <path d="M22.7004 12.2833L16.1535 5.79682C15.7541 5.40106 15.1063 5.40106 14.7068 5.79682C14.3073 6.19266 14.3073 6.83433 14.7068 7.23017L19.5074 11.9865H2.02294C1.45803 11.9865 1 12.4403 1 13C1 13.5596 1.45803 14.0135 2.02294 14.0135H19.5074L14.707 18.7698C14.3075 19.1656 14.3075 19.8073 14.707 20.2032C14.9067 20.4009 15.1686 20.5 15.4304 20.5C15.6921 20.5 15.9539 20.4009 16.1537 20.2032L22.7004 13.7167C23.0999 13.3208 23.0999 12.6792 22.7004 12.2833Z" fill="white"/>
                                </svg>
                            </button> 
                        </div>
                    </div> 
                </div>
                <div class="tour-card">
                    <img class="tour-card__photo tour-card__photo_vertical" src="img/tour-cards/card-tour-photo-4.png" alt="card-tour-photo-4">
                    <div class="tour-card__conntent">   
                        <div class="tour-card__name">
                            <h3 class="tour-card__subtitle-section">Путешествие в горы</h3>
                            <p class="tour-card__cost">от 80 000 руб</p>
                        </div>
                        <div class="tour-card__detail">
                            <button class="detailed-button" type="submit" value="Подробнее">Подробнее 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                    <path d="M22.7004 12.2833L16.1535 5.79682C15.7541 5.40106 15.1063 5.40106 14.7068 5.79682C14.3073 6.19266 14.3073 6.83433 14.7068 7.23017L19.5074 11.9865H2.02294C1.45803 11.9865 1 12.4403 1 13C1 13.5596 1.45803 14.0135 2.02294 14.0135H19.5074L14.707 18.7698C14.3075 19.1656 14.3075 19.8073 14.707 20.2032C14.9067 20.4009 15.1686 20.5 15.4304 20.5C15.6921 20.5 15.9539 20.4009 16.1537 20.2032L22.7004 13.7167C23.0999 13.3208 23.0999 12.6792 22.7004 12.2833Z" fill="white"/>
                                </svg>
                            </button> 
                        </div>
                    </div> 
                </div> 
                <div class="tour-card">
                    <img class="tour-card__photo" src="img/tour-cards/card-tour-photo-5.jpeg" alt="card-tour-photo-5">
                    <div class="tour-card__conntent">   
                        <div class="tour-card__name">
                            <h3 class="tour-card__subtitle-section">Путешествие в горы</h3>
                            <p class="tour-card__cost">от 80 000 руб</p>
                        </div>
                        <div class="tour-card__detail">
                            <button class="detailed-button" type="submit" value="Подробнее">Подробнее 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                    <path d="M22.7004 12.2833L16.1535 5.79682C15.7541 5.40106 15.1063 5.40106 14.7068 5.79682C14.3073 6.19266 14.3073 6.83433 14.7068 7.23017L19.5074 11.9865H2.02294C1.45803 11.9865 1 12.4403 1 13C1 13.5596 1.45803 14.0135 2.02294 14.0135H19.5074L14.707 18.7698C14.3075 19.1656 14.3075 19.8073 14.707 20.2032C14.9067 20.4009 15.1686 20.5 15.4304 20.5C15.6921 20.5 15.9539 20.4009 16.1537 20.2032L22.7004 13.7167C23.0999 13.3208 23.0999 12.6792 22.7004 12.2833Z" fill="white"/>
                                </svg>
                            </button> 
                        </div>
                    </div> 
                </div>
                <div class="tour-card">
                    <img class="tour-card__photo" src="img/tour-cards/card-tour-photo-6.png" alt="card-tour-photo-6">
                    <div class="tour-card__conntent">   
                        <div class="tour-card__name">
                            <h3 class="tour-card__subtitle-section">Путешествие в горы</h3>
                            <p class="tour-card__cost">от 80 000 руб</p>
                        </div>
                        <div class="tour-card__detail">
                            <button class="detailed-button" type="submit" value="Подробнее">Подробнее 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                    <path d="M22.7004 12.2833L16.1535 5.79682C15.7541 5.40106 15.1063 5.40106 14.7068 5.79682C14.3073 6.19266 14.3073 6.83433 14.7068 7.23017L19.5074 11.9865H2.02294C1.45803 11.9865 1 12.4403 1 13C1 13.5596 1.45803 14.0135 2.02294 14.0135H19.5074L14.707 18.7698C14.3075 19.1656 14.3075 19.8073 14.707 20.2032C14.9067 20.4009 15.1686 20.5 15.4304 20.5C15.6921 20.5 15.9539 20.4009 16.1537 20.2032L22.7004 13.7167C23.0999 13.3208 23.0999 12.6792 22.7004 12.2833Z" fill="white"/>
                                </svg>
                            </button> 
                        </div>
                    </div> 
                </div> */}
      {/* </div> */}
    </section>
  );
};

Tours.propTypes = {
  className: string,
};

Tours.defaultProps = {};

export default React.memo(Tours);
