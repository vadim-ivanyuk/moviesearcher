import React from "react";
import { Modal, ModalBody } from "reactstrap";
import PropTypes from "prop-types";
import { AuthorizationForm } from "./AuthorizationForm";

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

AuthorizationModal.defaultProps = {
  modal: false,
};

AuthorizationModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
