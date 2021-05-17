import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ESC_CODE } from '../../const';
import { setSuccessPopupOpen } from '../../store/action';
import CloseButton from '../close-button/close-button';
import PopUp from '../pop-up/pop-up';

const SuccessPopup = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('keydown', onEscButtonPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEscButtonPress = (evt) => {
    if (evt.keyCode === ESC_CODE) {
      evt.preventDefault();
      dispatch(setSuccessPopupOpen(false));
      document.removeEventListener(`keydown`, onEscButtonPress);
    }
  };

  const handleCloseButtonClick = () => {
    dispatch(setSuccessPopupOpen(false));
  };

  return (
    <PopUp className="success">
      <CloseButton
        className="success__close"
        onClick={handleCloseButtonClick}
      />
      <h3 className="success__title">Спасибо за обращение в наш банк.</h3>
      <p className="success__text">
        Наш менеджер скоро свяжется с вами по указанному номеру телефона
      </p>
    </PopUp>
  );
};

export default SuccessPopup;
