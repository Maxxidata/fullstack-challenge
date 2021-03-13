import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
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
        button{
            display: flex;
            align-items: center;
            padding: 8px;
            border: none;
            background-color: transparent;
            color: #03045e;
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            select{
            width: 100%;
            max-width: ch;
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
        margin-bottom: 20px;
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
        display: flex;
        padding: 20px;
        width: 300px;
    }

    table tr{
        display: flex;
        button{
            border: none;
            background-color: transparent;
            margin-right: 10px;
        }
        svg{
            display: block;
            width: 20px;
            height: 20px;
            color: #fff;
        }
    }
    table tr td{
        display: flex;
        padding: 10px;
        padding-left: 18px;
        width: 100%;
        justify-content: space-between;
    }
    table tr:last-child {
        border-radius: 0 0 5px 5px;
        padding-bottom: 5px;
    }
`;