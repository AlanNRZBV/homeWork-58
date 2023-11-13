import React, { useState } from 'react';
import Button from '../Button/Button.tsx';
import Modal from '../ui/Modal/Modal.tsx';

const DemoButtons = () => {

  const [showModal, setShowModal]=useState(false)

  const showCustomModal = ()=>{
      setShowModal(true)
  }

  const closeModal=()=>{
    setShowModal(false)
  }
  const showCustomAlert = ()=>{

  }
  return (
    <>
    <div className="border border-1 rounded-3 shadow px-3 py-3 d-flex flex-column">
      <Button type="primary mb-2" onClick={showCustomModal} innerText="Show modal"/>
      <Button type="primary" onClick={showCustomAlert} innerText="Show alert"/>
    </div>
      <Modal show={showModal} title="Some title" onClose={closeModal}>
        <p>content goes here</p>
      </Modal>
      </>
  );
};

export default DemoButtons;