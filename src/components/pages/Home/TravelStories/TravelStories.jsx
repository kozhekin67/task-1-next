import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { string } from 'prop-types';

import Arrow from 'public/images/svg/Arrow.svg';

import s from './TravelStories.module.scss';

const arrow = (
  <Arrow
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
  />
);

const TravelStories = ({ className }) => {
  return (
    <section className={cx(s.sectionBlock, className)}>
      <div className={cx(s.sectionName)}>
        <h2 className={cx(s.sectionName__title)}>Истории путешествий</h2>
        <p className={cx(s.sectionName__description)}>
          Идейные соображения высшего порядка,
          <br />а также рамки и место обучения кадров
        </p>
      </div>
      <div className={cx(s.block)}>
        <div className={cx(s.blockHistory)}>
          <Image
            className={cx(s.blockHistory__foto)}
            // src="img/travel-stories/travel-history-1.png"
            alt="travel-history-1"
            width={1000}
            height={1000}
          />
          <div className={cx(s.blockHistory__conntent)}>
            <div className={cx(s.blockHistory__name)}>
              <h3 className={cx(s.blockHistory__subtitleSection)}>
                Автостопом в Стамбул
              </h3>
              <p className={cx(s.blockHistory__description)}>
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров обеспечивает широкому кругу (специалистов)
                участие в формировании новых предложений:
              </p>
              <ul className={cx(s.blockHistory__advantages)}>
                <li className={cx(s.blockHistory__advantage)}>
                  дешевый транспорт
                </li>
                <li className={cx(s.blockHistory__advantage)}>вкусная еда</li>
                <li className={cx(s.blockHistory__advantage)}>
                  красивый город.
                </li>
              </ul>
            </div>
            <div className={cx(s.blockHistory__bottom)}>
              <div className={cx(s.blockHistory__detail)}>
                <Link
                  className={cx(s.detailedLink)}
                  href="#0"
                >
                  Подробнее {arrow}
                </Link>
              </div>
              {/* <ul class="travel-history__links-social-networks">
                <li>
                  <a
                    class="travel-history__social-network-link"
                    href="#0"
                  >
                    instagram
                  </a>
                </li>

                <li>
                  <a
                    class="travel-history__social-network-link"
                    href="#0"
                  >
                    facebook
                  </a>
                </li>

                {/* <!--<li>
                                    <a href="#0">ВКонтакте</a>
                                </li>-->    

                <li>
                  <a
                    class="travel-history__social-network-link"
                    href="#0"
                  >
                    YouTube
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        {/* <div class="travel-history">
                    <img class="travel-history__foto" src="img/travel-stories/travel-history-2.png" alt="travel-history-2">
                    <div class="travel-history__conntent">
                        <div class="travel-history__name">  
                            <h3 class="travel-history__subtitle-section">Автостопом в Стамбул</h3>
                            <p class="travel-history__description">
                                Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:                            
                            </p>
                            <ul class="travel-history__advantages">
                                <!--
                                <li></li>
                                <li></li>
                                <li></li>
                                -->
                            </ul>
                        </div>
                        <div class="travel-history__bottom">
                            <div class="travel-history__detail">
                                <button class="detailed-button" type="submit" value="Подробнее">Подробнее 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                        <path d="M22.7004 12.2833L16.1535 5.79682C15.7541 5.40106 15.1063 5.40106 14.7068 5.79682C14.3073 6.19266 14.3073 6.83433 14.7068 7.23017L19.5074 11.9865H2.02294C1.45803 11.9865 1 12.4403 1 13C1 13.5596 1.45803 14.0135 2.02294 14.0135H19.5074L14.707 18.7698C14.3075 19.1656 14.3075 19.8073 14.707 20.2032C14.9067 20.4009 15.1686 20.5 15.4304 20.5C15.6921 20.5 15.9539 20.4009 16.1537 20.2032L22.7004 13.7167C23.0999 13.3208 23.0999 12.6792 22.7004 12.2833Z" fill="white"/>
                                    </svg>
                                </button>  
                            </div>   
                            <ul class="travel-history__links-social-networks">
                                <li>
                                    <a class="travel-history__social-network-link" href="#0">instagram</a>
                                </li>
                                <!--<li>
                                    a class="social-network-link" href="#0">facebook</a>
                                </li>-->
                                <li>
                                    <a class="travel-history__social-network-link" href="#0">ВКонтакте</a>
                                </li>
                                <!--<li>
                                    <a class="social-network-link" href="#0">YouTube</a>
                                </li>-->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="travel-history">
                    <img class="travel-history__foto" src="img/travel-stories/travel-history-3.png" alt="travel-history-3">
                    <div class="travel-history__conntent">
                        <div class="travel-history__name"> 
                            <h3 class="travel-history__subtitle-section">Автостопом в Стамбул</h3>
                            <p class="travel-history__description">
                                Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений: 
                            </p>
                            {/* <ul class="travel-history__advantages">
                                <!--
                                <li></li>
                                <li></li>
                                <li></li>
                                -->
                            </ul> 
                        </div>    
                        <div class="travel-history__bottom">
                            <div class="travel-history__detail">
                                <button class="detailed-button" type="submit" value="Подробнее">Подробнее 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                        <path d="M22.7004 12.2833L16.1535 5.79682C15.7541 5.40106 15.1063 5.40106 14.7068 5.79682C14.3073 6.19266 14.3073 6.83433 14.7068 7.23017L19.5074 11.9865H2.02294C1.45803 11.9865 1 12.4403 1 13C1 13.5596 1.45803 14.0135 2.02294 14.0135H19.5074L14.707 18.7698C14.3075 19.1656 14.3075 19.8073 14.707 20.2032C14.9067 20.4009 15.1686 20.5 15.4304 20.5C15.6921 20.5 15.9539 20.4009 16.1537 20.2032L22.7004 13.7167C23.0999 13.3208 23.0999 12.6792 22.7004 12.2833Z" fill="white"/>
                                    </svg>
                                </button>  
                            </div> 
                            <ul class="travel-history__links-social-networks">
                                <li>
                                    <a class="travel-history__social-network-link" href="#0">instagram</a>
                                </li>
                                <li>
                                    <a class="travel-history__social-network-link" href="#0">facebook</a>
                                </li>
                                <li>
                                    <a class="travel-history__social-network-link" href="#0">ВКонтакте</a>
                                </li>
                            </ul>
                        </div>
                    </div>    
                </div> */}
      </div>
    </section>
  );
};

TravelStories.propTypes = {
  className: string,
};

TravelStories.defaultProps = {};

export default React.memo(TravelStories);
