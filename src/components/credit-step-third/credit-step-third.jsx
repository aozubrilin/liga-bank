import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import {
  getTextWithRuble,
  getTextWithYears,
  extend,
  validateField,
} from '../../utils';
import { CreditTarget } from '../../const';
import { saveUserDataLocalStorage } from '../../services/local-storage';
import {
  saveUserData,
  setStateDefault,
  changeRequestNumber,
  setIsRequestFormOpen,
  setSuccessPopupOpen,
} from '../../store/action';

const CreditStepThird = () => {
  const dispatch = useDispatch();

  const target = useSelector(({ data }) => data.creditTarget);
  const cost = useSelector(({ data }) => data.cost);
  const requestNumber = useSelector(({ data }) => data.requestNumber);
  const initialFee = useSelector(({ data }) => data.initialFee);
  const duration = useSelector(({ data }) => data.duration);
  const user = useSelector(({ user }) => user.dataUser);
  const isMortage = target === CreditTarget.MORTAGE;

  const [validError, setValidError] = useState({});
  const [userData, setUserData] = useState({
    name: user.name,
    phone: user.phone,
    email: user.email,
  });

  const [isFieldsEmpty, setIsFieldsEmpty] = useState(false);
  const { name, phone, email } = userData;

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setUserData(extend(userData, { [name]: value }));
    setValidError(extend(validError, { [name]: `` }));
    setIsFieldsEmpty(false);
  };

  const handlSubmitClick = (evt) => {
    evt.preventDefault();

    const isNameError = validateField('name', name);
    const isPhoneError = validateField('phone', phone);
    const isEmailError = validateField('email', email);

    setIsFieldsEmpty(!name && !phone && !email);
    setValidError(
      extend(validError, {
        name: isNameError,
        phone: isPhoneError,
        email: isEmailError,
      })
    );

    if (!isPhoneError && !isEmailError && !isNameError) {
      saveUserDataLocalStorage(name, phone, email);
      dispatch(saveUserData(userData));
      dispatch(setStateDefault());
      dispatch(changeRequestNumber());
      dispatch(setIsRequestFormOpen(false));
      dispatch(setSuccessPopupOpen(true));
    }
  };

  return (
    <div className="calculator__request request">
      <div className="request__wrapper">
        <h3 className="request__title">Шаг 3. Оформление заявки</h3>
        <dl className="request__list">
          <div className="request__item">
            <dt>№ {String(requestNumber).padStart(4, '0')}</dt>
            <dd>Номер заявки</dd>
          </div>
          <div className="request__item">
            <dt>{isMortage ? `Ипотека` : `Автокредит`}</dt>
            <dd>Цель кредита</dd>
          </div>
          <div className="request__item">
            <dt>{getTextWithRuble(cost)}</dt>
            <dd>Стоимость {isMortage ? `недвижимости` : `автомобиля`} </dd>
          </div>
          <div className="request__item">
            <dt>{getTextWithRuble(initialFee)}</dt>
            <dd>Первоначальный взнос</dd>
          </div>
          <div className="request__item">
            <dt>{getTextWithYears(duration)}</dt>
            <dd>Срок кредитования</dd>
          </div>
        </dl>

        <form
          className={`request__form ${
            isFieldsEmpty && 'request__form-miniBounce'
          }`}
        >
          <div className="request__row">
            <label
              className="request__label visually-hidden"
              htmlFor="name"
            ></label>
            <input
              className={`request__input input ${
                validError.name ? `input--invalid` : ``
              }`}
              name="name"
              type="text"
              id="name"
              placeholder="ФИО"
              title="Иванов Иван Иванович"
              required
              value={name}
              autoFocus
              onChange={(evt) => {
                handleFieldChange(evt);
              }}
            ></input>
            <span className="input__error-message">{validError.name}</span>
          </div>

          <div className="request__contacts">
            <div className="request__row">
              <label
                className="request__label visually-hidden"
                htmlFor="phone"
              />
              <NumberFormat
                className={`request__input input ${
                  validError.phone ? `input--invalid` : ``
                }`}
                name="phone"
                type="tel"
                id="phone"
                title="+7 XXX XXX-XX-XX"
                placeholder="Телефон"
                format="+7 (###)-###-##-##"
                mask="_"
                required
                value={phone}
                onChange={(evt) => {
                  handleFieldChange(evt);
                }}
              />
              <span className="input__error-message">{validError.phone}</span>
            </div>
            <div className="request__row">
              <label
                className="request__label visually-hidden"
                htmlFor="email"
              />
              <input
                className={`request__input input ${
                  validError.email ? `input--invalid` : ``
                }`}
                name="email"
                type="email"
                id="email"
                placeholder="E-mail"
                onChange={(evt) => {
                  handleFieldChange(evt);
                }}
                value={email}
                required
              />
              <span className="input__error-message">{validError.email}</span>
            </div>
          </div>

          <button
            className="request__submit"
            type="submit"
            onClick={(evt) => {
              handlSubmitClick(evt);
            }}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreditStepThird;
