import './App.css';

function Button() {
  return (
    <button type="button" className="button button_type_register">Register your dog <i className="fas fa-paw paw"></i></button>
  );
}

function PopupWithForm() {
  return (
    <div className="popup popup_is-opened">
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
  return (
    <div className="App">
      <Button />
      <PopupWithForm />
    </div>
  );
}

export default App;
