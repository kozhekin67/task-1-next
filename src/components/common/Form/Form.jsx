/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import { useForm, FormProvider } from 'react-hook-form';

import fillingFields from 'src/stubs/fillingFields';

import Input from 'components/Input/Input';
import Radio from 'components/Radio/Radio';
import Checkbox from 'components/Checkbox/Checkbox';
import Textarea from 'components/Textarea/Textarea';
import Dropdown from 'components/Dropdown/Dropdown';
import Button from 'components/Button';

import Link from 'next/link';
import s from './Form.module.scss';

const Form = ({ className }) => {
  const methods = useForm();
  const { reset, handleSubmit, register } = methods;

  const onSubmit = data => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data));
  };

  const onReset = () => {
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="/search"
        className={cx(s.root, className)}
      >
        <label
          htmlFor="name"
          className={s.dataField}
        >
          Имя
          <Input
            id="name"
            className={s.entry}
            type="text"
            placeholder="Введите ваше имя"
            register={register}
          />
        </label>
        <label
          className={s.dataField}
          htmlFor="directions"
        >
          Направление
          <Dropdown
            className={s.dropdown}
            {...register('direction', {
              required: true,
            })}
          />
        </label>
        {fillingFields.map(({ htmlFor, id, text, type, placeholder }) => (
          <label
            htmlFor={htmlFor}
            className={s.dataField}
            key={id}
          >
            {text}
            <Input
              id={id}
              className={s.entry}
              type={type}
              placeholder={placeholder}
              register={register}
            />
          </label>
        ))}
        <div className={s.comment}>
          <label htmlFor="rating">Комментарий</label>
          <Textarea
            className={s.comment__field}
            id="rating"
            rows="5"
            register={register}
          />
        </div>
        <div className={s.radioGroup}>
          <p>Вам есть 18 лет?</p>
          <div className={s.radioGroup__buttons}>
            <div className={s.radioGroup__block}>
              <Radio
                className={s.radioGroup__customButton}
                type="radio"
                id="yes"
                value="yes"
                register={register}
                name="adults"
              />
              <label
                className={cx(s.radioGroup__button, s.radioGroup__button_yes)}
                htmlFor="yes"
              >
                Да
              </label>
            </div>
            <div className={s.radioGroup__block}>
              <Radio
                className={s.radioGroup__customButton}
                type="radio"
                id="no"
                value="no"
                register={register}
                name="adults"
              />
              <label
                className={cx(s.radioGroup__button, s.radioGroup__button_no)}
                htmlFor="no"
              >
                Нет
              </label>
            </div>
          </div>
        </div>

        <div className={s.agreements}>
          <Checkbox
            className={s.agreements__customButton}
            id="checkbox"
            register={register}
          />
          <label
            className={s.agreements__button}
            htmlFor="checkbox"
          >
            <p>
              Нажимая кнопку, я принимаю условия
              <Link
                className={s.agreements__contractReference}
                href="#0"
              >
                Лицензионного договора
              </Link>
            </p>
          </label>
        </div>
        <div className={s.processing}>
          <div className={s.processing__searchBlock}>
            <label htmlFor="button-search">
              <Button
                className={cx(
                  s.processing__button,
                  s.processing__button_search
                )}
                type="submit"
                id="button-search"
                text="Найти тур"
              />
            </label>
          </div>
          <div className={s.processing__resetBlock}>
            <label htmlFor="button-reset">
              <Button
                className={cx(s.processing__button, s.processing__button_reset)}
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
