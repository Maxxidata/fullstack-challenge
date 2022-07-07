import React, { useEffect, useState } from 'react';

import ModalAddProfessional from '../../components/ModalAddProfessional'

import { FiFilter } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md'

import { Container, Content } from './styles';

import api from '../../services/api';
import axios from 'axios';

const Main = ()=>{
    const [professionals, setProfessionals] = useState([]);
    const [types, setTypes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectValue, setSelectValue] = useState('0');

    //Uses multiple requests to store the state of professionals and types of professionals
    useEffect(()=>{
        axios.all([
            api.get('/professionals'),
            api.get('/types-of-professionals')
        ]).then(axios.spread((responseProfessionals, responseTypes) =>{
            setProfessionals(responseProfessionals.data); //store inital professionals
            setTypes(responseTypes.data); //store types of professionals
            }))
    },[selectValue]);
    
    useEffect(()=>{
        async function loadFilteredProfessionals(){
            const response = await api.get('/professionals');
            selectValue === '0'?
            setProfessionals(response.data):
            setProfessionals(response.data.filter(
                professional => {
                    if(professional.type.description === selectValue) return professional
                }
            ));
        }
        loadFilteredProfessionals()
    }, [selectValue])

    //Open modal and show Form
    async function openModal(){
        setIsModalOpen(!isModalOpen);
    }
    //Do a post request to add Professional
    async function handleAddProfessional(data){
        setIsModalOpen(!isModalOpen);
        try {
            const response = await api.post('/professionals', data)

            setProfessionals([...professionals, response.data]);
        } catch (error) {
            console.log(error)
        }
    }
    //Do a delete request to remove Professional
    async function handleDeleteProfessional(id){
        try {
            await api.delete(`/professionals/${id}`)
            console.log(id)
            setProfessionals(professionals.filter(professional => professional.id !== id));
        } catch (error) {
            console.log(error)
        }
    }
    //Filter professionals by type
    const handleChangeSelect = (e)=>{
        setSelectValue(e.target.value);
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
                    <select value={selectValue} onChange={handleChangeSelect}  name="type">
                        <option value="0">Filtrar por...</option>
                        {types.map(type=>{
                            return (
                                <option key={type.id} value={type.description}> {type.description} </option>
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
                    {professionals && professionals.map((professional)=>{
                        return(
                            <tr key={professional.id} >
                            <td> <strong>{professional.name}</strong> </td>
                            
                            <td> <strong> {professional.type.description} </strong> </td>
                            
                            <td> 
                                <strong> {professional.phone} </strong> 
                                <button onClick={()=> handleDeleteProfessional(professional.id)} > 
                                    <MdDeleteForever/> 
                                </button>
                            </td>

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