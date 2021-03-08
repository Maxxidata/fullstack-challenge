import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, FormInstance, Skeleton } from 'antd';
import { IProfessionalType } from '../../professional-type.interface';
import { IForm } from '../../../../shared/Interfaces/Form.interface';
import api from '../../../../services/api';

const { Option } = Select;

const ProfessionalForm: React.FC<IForm> = ({ id = 0 }: IForm) => {
  const formRef = React.createRef<FormInstance>();

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

  const INITIAL_VALUES = professionalType && professionalType.id ? {
    description: professionalType.description,
    situation: professionalType.situation,
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
    </Skeleton>
  )
}

export default ProfessionalForm;
