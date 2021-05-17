import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setIsCreditTarget } from '../../store/action';
import { CreditTargetLable } from '../../const';

const CreditStepFirst = ({ target }) => {
  const dispatch = useDispatch();
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handlSelectClick = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const handlCreditTargetChange = (value) => {
    dispatch(setIsCreditTarget(value));
  };

  return (
    <fieldset className="form-credit__fields">
      <legend className="form-credit__legend">Шаг 1. Цель кредита</legend>
      <div className="form-credit__field">
        <div
          className={`form-credit__select select ${
            isOpenSelect ? `select--open` : ``
          }`}
          onClick={handlSelectClick}
        >
          <span className="select__option select__option--title">
            {target ? CreditTargetLable[target] : `Выберите цель кредита`}
          </span>
          <svg
            className="select__icon"
            width="18"
            height="11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1l8 8 8-8" stroke="#1F1E25" strokeWidth="2" />
          </svg>
          <ul className="select__options">
            {Object.keys(CreditTargetLable).map((key) => (
              <li
                onClick={() => handlCreditTargetChange(key)}
                key={key}
                className="select__option"
                tabIndex="0"
              >
                {CreditTargetLable[key]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </fieldset>
  );
};

CreditStepFirst.propTypes = {
  target: PropTypes.string.isRequired,
};

export default CreditStepFirst;
