import styled from 'styled-components';

export const Form = styled.form`
padding: 20px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 500px;
height: 100%;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 20px 25px #0000001A;
opacity: 1;
  label{
    align-self: flex-start;
  }
  strong{
    color:#03045E;
  }
  input{
    width: 100%;
    margin-right: 5px;
    height: 35px;
    background: #F5F4F6  0% 0% no-repeat padding-box;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;
    &:focus{
        background-color: #EBEAED;
    }
  }
  >input{
      margin-bottom: 10px;
  }
  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
    color:#03045E;
  }
  button:first-child {
    background-color: transparent;
    color: black;
    width: 50px;
    font-size: 20px;
    &:hover{
      background-color: transparent;
    }
  }
  button {
    align-self: flex-end;
    width: 200px;
    padding: 10px;
    border: none;
    color: #fff;
    background: #03045E 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    transition: background-color 0.2s;
    &:hover{
            background-color: #0077B6;
        }
  }
  @media screen and  (max-width: 650px){
    width: 90vw;
    height: 70vh;
    padding: 10px;
    button:last-child{
      margin-bottom: 100px;
    }
  }
`;