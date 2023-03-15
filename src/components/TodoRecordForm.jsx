import Button from './Button';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todo';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import useInput from '../hooks/useInput';
import axios from 'axios';

function TodoRecordForm() {
  const [name, nameChangeHandler] =useInput();
  const [title, titleChangeHandler] =useInput();
  const [contents, contentsChangeHandler] =useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addClick =() => {
        dispatch(addTodo({
          id : uuidv4(),
          name,
          title,
          contents,
      }))
  };
  
  return (
    <>
    <RecordForm
      onSubmit={(e) => {
        e.preventDefault();
        axios.post("http://localhost:4001/todos", { name, title, contents })
          .then((response) => {
            addClick();
            navigate("/todolist");
          })
          .catch((error) => {
            console.log(error);
          });
      }}
    >
      <TitleForm>작성자</TitleForm>
      <InputForm type= "text" maxLength={5}
      placeholder='작성자의 이름을 입력해주세요.(5자이내)'
      value={name} onChange={nameChangeHandler}/>
      <TitleForm>제목</TitleForm>
      <InputForm 
      type= "text" maxLength={50}
      placeholder='제목을 입력해주세요.(50자이내)'
      value={title} onChange={titleChangeHandler}/>
      <TitleForm>내용</TitleForm>
      <InputForm 
      name="body" maxLength={200} size="large" text="large" 
      placeholder='내용을 입력해주세요.(200자이내)'
      value={contents} onChange={contentsChangeHandler}/>
      <BtnForm>
        <Button.Home type='submit'fs ="15px">추가하기</Button.Home>
      </BtnForm>
    </RecordForm>
    </>
  )
}

export default TodoRecordForm;

const RecordForm =styled.form`
  padding: 30px;
`
const TitleForm = styled.div`
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
`
const InputForm = styled.input`
  padding: 5px;
  border : 1px solid rgb(126, 231, 187);

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 180px;
          width: 100%;
        `;
      default:
        return css`
          height: 40px;
          width: 100%;
        `;
    }
  }}
`
const BtnForm = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top :100px;
`