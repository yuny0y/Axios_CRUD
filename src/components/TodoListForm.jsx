import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { removeTodo } from '../redux/modules/todo';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function TodoListForm() {
  const [todos, setTodos] = useState(null);
  // const todo = useSelector((state)=> state.todo);
  // console.log(todo)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchTodos = async() => {
    const {data} = await axios.get("http://localhost:4001/todos")
    // console.log(data)
    setTodos(data);
  }

  useEffect(()=> {
    fetchTodos();
  },[]);

  const removeHandler = async(id) => {
    axios.delete(`http://localhost:4001/todos/${id}`);
    dispatch(
      removeTodo(id));
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  return (
    <>
    <ListForm>
    <div>언제 할 거야??</div>
        {
          todos?.map((el)=>{
            return (
              <Button.Home size="large" onClick={()=>{
                navigate(`/todolist/${el?.id}`)
                }} key={el?.id}>
                <Card>
                  <CardForm>
                    <h3>{el?.title}</h3>
                    <div onClick={(e)=>{
                      e.stopPropagation();
                      removeHandler(el?.id);
                    }}><AiOutlineDelete/></div>
                  </CardForm>
                  <NameForm>작성자 :{el?.name} </NameForm>
                </Card>  
              </Button.Home>
            )
          })
        } 
    </ListForm>
    </>
  );
}

export default TodoListForm;

const ListForm = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
`
const CardForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding :0px 10px 0px 10px;
`
const NameForm = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 10px;
  padding-bottom: 10px;
`