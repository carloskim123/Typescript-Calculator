import React, { useState } from 'react';
import './style.css';
import buttons from './buttons';

type Button = string;

function Calculator<T extends Button>(): JSX.Element {
  const [result, setResult] = useState<string>('');

  const handleClick = (value: T): void => {
    if (value === '=') {
      try {
        setResult(eval(result));
      } catch (err) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="calculator w-[394px]">
      <input
        type="text"
        id="result"
        value={!result ? '0' : result}
        disabled
        className="h-[100px] bg-slate-900 w-full text-white "
      />
      <div className="keypad grid grid-cols-4">
        {buttons.map((button: T) => (
          <button
            key={button}
            className={`button ${button === '=' ? 'equals' : ''}`}
            onClick={() => handleClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
