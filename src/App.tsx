import { useState } from 'react';
import DemoForm from './components/DemoForm/DemoForm.tsx';

function App() {

  return (
    <>
      <div className="container">
        <div className="row g-2 py-5">
          <div className="col-6">
            <DemoForm />
          </div>
          <div className="col-6">TETS</div>
        </div>
      </div>
    </>
  );
}

export default App;
