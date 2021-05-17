import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeCost,
  changeInitialFee,
  changeDuration,
  changeMaternityCapital,
  changeUseCasco,
  changeUseInsurance,
  changePercent,
} from '../../store/action';
import { CreditParams, CreditTarget } from '../../const';
import {
  getTextWithRuble,
  getTextWithYears,
  checkMinMaxValue,
  getNumberWithSpaces,
  getInitialFeePercen,
  getInitialFee,
  isRangeInputValue,
} from '../../utils';
import InputNumber from '../input-number/input-number';
import InputRange from '../input-range/input-range';
import Checkbox from '../checkbox/checkbox';

const CreditStepSecond = ({ target }) => {
  const dispatch = useDispatch();

  const percent = useSelector(({ data }) => data.percent);
  const cost = useSelector(({ data }) => data.cost);
  const initialFee = useSelector(({ data }) => data.initialFee);
  const duration = useSelector(({ data }) => data.duration);
  const useCasco = useSelector(({ data }) => data.useCasco);
  const useInsurance = useSelector(({ data }) => data.useInsurance);
  const useMaternityCapital = useSelector(
    ({ data }) => data.useMaternityCapital
  );
  const isMortage = target === CreditTarget.MORTAGE;
  const creditData = CreditParams[target];

  const isCostValid = isRangeInputValue(
    cost,
    creditData.cost.min,
    creditData.cost.max
  );

  const handlCostChange = (evt) => {
    const value = Number(evt.target.value);
    dispatch(changeCost(value));
  };

  const handlCostValidate = () => {
    if (isCostValid) {
      dispatch(changeCost(cost));
      dispatch(
        changeInitialFee(getInitialFee(creditData.initialFeePercent.min, cost))
      );
      dispatch(changePercent(creditData.initialFeePercent.min));
    }
  };

  const handBattonPlusClick = () => {
    dispatch(changeCost(cost + creditData.cost.step));
    dispatch(
      changeInitialFee(
        getInitialFee(
          creditData.initialFeePercent.min,
          cost + creditData.cost.step
        )
      )
    );
    dispatch(changePercent(creditData.initialFeePercent.min));
  };

  const handBattonMinusClick = () => {
    dispatch(changeCost(cost - creditData.cost.step));
    dispatch(
      changeInitialFee(
        getInitialFee(
          creditData.initialFeePercent.min,
          cost - creditData.cost.step
        )
      )
    );
    dispatch(changePercent(creditData.initialFeePercent.min));
  };

  const handlInitialFeeChange = (evt) => {
    const value = Number(evt.target.value);
    dispatch(changeInitialFee(value));
    dispatch(changePercent(getInitialFeePercen(value, cost)));
  };

  const handlInitialFeeValidate = () => {
    const minValue = getInitialFee(creditData.initialFeePercent.min, cost);
    dispatch(changeInitialFee(checkMinMaxValue(initialFee, minValue, cost)));
    dispatch(changePercent(getInitialFeePercen(initialFee, cost)));
  };

  const handlInitialFeeRangeChange = (evt) => {
    const value = Number(evt.target.value);
    console.log(value);
    dispatch(changePercent(value));
    dispatch(changeInitialFee(getInitialFee(value, cost)));
  };

  const handlDurationChange = (evt) => {
    const value = Number(evt.target.value);
    dispatch(changeDuration(value));
  };

  const handlDurationValidate = () => {
    const minValue = creditData.years.min;
    const maxValue = creditData.years.max;
    dispatch(changeDuration(checkMinMaxValue(duration, minValue, maxValue)));
  };

  const handlDurationChangeRange = (evt) => {
    const value = Number(evt.target.value);
    dispatch(changeDuration(value));
  };

  const handlUseMaternityCapitalClick = (evt) => {
    dispatch(changeMaternityCapital(evt.target.checked));
  };

  const handlUseCascoClick = (evt) => {
    dispatch(changeUseCasco(evt.target.checked));
  };

  const handlUseInsuranceClick = (evt) => {
    dispatch(changeUseInsurance(evt.target.checked));
  };

  return (
    <fieldset className="form-credit__fields form-credit__fields--step-2">
      <legend className="form-credit__legend">
        Шаг 2. Введите параметры кредита
      </legend>
      <div className="form-credit__field">
        <label className="form-credit__label label" htmlFor="cost">
          Стоимость {isMortage ? `недвижимости` : `автомобиля`}
        </label>
        <div className="form-credit__input-operation">
          <InputNumber
            className={`form-credit__input ${
              isCostValid ? `` : `input--invalid`
            }`}
            name="cost"
            value={cost}
            min={creditData.cost.min}
            max={creditData.cost.max}
            step={creditData.cost.step}
            onConvert={getTextWithRuble}
            onBlur={handlCostValidate}
            onChange={handlCostChange}
            isValid={isCostValid}
          />
          <button
            className="form-credit__button-operation form-credit__button-operation--increment"
            type="button"
            aria-label="Прибавить"
            onClick={handBattonPlusClick}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 8h16M8 0v16" stroke="#1F1E25" strokeWidth="2" />
            </svg>
          </button>
          <button
            className="form-credit__button-operation form-credit__button-operation--decrement"
            type="button"
            aria-label="Вычесть"
            onClick={handBattonMinusClick}
          >
            <svg
              width="16"
              height="2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="#1F1E25" strokeWidth="2" d="M0 1h16" />
            </svg>
          </button>
        </div>
        <p className="form-credit__description">
          От {getNumberWithSpaces(creditData.cost.min)} до&nbsp;
          {getNumberWithSpaces(creditData.cost.max)} рублей
        </p>
      </div>

      <div className="form-credit__field">
        <label className="form-credit__label label" htmlFor="initial-cost">
          Первоначальный взнос
        </label>

        <InputNumber
          className="form-credit__input"
          name="initial-cost"
          value={initialFee}
          min={getInitialFee(creditData.initialFeePercent.min, cost)}
          onConvert={getTextWithRuble}
          onBlur={handlInitialFeeValidate}
          onChange={handlInitialFeeChange}
          isValid={true}
        />
        <label className="visually-hidden" htmlFor="cost-percent">
          Выберите первоначальный взнос
        </label>
        <InputRange
          className="form-credit__input-range"
          name="cost-percent"
          value={percent}
          min={creditData.initialFeePercent.min}
          max={creditData.initialFeePercent.max}
          step={creditData.initialFeePercent.step}
          onChange={handlInitialFeeRangeChange}
        />

        <p className="form-credit__description">
          {checkMinMaxValue(
            percent,
            creditData.initialFeePercent.min,
            creditData.initialFeePercent.max
          )}
          %
        </p>
      </div>
      <div className="form-credit__field">
        <label className="form-credit__label label" htmlFor="years">
          Срок кредитования
        </label>
        <InputNumber
          className="form-credit__input"
          name="years"
          value={duration}
          min={creditData.years.min}
          max={creditData.years.max}
          step={creditData.years.step}
          onBlur={handlDurationValidate}
          onConvert={getTextWithYears}
          onChange={handlDurationChange}
          isValid={true}
        />
        <label className="visually-hidden" htmlFor="years-range">
          Выберите срок кредитования
        </label>

        <InputRange
          className="form-credit__input-range"
          name="years-range"
          value={duration}
          min={creditData.years.min}
          max={creditData.years.max}
          step={creditData.years.step}
          onChange={handlDurationChangeRange}
        />
        <p className="form-credit__description">
          <span>{getTextWithYears(creditData.years.min)}</span>
          <span>{getTextWithYears(creditData.years.max)}</span>
        </p>
        {isMortage ? (
          <Checkbox
            name="maternity-capital"
            value={useMaternityCapital}
            onChange={handlUseMaternityCapitalClick}
            title="Использовать материнский капитал"
          />
        ) : (
          <Fragment>
            <Checkbox
              name="casco"
              value={useCasco}
              onChange={handlUseCascoClick}
              title="Оформить КАСКО в нашем банке"
            />
            <Checkbox
              name="insurance"
              value={useInsurance}
              onChange={handlUseInsuranceClick}
              title="Оформить Страхование жизни в нашем банке"
            />
          </Fragment>
        )}
      </div>
    </fieldset>
  );
};

CreditStepSecond.propTypes = {
  target: PropTypes.string.isRequired,
};

export default CreditStepSecond;
