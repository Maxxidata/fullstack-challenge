import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #caf0f8;
`;

export const Content = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;

    h1,p{
        color: #03045e;
    }
    header{
        display: flex;
        flex-direction: row;
        justify-content:space-between;

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            select{
            width: 100%;
            max-width: 20ch;
            border: none;
            background-color: transparent;
            color: #03045e;
            }
            option{
                color: #03045e;
            }
            svg{
                color: #03045e;
                width: 24px;
            }   
        }
    }
    table{
        width: 900px;
    }

    table tr:first-child {
        border-radius: 5px 5px 0 0;
    }

    table tr:first-child{
        background-color: #03045e;
    }
    table tr{
        background-color: #0077b6;
    }

    table tr th {
        padding: 20px;
        width: 300px;
    }

    table tr{
        display: flex;
    }
    table tr td{
        display: flex;
        padding: 10px;
        width: 100%;
        justify-content: center;
    }
    table tr:last-child {
        border-radius: 0 0 5px 5px;
    }
`;