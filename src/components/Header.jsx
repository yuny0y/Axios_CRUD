import React from 'react'
import { AiTwotoneHome } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
    const navigate = useNavigate();
  return (
    <>
    <HeaderForm>
        <ContentsForm>
            <Contents><AiTwotoneHome onClick={() => {
                navigate('/');
            }}/></Contents>
            <Contents>우리의 Todo List</Contents>
        </ContentsForm>
    </HeaderForm>
    </>
    
  )
}

export default Header

const HeaderForm = styled.div`
    border: 1px solid rgb(69, 168, 143);
    margin: 20px;
    padding: 5px;
    width: 100%;
`
const ContentsForm = styled.div`
    display: flex;
    justify-content: space-between;
`
const Contents = styled.div`
    padding: 15px;
    color: rgb(16, 58, 47);
    font-weight: bold;
    font-size: 20px;
`
