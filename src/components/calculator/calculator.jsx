import React from 'react';
import { useSelector } from 'react-redux';
import Offer from '../offer/offer';
import CreditStepFirst from '../credit-step-first/credit-step-first';
import CreditStepSecond from '../credit-step-second/credit-step-second';
import CreditStepThird from '../credit-step-third/credit-step-third';

const Calculator = () => {
  const isRequestFormOpen = useSelector(({ app }) => app.isRequestFormOpen);
  const creditTarget = useSelector(({ data }) => data.creditTarget);

  return (
    <section className="calculator" id="calculator">
      <div className="calculator__wrapper wrapper">
        <h2 className="calculator__title">Кредитный калькулятор</h2>

        <form className="calculator__form form-credit">
          <div className="calculator__params">
            <div className="calculator__steps">
              <CreditStepFirst target={creditTarget} />
              {creditTarget && <CreditStepSecond target={creditTarget} />}
            </div>
            {creditTarget && (
              <Offer className="calculator__offer" target={creditTarget} />
            )}
          </div>
        </form>
        {isRequestFormOpen && <CreditStepThird />}
      </div>
    </section>
  );
};

export default Calculator;
