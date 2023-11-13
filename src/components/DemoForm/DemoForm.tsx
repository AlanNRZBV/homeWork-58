import React, { FC } from 'react';
import { IDemoForm } from '../../types';

const DemoForm: FC<IDemoForm> = ({ onSubmit }) => {
  const testFn = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
    console.log('test');
  };

  return (
    <form onSubmit={testFn} className="border border-1 rounded-3 shadow px-3 py-3">
      <h6></h6>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Turn on modal window
        </label>
      </div>
      <button className="btn btn-primary" type="submit">
        Confirm
      </button>
    </form>
  );
};

export default DemoForm;
