import { FC } from 'react';
import { ICustomModal } from '../../../types';
import Button from '../../Button/Button.tsx';

const Modal: FC<ICustomModal> = ({ show, title, onClose, children }) => {
  const placeholderFn = () => {
    alert('You have pressed continue');
  };

  const footerBtns = [
    { type: 'primary', label: 'Continue', onClick: placeholderFn },
    { type: 'danger', label: 'Close', onClick: onClose },
  ];

  return (
    <>
      <div
        className="modal-backdrop show"
        style={{ display: show ? 'block' : 'none' }}
      ></div>
      <div className="modal show" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                onClick={onClose}
                type="button"
                className="btn-close"
              ></button>
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
      </div>
    </>
  );
};

export default Modal;
