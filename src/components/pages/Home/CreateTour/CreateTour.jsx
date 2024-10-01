import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

// import Button from 'components/Button';

import s from 'src/components/pages/Home/CreateTour/CreateTour.module.scss';

const CreateTour = ({ className }) => {
  return (
    <section
      className={cx(s.sectionBlock, className)}
      id="questionnaire"
    >
      <div className={cx(s.sectionName)}>
        <h2 className={cx(s.sectionName__title)}>Собери свой тур</h2>
        <p className={cx(s.sectionName__description)}>
          Идейные соображения высшего порядка,
          <br />а также рамки и место обучения кадров
        </p>
      </div>
    </section>
  );
};

CreateTour.propTypes = {
  className: string,
};

CreateTour.defaultProps = {};

export default React.memo(CreateTour);
