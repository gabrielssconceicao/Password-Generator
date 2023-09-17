import CopySvg from '../assets/copy.svg';
import RenewSvg from '../assets/renew.svg';
export const Main = () => {
  return (
    <main>
      <section>
        <input type="text" name="password-text" />
        <div>
          <img src={CopySvg} alt="Copy-svg image" />
          <img src={RenewSvg} alt="Renew-svg image" />
        </div>
        <div>Progress bar</div>
      </section>
      <section>
        <p>Password length: {'$size'}</p>
        <div>
          <input type="range" name="range" id="range" min={6} max={100} />
          <div>
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
