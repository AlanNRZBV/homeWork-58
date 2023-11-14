import { FC } from 'react';
import { ICustomModal } from '../../../types';
import Button from '../../Button/Button.tsx';
import { motion } from 'framer-motion';

const Modal: FC<ICustomModal> = ({ show, title, onClose, children }) => {
  const placeholderFn = () => {
    alert('You have pressed continue');
  };

  const footerBtns = [
    { type: 'primary', label: 'Continue', onClick: placeholderFn },
    { type: 'danger', label: 'Close', onClick: onClose },
  ];

  const backdropVariants = {
    open: { display: 'block', opacity: 0.5 },
    closed: { display: 'none', opacity: 0 },
  };
  const modalWrapperVariants = {
    open: { display: 'block', scale: 1 },
    closed: { display: 'none', scale: 0.5 },
  };

  return (
    <>
      <motion.div
        className="modal-backdrop show"
        animate={show ? 'open' : 'closed'}
        variants={backdropVariants}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="modal show"
        animate={show ? 'open' : 'closed'}
        variants={modalWrapperVariants}
        transition={{ duration: 0.25, ease: 'easeIn' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <motion.button
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                type="button"
                className="btn-close"
              ></motion.button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              {footerBtns.map((btn) => (
                <Button
                  type={btn.type}
                  onClick={btn.onClick}
                  innerText={btn.label}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
