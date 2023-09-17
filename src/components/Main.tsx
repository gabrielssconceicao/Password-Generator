import React, { useEffect, useState } from 'react';
import CopySvg from '../assets/copy.svg';
import RenewSvg from '../assets/renew.svg';
import '../css/main.css';
import { Checkbox } from './Checkbox';

type CheckboxState = {
  lowerCase: boolean;
  upperCase: boolean;
  symbol: boolean;
  number: boolean;
};
export const Main: React.FC = () => {
  // do a state object with key being the name of checkbox id
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    lowerCase: true,
    upperCase: false,
    symbol: false,
    number: false,
  });
  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //copy the checkbox state object and update the state
    const newCheckboxState: CheckboxState = {
      ...checkboxState,
      [e.target.id]: e.target.checked,
    };

    if (Object.values(newCheckboxState).every((el) => el === false)) {
      newCheckboxState.lowerCase = true;
    }

    setCheckboxState(newCheckboxState);
  };
  useEffect(() => console.log('Main Renderizou'), []);

  return (
    <main>
      <section className="container display">
        <div className="display__text">
          <input
            className="font-4x"
            type="text"
            name="password-text"
            disabled
            value={5}
          />
          <img src={CopySvg} alt="Copy-svg image" />
          <img src={RenewSvg} alt="Renew-svg image" />
        </div>
        <div className="display__progress">
          <div className="display__progress-bar"></div>
        </div>
      </section>

      <section className="container controllers">
        <p className="controllers__text font-2x">Password length: {'$size'}</p>
        <div className="controllers__inputs">
          <input
            className="controllers__inputs__range slider"
            type="range"
            name="range"
            id="range"
            min={6}
            max={100}
          />
          <div className="controllers__inputs__checkboxes">
            <Checkbox
              text="Lower Case"
              id="lowerCase"
              isChecked={checkboxState.lowerCase}
              onChange={onCheckboxChange}
            />
            <Checkbox
              text="Upper Case"
              id="upperCase"
              isChecked={checkboxState.upperCase}
              onChange={onCheckboxChange}
            />
            <Checkbox
              text=" Symbols"
              id="symbol"
              isChecked={checkboxState.symbol}
              onChange={onCheckboxChange}
            />
            <Checkbox
              text="Numbers"
              id="number"
              isChecked={checkboxState.number}
              onChange={onCheckboxChange}
            />
          </div>
        </div>
      </section>

      <section className="container buttons">
        <button className="button" type="button">
          Copy
        </button>
        <button className="button" type="button">
          Re Do
        </button>
      </section>
    </main>
  );
};
