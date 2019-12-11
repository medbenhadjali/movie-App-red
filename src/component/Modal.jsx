import React from "react";
import { Modal } from "react-bootstrap";

const ModalFilm = ({ children, show, handleClose, title }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
};
export default ModalFilm;
