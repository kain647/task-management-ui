import styled from "styled-components";

export const Box = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 750px;
  background-color: #fff;
  box-sizing: border-box;
	margin-bottom: 20px;
	:last-child{
		margin-bottom: 0;
	}
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 680px;
  height: max-content;
  padding: 32px;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: sticky;
    top: 0;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  img {
    --size: 40px;
    width: var(--size);
    height: var(--size);
    border-radius: 5px;
    margin-right: 12px;
  }
`;
export const IconBox = styled.div`
  display: flex;
  svg {
    color: #cbd5e0;
    background-color: #f7fafc;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const UserName = styled.div`
  display: flex;
  color: #718096;
  font-weight: 500;
`;
export const ContactList = styled.h1`
  font-size: 1.125rem;
  margin: 0;
  color: #2d3748;
  font-weight: 500;
`;
export const SubtitleContactList = styled.p`
  display: flex;
  font-size: 0.875rem;
  color: #718096;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    margin-bottom: 25px;
  }
`;
export const NewContact = styled.button`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  background-color: #a0aec0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-right: 15px;
  cursor: pointer;
`;
export const NewTask = styled.button`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: #718096;
  border: 1px solid #cbd5e0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
`;
export const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
  }
  svg {
    position: absolute;
    color: #718096;
    padding: 5px;
    &.Close {
      position: absolute;
      color: #718096;
      right: 5px;
      cursor: pointer;
      padding: 5px;
    }
  }
  input {
    color: #718096;
    border: 1px solid #cbd5e0;
    padding: 10px 30px 10px 25px;
    border-radius: 5px;
    @media screen and (max-width: 768px) {
      display: flex;
      width: 100%;
    }
  }
`;
export const ContactContainer = styled.div`
  display: flex;
	width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: auto;
  background-color: #f7fafc;
  @media screen and (max-width: 768px) {
    overflow-y: auto;
  }
`;
export const Contacts = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 20px 30px;
  background-color: #f7fafc;
  border-bottom: 1px solid #e2e8f0;
  cursor: pointer;
  :hover {
    background-color: #d9d9d9;
    .Work {
      color: #2d3748;
    }
	  .IconDel {
		  display: flex;
	  }
  }
`;
export const Photo = styled.div`
  display: flex;
  margin-right: 15px;
  img {
    --size: 40px;
    width: var(--size);
    height: var(--size);
    border-radius: 5px;
  }
`;
export const Name = styled.div`
  display: flex;
  color: #2d3748;
  font-weight: 500;
  font-size: 0.875rem;
`;
export const Work = styled.div`
  display: flex;
  color: #a0aec0;
  font-size: 0.875rem;
`;
export const DetailUser = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonEdit = styled.button`
  display: none;
  margin-left: auto;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: #a0aec0;
  font-size: 0.875rem;
  svg {
    margin-right: 10px;
    --size: 24px;
    width: var(--size);
    height: var(--size);
  }
`;
export const Tasks = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: center;
  box-sizing: border-box;
  padding: 20px 30px;
  background-color: #f7fafc;
  border-bottom: 1px solid #e2e8f0;
  cursor: pointer;
	:hover {
    background-color: #d9d9d9;
		.IconDel {
			display: flex;
		}
	}
`;
export const TaskDetail = styled.div`
	display: flex;
	flex-direction: column;
`;
export const TaskTitle = styled.div`
	display: flex;
	width: 500px;
  font-size: .875rem;
  @media screen and (max-width: 768px) {
	  width: 100%;
  }
`;
export const TaskTime = styled.div`
	display: flex;
  font-style: italic;
  font-size: .75rem;
  color: #a3bffa;
`;
