import React, { useEffect, useState } from 'react';
import { AutoComplete, Form, Input, Button, Select, FormInstance, Skeleton } from 'antd';
import { IProfessional } from '../../professional.interface';
import { IProfessionalType } from '../../../ProfessionalTypes/professional-type.interface';
import api from '../../../../services/api';
import { IForm } from '../../../../shared/Interfaces/Form.interface';

const { Option } = Select;

const ProfessionalForm: React.FC<IForm> = ({ id = 0 }: IForm) => {
  const formRef = React.createRef<FormInstance>();

  const [professionalType, setProfessionalType] = useState<IProfessionalType>();
  const [options, setOptions] = useState<string[]>([]);
  const [professional, setProfessional] = useState<IProfessional>();
  const [loading, setLoading] = useState(!!id);

  useEffect(() => {
    loadProfessional(id)
  }, [id])
  
  async function loadProfessional(professionalId: number) {
    const response = await api.get(`professional/${professionalId}`);
    setProfessional(response.data);
    setLoading(false);
  };

  const onSearch = (searchText: string) => {
    setOptions(['a', 'b']);
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    // setProfessionalType({ id: 1, description: 'dsad' });
  };
  
  const onSituationChange = (value: string) => {
    switch (value) {
      case 'true':
        formRef.current!.setFieldsValue({ note: 'Ativo' });
        return;
      case 'false':
        formRef.current!.setFieldsValue({ note: 'Inativo' });
        break;  
      default:
        break;
    }
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const INITIAL_VALUES = professional && professional.id ? {
    id: professional.id,
    name: professional.name,
    phone: professional.phone,
    email: professional.email,
    professionalType: professional.professionalType,
    situation: professional.situation,
  } : {};

  return (
    <Skeleton active loading={loading} paragraph={{ rows: 8 }}>
      <Form
        ref={formRef}
        style={{ width: '100%' }}
        name="basic"
        initialValues={INITIAL_VALUES}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: 'Por favor insira seu nome!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Telefone"
          name="phone"
          rules={[{ required: true, message: 'Por favor insira seu número de telefone!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Por favor insira seu email!' }]}
        >
          <Input type='email' />
        </Form.Item>

        <Form.Item
          label="Profissão"
          name="professionalType"
          rules={[{ required: true, message: 'Por favor escolha uma profissão!' }]}
        >
          <AutoComplete
            value='dada'
            // options={options}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={onSearch}
            onChange={onChange}
            placeholder="control mode"
          />
        </Form.Item>

        <Form.Item name="situation" label="Situação" rules={[{ required: true, message: 'Por favor escolha uma situação!' }]}>
          <Select
            placeholder="Selecione uma opção"
            onChange={onSituationChange}
            allowClear
          >
            <Option value="true">Ativo</Option>
            <Option value="false">Inativo</Option>
          </Select>
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Skeleton>
  )
}

export default ProfessionalForm;
