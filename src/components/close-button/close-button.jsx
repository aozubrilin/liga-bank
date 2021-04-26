const CloseButton = ({ className, onClick }) => {
  return (
    <button
      className={`${className} close-button`}
      type="button"
      aria-label="Закрыть"
      onClick={onClick}
    ></button>
  );
};

export default CloseButton;
