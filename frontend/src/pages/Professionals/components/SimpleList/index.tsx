import { DeleteTwoTone, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';

import { ListInterface } from '../../../../shared/Interfaces/List.interface';
import { ProfessionalInterface } from '../../professional.interface';

const SimpleList: React.FC<ListInterface> = ({ title = 'Profissionais' }: ListInterface) => {
  const [professionals, setProfessionals] = useState<ProfessionalInterface[]>([]);
  
  useEffect(() => {
    loadProfessionals()
  }, [])

  const loadProfessionals = async () => {
    const response = await api.get('/professional');
    setProfessionals(response.data);
  }
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ações',
      dataIndex: 'id',
      key: 'actions',
      render: (id: number) => (
        <div key={id} className='professional-list-actions'>
          <Link to="/professionals-edit"><EditOutlined /></Link>
          <DeleteTwoTone
            onClick={
              async () => {
                await api.delete(`/professional/${id}`);
                loadProfessionals();
              }
            }
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
      extra={<Link to="/professionals-add"><PlusOutlined /></Link>}
    >
      <Table dataSource={professionals} columns={columns} pagination={false} />
    </Card>
  );
}

export default SimpleList;
