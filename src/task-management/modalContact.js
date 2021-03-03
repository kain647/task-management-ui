import React, { useState } from "react";
import Modal from "react-modal";
import noPhoto from "../upload/add-camera-icon.png";
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

const ModalContact = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const changeName = e => setName(e.target.value);
  const changeWork = e => setProfession(e.target.value);

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
            <label for="imageUpload">Add photo</label>
          </UploadContainer>
          <input placeholder="Name" onChange={changeName} />
          <input placeholder="Profession" onChange={changeWork} />
          <NewContact
            onClick={() => {
              props.addCommunication(name, profession);
              setIsOpen(false);
              setName("");
              setProfession("");
            }}
          >
            Add contact
          </NewContact>
        </FormContainer>
      </Modal>
    </ModalBox>
  );
};

export default ModalContact;
