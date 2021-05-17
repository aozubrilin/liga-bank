import { extend } from '../../../utils';
import { ActionType } from '../../action';
import { CreditParams } from '../../../const';

const initialState = {
  creditTarget: '',
  cost: 0,
  initialFee: 0,
  duration: 0,
  useMaternityCapital: false,
  useCasco: false,
  useInsurance: false,
  requestNumber: 1,
  percent: 0,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CREDIT_TARGET:
      return extend(state, {
        creditTarget: action.payload,
        cost: CreditParams[action.payload].cost.default,
        initialFee: CreditParams[action.payload].initialFee,
        duration: CreditParams[action.payload].years.min,
        useMaternityCapital: false,
        useCasco: false,
        useInsurance: false,
        percent: CreditParams[action.payload].initialFeePercent.min,
      });
    case ActionType.CHANGE_COST:
      return extend(state, {
        cost: action.payload,
      });
    case ActionType.CHANGE_PERCENT:
      return extend(state, {
        percent: action.payload,
      });
    case ActionType.CHANGE_INITIAL_FEE:
      return extend(state, {
        initialFee: action.payload,
      });
    case ActionType.CHANGE_DURATION:
      return extend(state, {
        duration: action.payload,
      });
    case ActionType.CHANGE_MATRTNITY_CAPITAL:
      return extend(state, {
        useMaternityCapital: action.payload,
      });
    case ActionType.CHANGE_USE_CASCO:
      return extend(state, {
        useCasco: action.payload,
      });
    case ActionType.CHANGE_USE_INSURANCE:
      return extend(state, {
        useInsurance: action.payload,
      });
    case ActionType.SET_STATE_DEFAULT:
      return extend(state, {
        creditTarget: '',
        cost: 0,
        initialFee: 0,
        duration: 0,
        useMaternityCapital: false,
        useCasco: false,
        useInsurance: false,
      });
    case ActionType.CHANGE_REQUEST_NUMBER:
      return extend(state, {
        requestNumber: state.requestNumber + 1,
      });
    default:
      return state;
  }
};

export { data };
