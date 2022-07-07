import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    button{
        margin-top: 15px;
        margin-left: 15px;
        border: none;
        background-color: transparent;
    }
`;

export const Aside = styled.aside`
    background-color: #03045E;
    position: fixed;
    height: 230px;
    width: 250px;
    padding-top: 0px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: 85ms;
    svg{
            margin-top: 10px;
            width: 40px;
            color: white;
        }

    h1{
        font-size: 48px;
        background-color: transparent;
    }

    button{
        border: none;
        background-color: transparent;
    }

    ul{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    li{
        display: flex;
        margin-bottom: 15px;
        padding:0 0 0 20px;
        align-items: center;
        justify-content: flex-start;
        h4{
            margin-top: 10px;
        }
        svg{
            width: 20px;
            margin-right: 10px;
        }
    }
    li:hover{
        background-color: #03045E;
    }
`;