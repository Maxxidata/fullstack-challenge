import { DeleteTwoTone, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, notification, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';

import { ListInterface } from '../../../../shared/Interfaces/List.interface';
import { IProfessionalType } from '../../professional-type.interface';

const SimpleList: React.FC<ListInterface> = ({ title = 'Profissões' }: ListInterface) => {
  const [professionalTypes, setProfessionalTypes] = useState<IProfessionalType[]>([]);
  
  useEffect(() => {
    loadProfessionalTypes()
  }, [])

  const loadProfessionalTypes = async () => {
    const response = await api.get('professional-type');
    setProfessionalTypes(response.data);
  }

  const openNotification = (message: string, backgroundColor: string) => {
    notification.open({ message, style: { backgroundColor } });
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`professional-type/${id}`);
      openNotification('Profissão excluída com sucesso', '#77DD77');
      loadProfessionalTypes();
    } catch(err) {
      console.log(err);
      openNotification('Erro ao excluir profissão', '#FF6961');
    }
  }
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Ações',
      dataIndex: 'id',
      key: 'actions',
      render: (id: number) => (
        <div key={id} className='professional-type-list-actions'>
          <Link to={{ pathname: `/professional-types-edit/${id}` }}><EditOutlined /></Link>
          <DeleteTwoTone
            onClick={() => { handleDelete(id) }}
            twoToneColor='#eb2f96'
          />
        </div>
      ),
    },
  ];
  
  return (
    <Card
      title={title}
      hoverable
      extra={<Link to="/professional-types-add"><PlusOutlined /></Link>}
    >
      <Table dataSource={professionalTypes} columns={columns} pagination={false} />
    </Card>
  );
}

export default SimpleList;
