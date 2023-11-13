import  { FC } from 'react';
import { IModal } from '../../../types';

const Modal: FC<IModal> = ({show,title,onClose, children}) => {
  return (
    <>
      <div className="modal-backdrop show" style={{ display: show ? 'block' : 'none' }}></div>
      <div className="modal show" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button onClick={onClose} type="button" className="btn-close"></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
