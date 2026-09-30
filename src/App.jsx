import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    if (!input.trim()) {
      setResult('Error');
      return;
    }

    try {
      // eval natively respects BODMAS and handles 1/0 as Infinity and 0/0 as NaN
      const evaluation = eval(input);
      setResult(String(evaluation));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      
      {/* Single input element for the expression */}
      <input 
        type="text" 
        value={input} 
        readOnly 
        className="calculator-input"
      />
      
      {/* Single div element for displaying the result */}
      <div className="calculator-result">
        {result}
      </div>

      {/* Grid of 16 button elements */}
      <div className="calculator-buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>

        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default App;
