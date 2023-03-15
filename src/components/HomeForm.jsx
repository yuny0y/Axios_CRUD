import React from 'react'
import styled from 'styled-components'
import { AiFillEdit, AiFillCaretRight } from "react-icons/ai";
import Button from './Button';
import { useNavigate } from 'react-router-dom';


function HomeForm() {
  const navigate = useNavigate();
  return (
    <Haedform>
      <StyDiv><AiFillEdit/> 기록을 해보자 <AiFillEdit/></StyDiv>
      <ListForm>
        <Button.Home size ="large" fs = "30px"
        onClick={()=> {
          navigate('/TodoRecord');
        }}>Todo Record <AiFillCaretRight/> </Button.Home>
        <Button.Home size ="large" fs = "30px"
        onClick={()=> {
          navigate('/TodoList');
        }}>Todo List <AiFillCaretRight/> </Button.Home>
      </ListForm>
    </Haedform>
  );
};

export default HomeForm;

const Haedform = styled.div`
    padding : 30px;
    color: rgb(16, 58, 47);
`
const StyDiv = styled.h1`
    text-align: center;
`
const ListForm = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items : center;
`
