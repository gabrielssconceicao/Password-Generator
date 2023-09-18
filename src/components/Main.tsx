import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CopySvg from '../assets/copy.svg';
import RenewSvg from '../assets/renew.svg';
import '../css/main.css';
import { Checkbox } from './Checkbox';
import { CheckboxState } from '../interfaces/main';
import { genPassword } from '../utils/generatePassword';

export const Main: React.FC = () => {
  // rangeValue
  const [rangeValue, setRangeValue] = useState<number>(6);
  const [password, setPassword] = useState<string>('');
  // do a state object with key being the name of checkbox id
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    lowerCase: true,
    upperCase: false,
    symbol: false,
    number: false,
  });

  //calculate percentage
  const percentage = useMemo<number>(() => {
    let percentage = 0;

    percentage = (rangeValue / 64) * 100 * 0.3;
    checkboxState.lowerCase ? (percentage += 10) : percentage;
    checkboxState.upperCase ? (percentage += 15) : percentage;
    checkboxState.symbol ? (percentage += 25) : percentage;
    checkboxState.number ? (percentage += 20) : percentage;

    return Math.round(percentage);
  }, [
    checkboxState.lowerCase,
    checkboxState.upperCase,
    checkboxState.symbol,
    checkboxState.number,
    rangeValue,
  ]);

  //checkbox change
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

  //password value
  const generatePassword = useCallback(() => {
    setPassword(genPassword(checkboxState, rangeValue));
  }, [checkboxState, rangeValue]);

  //set range value
  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRangeValue(parseInt(e.target.value));

  // do a coy function that set on clipboard the password
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };
  useEffect(() => generatePassword(), [generatePassword]);

  return (
    <main>
      <section className="container display">
        <div className="display__text">
          <input
            className={`font-${
              password.length < 22 ? 4 : password.length < 47 ? 3 : 2
            }x`}
            type="text"
            name="password-text"
            disabled
            value={password}
          />
          <img src={CopySvg} alt="Copy-svg image" onClick={copyToClipboard} />
          <img
            src={RenewSvg}
            alt="Renew-svg image"
            onClick={generatePassword}
          />
        </div>
        <div className="display__progress">
          <div
            className={`display__progress-bar ${
              percentage < 35
                ? 'critical'
                : percentage < 65
                ? 'warning'
                : 'safe'
            }`}
            style={{
              width: `${percentage}%`,
            }}
          ></div>
        </div>
      </section>

      <section className="container controllers">
        <p className="controllers__text font-3x">
          Password length: {rangeValue}
        </p>
        <div className="controllers__inputs">
          <input
            className="controllers__inputs__range slider"
            type="range"
            name="range"
            id="range"
            min={6}
            max={64}
            onChange={(e) => onRangeChange(e)}
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
        <button className="button" type="button" onClick={copyToClipboard}>
          Copy
        </button>
        <button className="button" type="button" onClick={generatePassword}>
          New
        </button>
      </section>
    </main>
  );
};
