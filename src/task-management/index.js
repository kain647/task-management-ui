import React, { useState, useEffect } from "react";
import ReactTimeAgo from "react-time-ago";
import ModalTask from "./modalTask";
import ModalContact from "./modalContact";
import { BiBell, BiBellOff, BiSearchAlt } from "react-icons/bi";
import { RiCloseCircleFill } from "react-icons/ri";
import { AiOutlineUserDelete, AiOutlineCloseCircle } from "react-icons/ai";
import userLogo from "../upload/user.jpg";
import FredEngel from "../upload/FredEngel.jpg";
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

const Task = props => {
  const initCommunications = [
    {
      photoUser: FredEngel,
      nameUser: "Fred Engel",
      work: "Management Consultant"
    }
  ];

  const initTasks = [
    {
      id: "task1",
      taskTitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      taskTime: 0
    }
  ];

  const [search, setSearch] = useState("");

  const [withSound, setWithSound] = useState(true);

  const [filteredContacts, setFilteredContacts] = useState([
    ...initCommunications
  ]);

  const [tasks, setTasks] = useState(initTasks);

  const [communications, setCommunications] = useState(initCommunications);

  useEffect(() => {
    filterBy(search);
  }, [communications]);

  const removeTask = id => {
    const newList = tasks.filter(task => task.id !== id);
    setTasks(newList);
  };

  const removeContact = nameUser => {
    const newContact = communications.filter(
      communications => communications.nameUser !== nameUser
    );
    setCommunications(newContact);
  };

  const addCommunication = (name, profession) => {
    const newCommunication = {
      nameUser: name,
      work: profession
    };
    const newContacts = [...communications, newCommunication];
    setCommunications(newContacts);
  };

  const addTask = title => {
    const timeStamp = new Date().getTime();
    const id = timeStamp;

    const newTask = {
      id,
      taskTitle: title,
      taskTime: timeStamp
    };
    const newList = [...tasks, newTask];
    setTasks(newList);
  };

  const filterBy = keyWord => {
    if (keyWord == "") {
      setFilteredContacts(communications);
      return false;
    }
    const filtered = communications.filter(contact => {
      const result = contact.nameUser
        .toLowerCase()
        .includes(keyWord.toLowerCase());
      return result;
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
            <ModalContact addCommunication={addCommunication} />
            <ModalTask addTask={addTask} />
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
        <ContactListItems list={filteredContacts} remove={removeContact}/>
        {tasks
          .filter(tasks => {
            return (
              search === "" ||
              tasks.taskTitle.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map(tasksBox => {
            return <TasksBox remove={removeTask} {...tasksBox} />;
          })}
      </ContactContainer>
    </Container>
  );
};

const TasksBox = React.memo(props => {
  const { taskTitle, taskTime, remove, id } = props;
  return (
    <Tasks>
      <TaskDetail>
        <TaskTitle className="TaskTitle">{taskTitle}</TaskTitle>
        <TaskTime>
          <ReactTimeAgo date={taskTime} locale="en-US" />
        </TaskTime>
      </TaskDetail>
      <ButtonEdit className="IconDel" onClick={() => remove(id)}>
        <AiOutlineCloseCircle />
      </ButtonEdit>
    </Tasks>
  );
});

const ContactBox = React.memo(props => {
  const { photoUser, nameUser, work, remove } = props;
  return (
    <Contacts>
      <Photo>
        <img src={photoUser} />
      </Photo>
      <DetailUser>
        <Name>{nameUser}</Name>
        <Work className="Work">{work}</Work>
      </DetailUser>
      <ButtonEdit className="IconDel" onClick={() => remove(nameUser)}>
        <AiOutlineUserDelete />
      </ButtonEdit>
    </Contacts>
  );
});

const ContactListItems = React.memo(props => {
  const { list, remove } = props;
  return list.map(item => {
    return (
      <ContactBox
        remove={remove}
        key={item.nameUser}
        photoUser={item.photoUser}
        nameUser={item.nameUser}
        work={item.work}
      />
    );
  });
});

export default Task;
