import React, { useState } from "react";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";
import {
  NewTask,
  TitleModalContainer,
  TitleModal,
  DescriptionContainer,
  FormContainerTask,
  NewContactTask,
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

const ModalTask = props => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");

  const changeTitle = e => setTitle(e.target.value);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
        <FormContainerTask>
          <input onChange={changeTitle} placeholder="Add comment.." />
          <NewContactTask
            onClick={() => {
              props.addTask(title);
              setIsOpen(false);
              setTitle("");
            }}
          >
            Add task
          </NewContactTask>
        </FormContainerTask>
      </Modal>
    </ModalBox>
  );
};

export default ModalTask;
