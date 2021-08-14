import React from 'react';

function PopupWithForm() {  

  const [name, setName] = React.useState('');
  const [breed, setBreed] = React.useState('');
  const [tricks, setTricks] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleBreedChange(e) {
    setBreed(e.target.value);
  }

  function handleTricksChange(e) {
    setTricks(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, breed, tricks })
  }
  
  return (
    <div className="popup popup_is-opened">
      <h3 className="popup__title">Register your dog</h3>
      <form className="popup__form" onSubmit={handleSubmit} name="new">
        <input value={name} onChange={handleNameChange} type="text" name="name" className="popup__input popup__input_type_name" placeholder="Name" />
        <input value={breed} onChange={handleBreedChange} type="text" name="breed" className="popup__input popup__input_type_breed" placeholder="Breed" />
        <input value={tricks} onChange={handleTricksChange} type="text" name="tricks" className="popup__input popup__input_type_tricks" placeholder="Tricks" />
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


//without classes

// import React from 'react';

// function PopupWithForm() {
//   return (
//     <div>
//       <h3>Register your dog</h3>
//       <form name="new">
//         <input type="text" name="name"  placeholder="Name" />
//         <input type="text" name="breed" placeholder="Breed" />
//         <input type="text" name="tricks" placeholder="Tricks" />
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <PopupWithForm />
//     </div>
//   );
// }

// export default App;


