import React from "react";
import { BiBell, BiBellOff, BiSearchAlt, BiCog } from "react-icons/bi";
import userLogo from "../upload/user.jpg";
import FredEngel from "../upload/FredEngel.jpg";
import OliveHarris from "../upload/OliveHarris.jpg";
import JillKnight from "../upload/JillKnight.jpg";
import ElliotBouchard from "../upload/ElliotBouchard.jpg";
import MelvinMorgan from "../upload/MelvinMorgan.jpg";
import ReinaldVanMechelen from "../upload/ReinaldVanMechelen.jpg";
import LeonCrawford from "../upload/LeonCrawford.jpg";
import AlexeyBunas from "../upload/AlexeyBunas.jpg";
import AndreyTolegenov from "../upload/AndreyTolegenov.jpg";
import ScarlettReid from "../upload/ScarlettReid.jpg";
import {
  Container,
  HeaderContainer,
  UserContainer,
  User,
  UserName,
  ContactList,
  SubtitleContactList,
  ButtonContainer,
  IconBox,
  NewContact,
  NewTask,
  InputContainer,
  ButtonBox,
  TaskContainer,
  Photo,
  Name,
  Work,
  TasksContainer,
  DetailUser,
  ButtonEdit
} from "./styles";

const Task = () => {
  const tasks = [
    {
      photoUser: FredEngel,
      nameUser: "Fred Engel",
      work: "Management Consultant"
    },
    {
      photoUser: OliveHarris,
      nameUser: "Olive Harris",
      work: "Business Manager"
    },
    {
      photoUser: JillKnight,
      nameUser: "Jill Knight",
      work: "Product Manager"
    },
    {
      photoUser: AlexeyBunas,
      nameUser: "Alexey Bunas",
      work: "Bus Driver"
    },
    {
      photoUser: ElliotBouchard,
      nameUser: "Elliot Bouchard",
      work: "Financial Analyst"
    },
    {
      photoUser: MelvinMorgan,
      nameUser: "Melvin Morgan",
      work: "Financial Analyst"
    },
    {
      photoUser: ReinaldVanMechelen,
      nameUser: "Reinald Van Mechelen",
      work: "Management Consultant"
    },
    {
      photoUser: LeonCrawford,
      nameUser: "Leon Crawford",
      work: "Business Manager"
    },
    {
      photoUser: AndreyTolegenov,
      nameUser: "Andrey Tolegenov",
      work: "Miner Manager"
    },
    {
      photoUser: ScarlettReid,
      nameUser: "Scarlett Reid",
      work: "Financial Analyst"
    }
  ];
  return (
    <Container>
      <HeaderContainer>
        <UserContainer>
          <User>
            <img src={userLogo} />
            <UserName>Aron Skoglund</UserName>
          </User>
          <IconBox>
            <BiBell className="on" />
            <BiBellOff className="off" />
          </IconBox>
        </UserContainer>
        <ContactList>Contact List</ContactList>
        <SubtitleContactList>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </SubtitleContactList>
        <ButtonContainer>
          <ButtonBox>
            <NewContact>New Contact</NewContact>
            <NewTask>New Task</NewTask>
          </ButtonBox>
          <InputContainer>
            <input placeholder="Search" type="text" />
            <BiSearchAlt />
          </InputContainer>
        </ButtonContainer>
      </HeaderContainer>
      <TaskContainer>
        {tasks.map(taskBox => {
          return <TaskBox {...taskBox} />;
        })}
      </TaskContainer>
    </Container>
  );
};

const TaskBox = props => {
  const { photoUser, nameUser, work } = props;
  return (
    <TasksContainer>
      <Photo>
        <img src={photoUser} />
      </Photo>
      <DetailUser>
        <Name>{nameUser}</Name>
        <Work className="Work">{work}</Work>
      </DetailUser>
      <ButtonEdit>
        <BiCog />
        Edit
      </ButtonEdit>
    </TasksContainer>
  );
};

export default Task;
