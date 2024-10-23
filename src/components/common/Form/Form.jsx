/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import { useForm } from 'react-hook-form';

import fillingFields from 'src/stubs/fillingFields';

import Dropdown from 'components/Dropdown/Dropdown';
import Button from 'components/Button';

import Link from 'next/link';
import s from './Form.module.scss';

const Form = ({ className }) => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action="/search"
      className={cx(s.questionnaire__field, className)}
    >
      <label
        htmlFor="name"
        className={cx(s.dataField)}
      >
        Имя
        <input
          id="name"
          className={cx(s.dataField__entry)}
          type="text"
          placeholder="Введите ваше имя"
          {...register('name', {
            required: true,
          })}
        />
      </label>
      <label
        className={cx(s.dataField, className)}
        htmlFor="directions"
      >
        Направление
        <Dropdown className={cx(s.dropdown, className)} />
      </label>
      {fillingFields.map(({ htmlFor, id, text, type, placeholder }) => (
        <>
          <label
            htmlFor={htmlFor}
            className={cx(s.dataField)}
          >
            {text}
            <input
              id={id}
              className={cx(s.dataField__entry)}
              type={type}
              placeholder={placeholder}
              {...register(htmlFor, {
                required: true,
              })}
            />
          </label>
          {/* // <div style={{ height: 70 }}>{errors?.firstName && <p>error!</p>}</div> */}
        </>
      ))}
      <div className={cx(s.comment)}>
        <label htmlFor="rating">Комментарий</label>
        <textarea
          className={cx(s.comment__field)}
          id="rating"
          name="rating"
          rows="5"
        />
      </div>
      <div className={cx(s.radioGroup)}>
        <p>Вам есть 18 лет?</p>
        <div className={cx(s.radioGroup__buttons)}>
          <div className={cx(s.radioGroup__block)}>
            <input
              className={cx(s.radioGroup__customButton)}
              type="radio"
              id="button-yes"
              name="radiobutton"
              value="yes"
            />
            <label
              className={cx(s.radioGroup__button, s.radioGroup__button_yes)}
              htmlFor="button-yes"
            >
              Да
            </label>
          </div>
          <div className={cx(s.radioGroup__block)}>
            <input
              className={cx(s.radioGroup__customButton)}
              type="radio"
              id="button-no"
              name="radiobutton"
              value="no"
            />
            <label
              className={cx(s.radioGroup__button, s.radioGroup__button_no)}
              htmlFor="button-no"
            >
              Нет
            </label>
          </div>
        </div>
      </div>

      <div className={cx(s.agreements)}>
        <input
          className={cx(s.agreements__customButton)}
          type="checkbox"
          id="checkbox"
          name="checkbox"
        />
        <label
          className={cx(s.agreements__button)}
          htmlFor="checkbox"
        >
          <p>
            Нажимая кнопку, я принимаю условия
            <Link
              className={cx(s.agreements__contractReference)}
              href="#0"
            >
              Лицензионного договора
            </Link>
          </p>
        </label>
      </div>
      <div className={cx(s.questionnaireButtons)}>
        <div className={cx(s.questionnaireButtons__searchBlock)}>
          <label htmlFor="button-search">
            <Button
              className={cx(
                s.questionnaireButtons__button,
                s.questionnaireButtons__button_search
              )}
              type="submit"
              id="button-search"
              text="Найти тур"
            />
          </label>
        </div>
        <div className={cx(s.questionnaireButtons__resetBlock)}>
          <label htmlFor="button-reset">
            <Button
              className={cx(
                s.questionnaireButtons__button,
                s.questionnaireButtons__button_reset
              )}
              type="button"
              id="button-reset"
              text="Cбросить"
            />
          </label>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  className: string,
};

export default React.memo(Form);
