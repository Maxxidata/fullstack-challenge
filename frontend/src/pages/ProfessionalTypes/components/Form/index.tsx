import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, FormInstance, Skeleton, notification } from 'antd';
import { IProfessionalType } from '../../professional-type.interface';
import { IForm } from '../../../../shared/Interfaces/Form.interface';
import api from '../../../../services/api';

const { Option } = Select;

const ProfessionalForm: React.FC<IForm> = ({ id = 0 }: IForm) => {
  const [professionalType, setProfessionalType] = useState<IProfessionalType>();
  const [loading, setLoading] = useState(!!id);

  useEffect(() => {
    loadProfessional(id)
  }, [id])
  
  async function loadProfessional(professionalTypeId: number) {
    const response = await api.get(`professional-type/${professionalTypeId}`);
    setProfessionalType(response.data);
    setLoading(false);
  };

  const INITIAL_VALUES = professionalType && professionalType.id ? {
    description: professionalType.description,
    situation: professionalType.situation ? 1 : 0,
  } : {};

  const openNotification = (message: string, backgroundColor: string) => {
    notification.open({ message, style: { backgroundColor } });
  };

  const onFinish = async (request: any) => {
    request.situation = request.situation === 1;

    try{
      if(!professionalType){
        await api.post('professional-type', request);
        openNotification('Profissão criada com sucesso', '#77DD77');
      } else {
        await api.put(`professional-type/${id}`, request);
        openNotification('Profissão atualizada com sucesso', '#77DD77');
      }
      // eslint-disable-next-line no-restricted-globals
      return history.back();
    } catch(err) {
      console.log(err)
      if(!professionalType) {
        openNotification('Erro ao criar profissão', '#FF6961');
      } else {
        openNotification('Erro ao editar profissão', '#FF6961');
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
          label="Descrição"
          name="description"
          rules={[{ required: true, message: 'Por favor insira uma descrição!' }]}
        >
          <Input placeholder="Digite uma descrição" />
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
            {!professionalType ? 'Criar' : 'Salvar'}
          </Button>
        </Form.Item>
      </Form>
    </Skeleton>
  )
}

export default ProfessionalForm;
