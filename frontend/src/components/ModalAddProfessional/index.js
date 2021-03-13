import React from 'react';
import { useForm } from 'react-hook-form'

import Modal from '../Modal'

import { Form } from './styles'

const ModalAddProfessional = ({ isOpen, setIsOpen, handleAddProfessional })=>{
    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit((data)=>{
        data.situation = true;
        handleAddProfessional(data)
    })
    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form  onSubmit={onSubmit}>
        <button className="close" onClick={()=>setIsOpen()}> x </button>
            <h1>Adicionar Profissional</h1>
            <label htmlFor="name"> <strong>Nome</strong> </label>
            <input ref={register} id="name" name="name" placeholder="Nome aqui..." />
            
            <label htmlFor="email"> <strong>Email</strong>  </label>
            <input ref={register} id="email" name="email" placeholder="exemplo@email.com" />

            <label htmlFor="phone"> <strong>Telefone</strong>  </label>
            <input ref={register} id="phone" name="phone" placeholder="(xx) xxxx-xxxx" />

            <label htmlFor="type_of_professional"> <strong>profissão</strong>  </label>
            <input ref={register} id="type_of_professional" name="type_of_professional" placeholder="ex: Engenheiro" />

            <button type="submit" >
            <p>cadastrar profissional</p>
            </button>
        </Form>
        </Modal>
    );
}

export default ModalAddProfessional;