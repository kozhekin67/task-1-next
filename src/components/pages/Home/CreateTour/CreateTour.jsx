import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import Form from 'components/Form';

import s from 'src/components/pages/Home/CreateTour/CreateTour.module.scss';

const CreateTour = ({ className }) => {
  return (
    <section
      className={cx(s.root, className)}
      id="/questionnaire"
    >
      <div className={s.sectionName}>
        <h2 className={s.sectionName__title}>Собери свой тур</h2>
        <p className={s.sectionName__description}>
          Идейные соображения высшего порядка,
          <br />а также рамки и место обучения кадров
        </p>
      </div>
      <Form />
    </section>
  );
};

CreateTour.propTypes = {
  className: string,
};

export default React.memo(CreateTour);
