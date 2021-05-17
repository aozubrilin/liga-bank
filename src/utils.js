import { REG_EXP_NAME, REG_EXP_EMAIL, REG_EXP_PHONE } from './const';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getNumberWithSpaces = (num) => {
  return num.toLocaleString('ru-RU');
};

export const getTextWithRuble = (value) => {
  return `${getNumberWithSpaces(value)} рублей`;
};

export const getTextWithYears = (value) => {
  const text = value === 1 ? 'год' : value <= 4 ? 'года' : `лет`;
  return `${value} ${text}`;
};

export const checkMinMaxValue = (value, min, max) => {
  return value < min ? min : value > max ? max : value;
};

export const isRangeInputValue = (value, min, max) => {
  return value >= min && value <= max;
};

export const getInitialFeePercen = (itialFee, cost) =>
  Math.ceil((itialFee * 100) / cost);

export const getInitialFee = (percent, cost) =>
  Math.ceil((percent * cost) / 100);

export const validateField = (fieldName, value) => {
  switch (fieldName) {
    case 'login':
      return !!value && value.length > 0 ? `` : `Заолните поле Логин`;
    case 'password':
      return !!value && value.length > 0 ? `` : `Заолните поле Пароль`;
    case 'name':
      return REG_EXP_NAME.test(value) && value.length > 0
        ? ``
        : `Заолните поле ФИО, не используйте символы и цифры`;
    case 'email':
      return REG_EXP_EMAIL.test(value) ? `` : `Неверно введен E-mail`;
    case 'phone':
      return REG_EXP_PHONE.test(value) ? `` : `Неверно введен номер телефона`;

    default:
      break;
  }
};
