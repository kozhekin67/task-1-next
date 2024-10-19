import cx from 'classnames';

import s from 'src/components/common/Form/Form.module.scss';

const fillingFields = [
  {
    htmlFor: 'email',
    id: 'email',
    text: 'Email',
    type: 'email',
    placeholder: 'example@mail.com',
    inputField: (
      <input
        className={cx(s.dataField__entry)}
        name="email"
      />
    ),
  },
  {
    htmlFor: 'tel',
    id: 'tel',
    text: 'Телефон',
    type: 'tel',
    placeholder: '+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _',
    inputField: (
      <input
        className={cx(s.dataField__entry)}
        name="tel"
        // ="+7([0-9]{3})-[0-9]{3}-[0-9]{2}-[0-9]{2}"
      />
    ),
  },
  {
    htmlFor: 'date',
    id: 'date-end',
    text: 'Дата от',
    type: 'text',
    placeholder: 'ДД.ММ.ГГГГ',
    inputField: (
      <input
        className={cx(s.dataField__entry)}
        name="date"
      />
    ),
  },
  {
    htmlFor: 'date',
    id: 'date-beginning',
    text: 'Дата до',
    type: 'text',
    placeholder: 'ДД.ММ.ГГГГ',
    inputField: (
      <input
        className={cx(s.dataField__entry)}
        name="date"
      />
    ),
  },
];

export default fillingFields;
