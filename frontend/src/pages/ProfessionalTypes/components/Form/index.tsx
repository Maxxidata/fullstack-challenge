import React, { useState } from 'react';
import { AutoComplete, Form, Input, Button, Select, FormInstance } from 'antd';
import { ProfessionalTypeInterface } from '../../professional-type.interface';

const { Option } = Select;

const mockProfessionalType = {
  id: 1,
  description: 'this is a description',
  situation: true,
}

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const ProfessionalForm: React.FC = () => {
  const formRef = React.createRef<FormInstance>();
  
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

  const INITIAL_VALUES: ProfessionalTypeInterface = {
      id: 0,
      description: '',
      situation: false,
  };

  if (mockProfessionalType.id) {
    INITIAL_VALUES.description = mockProfessionalType.description
    INITIAL_VALUES.situation = mockProfessionalType.situation
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
        label="Descrição"
        name="description"
        rules={[{ required: true, message: 'Por favor insira uma descrição!' }]}
      >
        <Input />
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
