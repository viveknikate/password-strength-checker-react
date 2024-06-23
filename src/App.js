import React, { useState } from "react";
import validator from 'validator';

function App() {
  const [psswd, setNewPsswd] = useState('');

  const isRight = (value) => {
    if (value.length === 0) {
      return <h4 style={{color: "grey"}}>Please enter password to check its Strength.</h4>
    }
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1, minUppercase: 1, minSymbols: 1, minNumbers: 1
    })) {
      return <h4 style={{color:'green'}}> It's Strong password</h4>
    } else {
      return <h4 style={{color:'red'}}>Password is not Strong <span style={{color: 'green'}}>(must contain at least 8 chars, 1 number, 1 symbol, 1 lowercase, 1 Uppercase)</span> </h4>
    }
  }

  return (
    <div className="container">
      <h1  id='title'>Enter password to check it's Strength: </h1>
      <input type="text" id="passwordInput" placeholder="enter password" onChange={(e) => setNewPsswd(e.target.value)}/>
      <h3 id="passwordStrength">{psswd}</h3>
      <span id="strengthIndicator">
        {isRight(psswd)}
      </span>
    </div>
  );
};

export default App;
