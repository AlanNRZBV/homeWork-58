import { FC } from 'react';
import { IButton } from '../../types';

const Button: FC<IButton> = ({ type, onClick, innerText }) => {
  const btnStyle = `btn btn-${type}`;

  return (
    <button onClick={onClick} type="button" className={btnStyle}>
      {innerText}
    </button>
  );
};

export default Button;
