export const saveUserLoginLocalStorage = (login, password) => {
  localStorage.setItem('login', login);
  localStorage.setItem('password', password);
};

export const saveUserDataLocalStorage = (name, phone, email) => {
  localStorage.setItem('name', name);
  localStorage.setItem('phone', phone);
  localStorage.setItem('email', email);
};
