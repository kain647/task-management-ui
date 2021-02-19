import React, { useState } from "react";
import { BiBell, BiBellOff, BiSearchAlt } from "react-icons/bi";
import { RiCloseCircleFill } from "react-icons/ri";
import { AiOutlineUserDelete, AiOutlineCloseCircle } from "react-icons/ai";
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
  ContactContainer,
  Photo,
  Name,
  Work,
  Contacts,
  DetailUser,
  ButtonEdit,
  Tasks,
  TaskTitle,
  TaskTime,
  TaskDetail
} from "./styles";

const Task = () => {
  const contacts = [
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
  const tasks = [
    {
      taskTitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      taskTime: "10 min ago"
    },
    {
      taskTitle:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      taskTime: "1 hour ago"
    },
    {
      taskTitle:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      taskTime: "5 sec ago"
    }
  ];
  const [search, setSearch] = useState("");
  const [withSound, setWithSound] = useState(true);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const filterBy = keyWord => {
    if (keyWord == "") {
      setFilteredContacts(contacts);
      return false;
    }
    const filtered = contacts.filter(contact => {
      return (
        search === "" ||
        contact.nameUser.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredContacts(filtered);
  };

  return (
    <Container>
      <HeaderContainer>
        <UserContainer>
          <User>
            <img src={userLogo} />
            <UserName>Aron Skoglund</UserName>
          </User>
          <IconBox onClick={() => setWithSound(!withSound)}>
            {withSound ? <BiBell /> : <BiBellOff />}
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
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => {
                const { value } = e.target;
                setSearch(value);
                filterBy(value);
              }}
            />
            <BiSearchAlt />
            {search !== "" && (
              <RiCloseCircleFill
                className="Close"
                onClick={() => {
                  setSearch("");
                  filterBy("");
                }}
              />
            )}
          </InputContainer>
        </ButtonContainer>
      </HeaderContainer>
      <ContactContainer>
        <ContactListItems list={filteredContacts} />
        {tasks
          .filter(tasks => {
            return (
              search === "" ||
              tasks.taskTitle.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map(tasksBox => {
            return <TasksBox {...tasksBox} />;
          })}
      </ContactContainer>
    </Container>
  );
};

const TasksBox = React.memo(props => {
  const { taskTitle, taskTime } = props;
  return (
    <Tasks>
      <TaskDetail>
        <TaskTitle className="TaskTitle">{taskTitle}</TaskTitle>
        <TaskTime>{taskTime}</TaskTime>
      </TaskDetail>
      <ButtonEdit className="IconDel">
        <AiOutlineCloseCircle />
      </ButtonEdit>
    </Tasks>
  );
});

const ContactBox = React.memo(props => {
  const { photoUser, nameUser, work } = props;
  return (
    <Contacts>
      <Photo>
        <img src={photoUser} />
      </Photo>
      <DetailUser>
        <Name>{nameUser}</Name>
        <Work className="Work">{work}</Work>
      </DetailUser>
      <ButtonEdit className="IconDel">
        <AiOutlineUserDelete />
      </ButtonEdit>
    </Contacts>
  );
});

const ContactListItems = React.memo(props => {
  const { list } = props;
  return list.map(item => {
    return (
      <ContactBox
        key={item.nameUser}
        photoUser={item.photoUser}
        nameUser={item.nameUser}
        work={item.work}
      />
    );
  });
});

export default Task;
