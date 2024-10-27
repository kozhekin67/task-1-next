import React, { useState } from 'react';
import cx from 'classnames';
import { string } from 'prop-types';
import { useFormContext } from 'react-hook-form';

import useClickOutside from 'hooks/useClickOutside';
import dropDownListOptions from 'src/stubs/dropDownListOptions';

import DropdownArrow from 'public/images/svg/DropdownArrow.svg';

import s from './Dropdown.module.scss';

const Dropdown = ({ className, name }) => {
  const { setValue } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const placeholder = 'Куда хотите ехать';
  const dropdownRef = useClickOutside(() => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 50);
    }
  });

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectingAnItem = (value, label) => {
    if (value === 'reset') {
      setSelectedValue('');
      setValue(name, '');
      setIsOpen(() => setIsOpen(false));
    } else {
      setSelectedValue(label);
      setValue(name, label);
      setIsOpen(() => setIsOpen(false));
    }
    setIsOpen(!false);
  };

  return (
    <div className={cx(s.dropdown, className)}>
      <div
        className={cx(s.dropdown__button)}
        id="direction"
        onClick={toggleDropdown}
        style={{ color: selectedValue ? 'black' : '#a6a6a6' }}
      >
        {selectedValue || placeholder}
      </div>
      <DropdownArrow className={cx(s.dropdown__arrow)} />
      {isOpen && (
        <ul
          className={cx(s.dropdown__list)}
          ref={dropdownRef}
        >
          {dropDownListOptions.map(({ value, label }) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              className={cx(s.dropdown__listItem)}
              key={label}
              onClick={() => selectingAnItem(value, label)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  className: string,
  name: string.isRequired,
};

Dropdown.defaultProps = {};

export default React.memo(Dropdown);
