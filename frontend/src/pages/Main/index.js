import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu'
import { FiFilter } from 'react-icons/fi'
import { Container, Content } from './styles'
import api from '../../services/api'
import axios from 'axios'

const Main = ()=>{
    const [professionals, setProfessionals] = useState([]);
    const [types, setTypes] = useState([])

    useEffect(()=>{
        axios.all([
            api.get('/professionals'),
            api.get('/types-of-professionals')
        ]).then(axios.spread((responseProfessionals, responseTypes) =>{
            setProfessionals(responseProfessionals.data);
            setTypes(responseTypes.data)
        }))
    },[])
    console.log(professionals)
    console.log(types)
    return(
        <>
        <Menu />
        <Container>
            <Content>
                <header>
                <h1>Profissionais</h1>
                <div>
                    <FiFilter /> <p></p>
                    <select name="type" id="">
                        <option value="0"> Filtrar por </option>
                        {types.map(type=>{
                            return (
                                <option value={type.id}> {type.description} </option>
                            )
                        })}
                    </select>   
                </div>
                </header>
                <table>
                    <tr>
                    <th> <h3>Nome</h3> </th>
                    <th> <h3>Profissão</h3> </th>
                    <th><h3>Telefone</h3></th>
                    </tr>
                    {professionals.map((professional)=>{
                        return(
                            <tr>
                            <td> <strong>{professional.name}</strong> </td>
                            <td> <strong> {professional.type.description} </strong> </td>
                            <td> <strong> {professional.phone} </strong> </td>
                    </tr>
                        )
                    })}
                </table>
            </Content>
        </Container>
        </>
    )
}

export default Main;