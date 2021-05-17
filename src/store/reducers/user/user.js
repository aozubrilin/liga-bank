import { ActionType } from '../../action';
import { extend } from '../../../utils';

const initialState = {
  dataUser: {
    name: localStorage.getItem('name') || ``,
    email: localStorage.getItem('email') || ``,
    phone: localStorage.getItem('phone') || ``,
  },

  dataLogin: {
    login: localStorage.getItem('login') || ``,
    password: localStorage.getItem('password') || ``,
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_USER_DATA:
      return extend(state, {
        dataUser: action.payload,
      });
    case ActionType.SAVE_LOGIN_DATA:
      return extend(state, {
        dataLogin: action.payload,
      });
    default:
      return state;
  }
};

export { user };
