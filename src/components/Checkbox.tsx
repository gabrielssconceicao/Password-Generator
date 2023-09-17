import React from 'react';
import '../css/checkbox.css';
interface CheckboxProps {
  text: string;
  id: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Checkbox: React.FC<CheckboxProps> = ({
  text,
  id,
  isChecked,
  onChange,
}: CheckboxProps) => {
  return (
    <label htmlFor={id}>
      <span>{text}</span>
      <input
        type="checkbox"
        name="password-strong"
        id={id}
        checked={isChecked}
        onChange={(e) => onChange(e)}
      />
    </label>
  );
};
