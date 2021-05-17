import { extend } from '../../../utils';
import { ActionType } from '../../action';

const initialState = {
  isRequestFormOpen: false,
  isSuccessPopupOpen: false,
  isLoginPopupOpen: false,
  isMenuOpen: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IS_REQUEST_FORM_OPEN:
      return extend(state, {
        isRequestFormOpen: action.payload,
      });
    case ActionType.SET_SUCCESS_POPUP_OPEN:
      return extend(state, {
        isSuccessPopupOpen: action.payload,
      });
    case ActionType.SET_LOGIN_POPUP_OPEN:
      return extend(state, {
        isLoginPopupOpen: action.payload,
      });
    case ActionType.SET_IS_MENU_OPEN:
      return extend(state, {
        isMenuOpen: action.payload,
      });
    default:
      return state;
  }
};

export { app };
