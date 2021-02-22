import React from "react";
import Modal from "react-modal";
import noPhoto from "../upload/No_image.png"
import { CgCloseR } from "react-icons/cg";
import {
  TitleModalContainer,
  TitleModal,
  DescriptionContainer,
  FormContainer,
  NewContact,
  ModalBox,
	UploadContainer
} from "./styles";

const customStyles = {
  content: {
    boxSizing: "borderBox",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1"
  }
};

function ModalContact() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalBox>
      <NewContact onClick={openModal}>New Contact</NewContact>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <TitleModalContainer>
          <TitleModal>Add new contact</TitleModal>
          <CgCloseR onClick={closeModal} />
        </TitleModalContainer>
        <DescriptionContainer>Add description</DescriptionContainer>
        <FormContainer>
          <UploadContainer>
	          <img src={noPhoto} id="imagePreview" />
            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload">Upload Photo</label>
          </UploadContainer>
          <input placeholder="Name" />
          <input placeholder="Surname" />
          <NewContact>Add contact</NewContact>
        </FormContainer>
      </Modal>
    </ModalBox>
  );
}

export default ModalContact;
