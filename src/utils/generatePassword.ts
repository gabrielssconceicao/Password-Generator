import { CheckboxState } from '../interfaces/main';

function shuffleString(inputString: string): string {
  // Converte a string em um array de caracteres
  const characters = inputString.split('');

  // Embaralha os caracteres do array
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }

  // Junta os caracteres embaralhados de volta em uma string
  const shuffledString = characters.join('');

  return shuffledString;
}

export function genPassword(obj: CheckboxState, size: number): string {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const symbol = '!@#$%^&*()';
  const number = '0123456789';
  const rand = (max: number): number => Math.floor(Math.random() * max);
  let password = '';
  for (let i = 0; i < size; i++) {
    if (obj.lowerCase) {
      password += lowerCase[rand(lowerCase.length)];
    }
    if (obj.upperCase) {
      password += upperCase[rand(upperCase.length)];
    }
    if (obj.symbol) {
      password += symbol[rand(symbol.length)];
    }
    if (obj.number) {
      password += number[rand(number.length)];
    }
  }

  return shuffleString(password.slice(0, size));
}
