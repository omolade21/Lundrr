import React, { useState } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");
function ModalBox() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Open modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}

        style={{
          overlay:{
            backgroundColor:"gray"
          },
          content:{
            color:"orange"
          }
        }}
      >
        <h2>MODAL TITLE</h2>
        <p> Modal Body</p>

        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
       
          close
        </button>
      </Modal>
    </div>
  );
}

export default ModalBox;
