import React, { useEffect, useState } from 'react';

import ModalAddProfessional from '../../components/ModalAddProfessional'

import { FiFilter } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';

import { Container, Content } from './styles';

import api from '../../services/api';
import axios from 'axios';

const Main = ()=>{
    const [professionals, setProfessionals] = useState([]);
    const [types, setTypes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Uses multiple requests to store the status of professionals and types of professionals
    useEffect(()=>{
        axios.all([
            api.get('/professionals'),
            api.get('/types-of-professionals')
        ]).then(axios.spread((responseProfessionals, responseTypes) =>{
            setProfessionals(responseProfessionals.data); //store inital professionals
            setTypes(responseTypes.data); //store types of professionals
        }))
    },[]);

    async function openModal(){
        setIsModalOpen(!isModalOpen);
    }

    async function handleAddProfessional(data){
        setIsModalOpen(!isModalOpen);
        try {
            const response = await api.post('/professionals', data)

            setProfessionals([...professionals, response.data]);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <ModalAddProfessional
            isOpen={isModalOpen}
            setIsOpen={openModal}
            handleAddProfessional={handleAddProfessional}
        />
        <Container>
            <Content>
                <header>
                <button onClick={openModal}>
                    <AiOutlinePlus />
                    Adicionar profissional
                </button>
                <div>
                    <FiFilter /> <p></p>
                    <select  name="type">
                        <option value="0">Filtrar por...</option>
                        {types.map(type=>{
                            return (
                                <option key={type.id} value={type.id}> {type.description} </option>
                            )
                        })}
                    </select> 
                </div>
                </header>
                <table>
                    <tbody>
                    <tr>
                    <th> <h3>Nome</h3> </th>
                    <th> <h3>Profissão</h3> </th>
                    <th><h3>Telefone</h3></th>
                    </tr>
                    {professionals.map((professional)=>{
                        return(
                            <tr key={professional.id} >
                            <td> <strong>{professional.name}</strong> </td>
                            
                            {professional.type.description ?
                            <td> <strong> {professional.type.description} </strong> </td>:
                            <td> <strong> --- </strong> </td>
                            }

                            <td> <strong> {professional.phone} </strong> </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Content>
        </Container>
        </>
    )
}

export default Main;