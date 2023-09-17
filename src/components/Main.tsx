import CopySvg from '../assets/copy.svg';
import RenewSvg from '../assets/renew.svg';
import '../css/main.css';
export const Main = () => {
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
            <label htmlFor="lowerCase">
              <span>Lower Case</span>
              <input type="checkbox" name="password-strong" id="lowerCase" />
            </label>
            <label htmlFor="upperCase">
              <span>Upper Case</span>
              <input type="checkbox" name="password-strong" id="upperCase" />
            </label>
            <label htmlFor="symbol">
              <span>Symbols</span>
              <input type="checkbox" name="password-strong" id="symbol" />
            </label>
            <label htmlFor="number">
              <span>Numbers</span>
              <input type="checkbox" name="password-strong" id="number" />
            </label>
          </div>
        </div>
      </section>
    </main>
  );
};
