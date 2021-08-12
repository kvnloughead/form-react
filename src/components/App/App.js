import React from 'react';

function Button({ onClick }) {
  return (
    <button onClick={onClick} type="button" className="button button_type_register">Register your dog <i className="fas fa-paw paw"></i></button>
  );
}

function PopupWithForm({ isOpen }) {
  return (
    <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <button type="button" className="popup__close-button">Close</button>
      <h3 className="popup__title">Register your dog</h3>
      <form className="popup__form" name="new">
        <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Name" />
        <input type="text" name="breed" className="popup__input popup__input_type_breed" placeholder="Breed" />
        <input type="text" name="tricks" className="popup__input popup__input_type_tricks" placeholder="Tricks" />
        <button type="submit" className="popup__submit-button">Save</button>
      </form>
    </div>
  );
}

function App() {
  const [popupIsOpen, setPopupIsOpen] = React.useState(false);

  const handleOpenPopup = () => {
    setPopupIsOpen(true);
  }

  return (
    <div className="App">
      <Button onClick={handleOpenPopup} />
      <PopupWithForm isOpen={popupIsOpen} />
    </div>
  );
}

export default App;
