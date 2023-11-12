import React from 'react';
import Button from '../button/Button.tsx';

const DemoForm = () => {
  const testFn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('test');
  };

  return (
    <form className="border border-1 rounded-3 shadow px-3 py-3">
      <h6></h6>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Turn on modal window
        </label>
      </div>
      <button onClick={testFn} className="btn btn-primary" type="submit">Confirm</button>
    </form>
  );
};

export default DemoForm;
