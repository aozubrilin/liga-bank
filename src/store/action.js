export const ActionType = {
  CHANGE_CREDIT_TARGET: 'CHANGE_CREDIT_TARGET',
  CHANGE_COST: `CHANGE_COST`,
  CHANGE_INITIAL_FEE: `CHANGE_INITIAL_FEE`,
  CHANGE_DURATION: `CHANGE_DURATION`,
  CHANGE_MATRTNITY_CAPITAL: `CHANGE_MATRTNITY_CAPITAL`,
  CHANGE_USE_CASCO: `CHANGE_USE_CASCO`,
  CHANGE_USE_INSURANCE: `CHANGE_USE_INSURANCE`,
  CHANGE_REQUEST_NUMBER: `CHANGE_REQUEST_NUMBER`,
  CHANGE_PERCENT: `CHANGE_PERCENT`,
  SET_STATE_DEFAULT: `SET_STATE_DEFAULT`,
  SET_IS_REQUEST_FORM_OPEN: `SET_IS_REQUEST_FORM_OPEN`,
  SET_SUCCESS_POPUP_OPEN: `SET_SUCCESS_POPUP_OPEN`,
  SET_LOGIN_POPUP_OPEN: `SET_LOGIN_POPUP_OPEN`,
  SAVE_USER_DATA: `SAVE_USER_DATA`,
  SAVE_LOGIN_DATA: `SAVE_LOGIN_DATA`,
  SET_IS_MENU_OPEN: `SET_IS_MENU_OPEN`,
};

export const setIsCreditTarget = (creditTarget) => ({
  type: ActionType.CHANGE_CREDIT_TARGET,
  payload: creditTarget,
});

export const changeCost = (cost) => ({
  type: ActionType.CHANGE_COST,
  payload: cost,
});

export const changeInitialFee = (fee) => ({
  type: ActionType.CHANGE_INITIAL_FEE,
  payload: fee,
});

export const changeDuration = (duration) => ({
  type: ActionType.CHANGE_DURATION,
  payload: duration,
});

export const changePercent = (percent) => ({
  type: ActionType.CHANGE_PERCENT,
  payload: percent,
});

export const changeMaternityCapital = (flag) => ({
  type: ActionType.CHANGE_MATRTNITY_CAPITAL,
  payload: flag,
});

export const changeUseCasco = (flag) => ({
  type: ActionType.CHANGE_USE_CASCO,
  payload: flag,
});

export const changeUseInsurance = (flag) => ({
  type: ActionType.CHANGE_USE_INSURANCE,
  payload: flag,
});

export const changeRequestNumber = () => ({
  type: ActionType.CHANGE_REQUEST_NUMBER,
});

export const setStateDefault = () => ({
  type: ActionType.SET_STATE_DEFAULT,
});
export const setSuccessPopupOpen = (flag) => ({
  type: ActionType.SET_SUCCESS_POPUP_OPEN,
  payload: flag,
});

export const saveUserData = (userData) => ({
  type: ActionType.SAVE_USER_DATA,
  payload: userData,
});

export const saveLoginData = (loginData) => ({
  type: ActionType.SAVE_LOGIN_DATA,
  payload: loginData,
});

export const setIsRequestFormOpen = (flag) => ({
  type: ActionType.SET_IS_REQUEST_FORM_OPEN,
  payload: flag,
});

export const setIsLoginPopupOpen = (flag) => ({
  type: ActionType.SET_LOGIN_POPUP_OPEN,
  payload: flag,
});

export const setIsMenuOpen = (flag) => ({
  type: ActionType.SET_IS_MENU_OPEN,
  payload: flag,
});
