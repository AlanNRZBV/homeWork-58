import { FC } from 'react';

import { ICustomAlert } from '../../../types';
const Alert: FC<ICustomAlert> = ({ type, onDismiss, show, children }) => {

  let toggle

  if (show){
    toggle = 'd-flex justify-content-between flex-wrap'
  }else{
    toggle = 'none'
  }

  const alertStyle = `alert alert-${type} ${toggle}`;

  return (
      <div className={alertStyle} role="alert" style={{ display: show ? 'flex' : 'none' }}>
        <span>simple alert</span>
        <button
          onClick={onDismiss}
          type="button"
          className="btn-close"
          style={{ display: onDismiss ? 'block' : 'none' }}
        ></button>
        <div className="w-100">{children}</div>
      </div>
  );
};

export default Alert;
