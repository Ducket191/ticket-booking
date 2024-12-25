import React, { useState } from 'react';
import './App.css';

function App() {
  const [Name, setName] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { Name, Phonenumber });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="inputin4">
        <h1>User Information</h1>
        <div>
          <h2>Full Name</h2>
          <input
            className="HoTen"
            type="text"
            value={Name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <h2>Phone Number</h2>
          <input
            className="SoDienThoai"
            type="text"
            value={Phonenumber}
            onChange={handlePhonenumberChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
