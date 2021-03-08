import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Skeleton, notification } from 'antd';
import { IProfessional } from '../../professional.interface';
import { IProfessionalType } from '../../../ProfessionalTypes/professional-type.interface';
import api from '../../../../services/api';
import { IForm } from '../../../../shared/Interfaces/Form.interface';

const { Option } = Select;

const ProfessionalForm: React.FC<IForm> = ({ id = 0 }: IForm) => {
  const [professionalTypes, setProfessionalTypes] = useState<IProfessionalType[]>([]);
  const [professional, setProfessional] = useState<IProfessional>();
  const [loading, setLoading] = useState(!!id);

  useEffect(() => {
    if(id !== 0) loadProfessional(id);
    loadProfessionalTypes();
  }, [id])
  
  async function loadProfessional(professionalId: number) {
    const response = await api.get(`professional/${professionalId}`);
    setProfessional(response.data);
    setLoading(false);
  };

  async function loadProfessionalTypes() {
    const response = await api.get('professional-type');
    setProfessionalTypes(response.data);
  };

  const INITIAL_VALUES = professional && professional.id ? {
    id: professional.id,
    name: professional.name,
    phone: professional.phone,
    email: professional.email,
    professionalType: professional.professionalType.id,
    situation: professional.situation ? 1 : 0,
  } : {null: null};

  const openNotification = (message: string, backgroundColor: string) => {
    notification.open({ message, style: { backgroundColor } });
  };

  const onFinish = async (request: any) => {
    if(request.professionalType) {
      request.professionalType = professionalTypes.find(
        (item) => {
          return item.id === request.professionalType ? item : null;
        }
      );
    }
    request.situation = request.situation === 1;

    try{
      if(!professional) {
        await api.post('professional', request);
        openNotification('Profissional criado com sucesso', '#77DD77');
      } else {
        await api.put(`professional/${id}`, request);
        openNotification('Profissional atualizado com sucesso', '#77DD77');
      }
      // eslint-disable-next-line no-restricted-globals
      return history.back();
    } catch(err) {
      console.log(err)
      if(!professional) {
        openNotification('Erro ao criar profissional', '#FF6961');
      } else {
        openNotification('Erro ao editar profissional', '#FF6961');
      }
      // eslint-disable-next-line no-restricted-globals
      return history.back();
    }
  };

  return (
    <Skeleton active loading={loading} paragraph={{ rows: 8 }}>
      <Form
        style={{ width: '100%' }}
        initialValues={INITIAL_VALUES}
        onFinish={onFinish}
      >
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: 'Por favor insira seu nome!' }]}
        >
          <Input placeholder="Digite seu nome" />
        </Form.Item>

        <Form.Item
          label="Telefone"
          name="phone"
          rules={[{ required: true, message: 'Por favor insira seu número de telefone!' }]}
        >
          <Input placeholder="Digite seu número de telefone" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Por favor insira seu email!' }]}
        >
          <Input type='email' placeholder="Digite seu email" />
        </Form.Item>

        <Form.Item
          label="Profissão"
          name="professionalType"
          rules={[{ required: true, message: 'Por favor escolha uma profissão!' }]}
        >
            <Select
              placeholder="Selecione uma opção"
              style={{ width: '100%' }}
            >
              {professionalTypes.map(item => (
                <Option
                  key={item.id}
                  value={item.id}
                >
                  {item.description}
                </Option>
              ))}
            </Select>
        </Form.Item>

        <Form.Item name="situation" label="Situação" rules={[{ required: true, message: 'Por favor escolha uma situação!' }]}>
          <Select
            placeholder="Selecione uma opção"
            allowClear
          >
            <Option value={1}>Ativo</Option>
            <Option value={0}>Inativo</Option>
          </Select>
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {!professional ? 'Criar' : 'Salvar'}
          </Button>
        </Form.Item>
      </Form>
    </Skeleton>
  )
}

export default ProfessionalForm;
