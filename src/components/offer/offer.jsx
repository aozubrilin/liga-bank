import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setIsRequestFormOpen } from '../../store/action';
import { getTextWithRuble, getInitialFeePercen } from '../../utils';
import {
  CreditParams,
  PART_PAYMENT_OF_INCOME,
  MONTS_IN_YEAR,
  MAX_PERCENT,
  CreditTarget,
} from '../../const';

const Offer = ({ className, target }) => {
  const dispatch = useDispatch();
  const cost = useSelector(({ data }) => data.cost);
  const initialFee = useSelector(({ data }) => data.initialFee);
  const duration = useSelector(({ data }) => data.duration);
  const useCasco = useSelector(({ data }) => data.useCasco);
  const useInsurance = useSelector(({ data }) => data.useInsurance);
  const useMaternityCapital = useSelector(
    ({ data }) => data.useMaternityCapital
  );

  const initialFeePercent = getInitialFeePercen(initialFee, cost);
  const isMortage = target === CreditTarget.MORTAGE;
  const creditData = CreditParams[target];

  const onButtonRequestClick = () => {
    dispatch(setIsRequestFormOpen(true));
  };

  const calculateCreditAmount = () => {
    const mortageCreditAmount =
      cost -
      initialFee -
      (useMaternityCapital ? creditData.maternalСapital : 0);
    const autoCreditAmount = cost - initialFee;
    return isMortage ? mortageCreditAmount : autoCreditAmount;
  };

  const getinterestRate = () => {
    const mortageInterestRate =
      initialFeePercent >= creditData.interestRate.boundary
        ? creditData.interestRate.min
        : creditData.interestRate.max;

    const autoInterestRate =
      useCasco && useInsurance
        ? creditData.interestRate.cascoAndLifeInsurance
        : useCasco || useInsurance
        ? creditData.interestRate.cascoOrLifeInsurance
        : cost >= creditData.costBoundary
        ? creditData.interestRate.min
        : creditData.interestRate.max;

    return Number(
      (isMortage ? mortageInterestRate : autoInterestRate).toFixed(5)
    );
  };

  const creditAmount = calculateCreditAmount();
  const interestRate = getinterestRate();
  const monthlyInterestRate = interestRate / MAX_PERCENT / MONTS_IN_YEAR;

  const monthlyPayment = Math.ceil(
    creditAmount *
      (monthlyInterestRate +
        monthlyInterestRate /
          (Math.pow(1 + monthlyInterestRate, duration * MONTS_IN_YEAR) - 1))
  );

  const necessaryIncome = Math.ceil(
    (monthlyPayment * MAX_PERCENT) / PART_PAYMENT_OF_INCOME
  );

  return (
    <section className={`${className} offer`}>
      {creditAmount <= creditData.minCredit ? (
        <div className="offer__wrapper offer__wrapper--message">
          <h3 className="offer__title offer__title--message">
            Наш банк не выдаёт
            {isMortage ? ` ипотечные кредиты` : ` автокредиты `}
            &nbsp;меньше&nbsp;
            {getTextWithRuble(creditData.minCredit)}.
          </h3>
          <p className="offer__messge">
            Попробуйте использовать другие параметры для расчёта.
          </p>
        </div>
      ) : (
        <div className="offer__wrapper">
          <h3 className="offer__title">Наше предложение</h3>
          <dl className="offer__list">
            <div className="offer__item">
              <dt>{getTextWithRuble(creditAmount)}</dt>
              <dd>Сумма {isMortage ? `ипотеки` : `автокредита`}</dd>
            </div>
            <div className="offer__item">
              <dt>{interestRate}%</dt>
              <dd>Процентная ставка</dd>
            </div>
            <div className="offer__item">
              <dt>{getTextWithRuble(monthlyPayment)}</dt>
              <dd>Ежемесячный платеж</dd>
            </div>
            <div className="offer__item">
              <dt>{getTextWithRuble(necessaryIncome)}</dt>
              <dd>Необходимый доход</dd>
            </div>
          </dl>
          <button
            className="offer__button"
            type="button"
            onClick={onButtonRequestClick}
          >
            Оформить заявку
          </button>
        </div>
      )}
    </section>
  );
};

Offer.propTypes = {
  className: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default Offer;
