import React from "react";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";
import {
  NewTask,
  TitleModalContainer,
  TitleModal,
  DescriptionContainer,
  FormContainer,
  NewContact,
  ModalBox
} from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1"
  }
};

function ModalExample() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalBox>
      <NewTask onClick={openModal}>New Task</NewTask>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <TitleModalContainer>
          <TitleModal>Add new task</TitleModal>
          <CgCloseR onClick={closeModal} />
        </TitleModalContainer>
        <DescriptionContainer>Add description</DescriptionContainer>
        <FormContainer>
          <input placeholder="Add comment.." />
          <NewContact>Add task</NewContact>
        </FormContainer>
      </Modal>
    </ModalBox>
  );
}

export default ModalExample;
