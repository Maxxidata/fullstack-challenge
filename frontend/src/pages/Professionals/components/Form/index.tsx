import React, { useState } from 'react';
import { AutoComplete, Form, Input, Button, Select, FormInstance } from 'antd';
import { ProfessionalInterface } from '../../professional.interface';

const { Option } = Select;

const mockProfessional = {
  id: 1,
  name: "teste",
  phone: "(xx) xxxx",
  email: "a@a.com",
  professionalType: {
    id: 1
  },
  situation: true,
}

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const ProfessionalForm: React.FC = () => {
  const formRef = React.createRef<FormInstance>();

  const [professionalType, setProfessionalType] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    setProfessionalType(data);
  };
  
  const onSituationChange = (value: string) => {
    switch (value) {
      case 'true':
        formRef.current!.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'false':
        formRef.current!.setFieldsValue({ note: 'Hi, lady!' });
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

  const INITIAL_VALUES: ProfessionalInterface = {
      id: 0,
      name: "",
      phone: "",
      email: "",
      professionalType: {
        id: 0
      },
      situation: false,
  };

  if (mockProfessional.id) {
    INITIAL_VALUES.name = mockProfessional.name;
    INITIAL_VALUES.phone = mockProfessional.phone;
    INITIAL_VALUES.email = mockProfessional.email;
    INITIAL_VALUES.professionalType = mockProfessional.professionalType;
    INITIAL_VALUES.situation = mockProfessional.situation
  }

  return (
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
          value={professionalType}
          options={options}
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
  )
}

export default ProfessionalForm;
