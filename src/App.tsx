import { useState } from 'react';
import DemoForm from './components/DemoForm/DemoForm.tsx';
import DemoButtons from './components/DemoButtons/DemoButtons.tsx';

function App() {

const showModalBtn = ()=>{

}
  return (
    <>
      <div className="container">
        <div className="row g-2 py-5">
          <div className="col-6">
            <DemoForm onSubmit={showModalBtn}/>
          </div>
          <div className="col-6">
            <DemoButtons/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
