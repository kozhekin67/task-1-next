import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import { string } from 'prop-types';

// import reviews from 'src/stubs/reviews';
import travelPhotosRowFirst from 'src/stubs/travelPhotosRowFirst';
import travelPhotosRowSecond from 'src/stubs/travelPhotosRowSecond';
import travelPhotosRowThird from 'src/stubs/travelPhotosRowThird';

import s from './TravelPhotos.module.scss';

const TravelPhotos = ({ className }) => {
  return (
    <section className={cx(s.sectionBlock, className)}>
      <div className={cx(s.sectionName)}>
        <h2 className={cx(s.sectionName__title)}>Фотографии путешествий</h2>
        <p className={cx(s.sectionName__description)}>
          Идейные соображения высшего порядка,
          <br />а также рамки и место обучения кадров
        </p>
      </div>
      <div className={cx(s.container)}>
        {travelPhotosRowFirst.map(({ image, alt }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.rowFirst)}>
            <Image
              src={image}
              className={cx(s.rowFirst__photo)}
              width={1000}
              height={1000}
              alt={alt}
            />
          </div>
        ))}
        {travelPhotosRowSecond.map(({ image, alt }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.rowSecond)}>
            <Image
              src={image}
              className={cx(s.rowSecond__photo)}
              width={1000}
              height={1000}
              alt={alt}
            />
          </div>
        ))}
        {travelPhotosRowFirst.map(({ image, alt }) => (
          // eslint-disable-next-line react/jsx-key
          <div className={cx(s.rowFirst)}>
            <Image
              src={image}
              className={cx(s.rowFirst__photo)}
              width={1000}
              height={1000}
              alt={alt}
            />
          </div>
        ))}
      </div>

      {/* <div class="travel-photos__container container-photos">
                    <div class="container-photos__row container-photos__row_first">
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-first-row-1.jpeg" alt="travel-photos-first-row-1">
                    </div>    
                    <div class="container-photos__row container-photos__row_first">    
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-first-row-2.png" alt="travel-photos-first-row-2">
                    </div>    
                    <div class="container-photos__row container-photos__row_first">
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-first-row-3.png" alt="travel-photos-first-row-3">
                    </div>    
                    <div class="container-photos__row container-photos__row_first">
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-first-row-4.jpeg" alt="travel-photos-first-row-4">
                    </div>

                    <div class="container-photos__row container-photos__row_second">
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-second-row-1.png" alt="travel-photos-second-row-1">
                    </div> 
                    <div class="container-photos__row container-photos__row_second">
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-second-row-2.png" alt="travel-photos-second-row-2">
                    </div> 
                    <div class="container-photos__row container-photos__row_second"> 
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-second-row-3.jpeg" alt="travel-photos-second-row-3">
                    </div> 
                    <div class="container-photos__row container-photos__row_second">   
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-second-row-4.png" alt="travel-photos-second-row-4">
                    </div>  
                    <div class="container-photos__row container-photos__row_second">
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-second-row-5.png" alt="travel-photos-second-row-5">
                    </div>
        
                    <div class="container-photos__row container-photos__row_third">
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-third-row-1.png" alt="travel-photos-second-row-1">
                    </div> 
                    <div class="container-photos__row container-photos__row_third">
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-third-row-2.jpeg" alt="travel-photos-second-row-2">
                    </div> 
                    <div class="container-photos__row container-photos__row_third"> 
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-third-row-3.jpeg" alt="travel-photos-second-row-3">
                    </div> 
                    <div class="container-photos__row container-photos__row_third">   
                        <img class="container-photos__travel-photo" src="img/travel-photos/travel-photos-third-row-4.jpeg" alt="travel-photos-second-row-4">
                    </div> 
            </div> */}
    </section>
  );
};

TravelPhotos.propTypes = {
  className: string,
};

TravelPhotos.defaultProps = {};

export default React.memo(TravelPhotos);
