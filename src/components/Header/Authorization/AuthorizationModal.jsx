import React from "react";
import { Modal, ModalBody } from "reactstrap";
import AuthorizationForm from "./Form/AuthorizationForm";

export const AuthorizationModal = (props) => {
  const { modal, toggle } = props;

  return (
    <Modal isOpen={modal} toggle={toggle} className="authorization-form-modal">
      <ModalBody>
        <AuthorizationForm />
      </ModalBody>
    </Modal>
  );
};
