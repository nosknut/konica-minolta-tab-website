import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div style={{
        overflowY: "scroll",
      }}
      >
        <textarea
          style={{
            display: "flex",
            width: "50vw",
            height: "100vh",
            backgroundColor: "black",
            color: "white",
            fontSize: "150%",
            border: "none",
            padding: "0px",
            margin: "0px"
          }}
        />
      </div>
    </div>
  );
}

export default App;
