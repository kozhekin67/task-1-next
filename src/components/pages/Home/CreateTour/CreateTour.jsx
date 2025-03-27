import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import Title from 'components/Title';
import Form from 'components/Form';

import s from 'src/components/pages/Home/CreateTour/CreateTour.module.scss';

const CreateTour = ({ className }) => {
  return (
    <section
      className={cx(s.root, className)}
      id="/questionnaire"
    >
      <Title
        title="Собери свой тур"
        description="Идейные соображения высшего порядка, а также рамки и место обучения
          кадров"
      />
      <Form />
    </section>
  );
};

CreateTour.propTypes = {
  className: string,
};

export default React.memo(CreateTour);
