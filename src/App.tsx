import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProtectedComponent from './Components/ProtectedComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProtectedComponent isAuthenticated={true}></ProtectedComponent>
      </header>
    </div>
  );
}

export default App;
