import { FC } from 'react';
import { IButton } from '../../types';
import { motion } from 'framer-motion';

const Button: FC<IButton> = ({ type, onClick, innerText }) => {
  const btnStyle = `btn btn-${type}`;

  return (
    <motion.button
      whileHover={{ y: -2 }}
      onClick={onClick}
      type="button"
      className={btnStyle}
    >
      {innerText}
    </motion.button>
  );
};

export default Button;
