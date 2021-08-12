import './App.css';

function PopupWithForm() {
  return (
    <div className="popup popup_is-opened">
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
      <PopupWithForm />
    </div>
  );
}

export default App;
