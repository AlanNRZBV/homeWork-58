import { useState } from 'react';
import Button from '../Button/Button.tsx';
import Modal from '../ui/Modal/Modal.tsx';
import Alert from '../ui/Alert/Alert.tsx';

const DemoButtons = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const toggleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
  const toggleAlert = () => {
    if (showAlert) {
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <div className="border border-1 rounded-3 shadow px-3 py-3 d-flex flex-column">
        <Button
          type="primary mb-2"
          onClick={toggleModal}
          innerText="Show modal"
        />
        <Button type="primary" onClick={toggleAlert} innerText="Show alert" />
      </div>
      <Modal show={showModal} title="Some title" onClose={toggleModal}>
        <p>content goes here</p>
      </Modal>
      <Alert show={showAlert} type="danger" onDismiss={toggleAlert}>
        Alert children
      </Alert>
    </>
  );
};

export default DemoButtons;
