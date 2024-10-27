/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import { useForm, FormProvider } from 'react-hook-form';

import fillingFields from 'src/stubs/fillingFields';

import Dropdown from 'components/Dropdown/Dropdown';
import Button from 'components/Button';

import Link from 'next/link';
import s from './Form.module.scss';

const Form = ({ className }) => {
  const methods = useForm();

  const onSubmit = data => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data));
  };

  const onReset = () => {
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
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
            {...methods.register('name', {
              required: true,
            })}
          />
        </label>
        <label
          className={cx(s.dataField, className)}
          htmlFor="directions"
        >
          Направление
          <Dropdown
            className={cx(s.dropdown, className)}
            {...methods.register('direction', {
              required: true,
            })}
          />
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
                {...methods.register(htmlFor, {
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
            {...methods.register('rating', {
              required: true,
            })}
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
                {...methods.register('adults', {
                  required: true,
                })}
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
                {...methods.register('adults', {
                  required: true,
                })}
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
            {...methods.register('checkbox', {
              required: true,
            })}
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
                onClick={onReset}
              />
            </label>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

Form.propTypes = {
  className: string,
};

export default React.memo(Form);
