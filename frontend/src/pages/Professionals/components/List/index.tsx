import { DeleteTwoTone, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, notification, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';

import { ListInterface } from '../../../../shared/Interfaces/List.interface';
import { IProfessionalType } from '../../../ProfessionalTypes/professional-type.interface';
import { IProfessional } from '../../professional.interface';

const List: React.FC<ListInterface> = ({ title = 'Profissionais' }: ListInterface) => {
  const [professionals, setProfessionals] = useState<IProfessional[]>([]);
  
  useEffect(() => {
    loadProfessionals()
  }, [])

  const loadProfessionals = async () => {
    const response = await api.get('professional');
    setProfessionals(response.data);
  }

  const openNotification = (message: string, backgroundColor: string) => {
    notification.open({ message, style: { backgroundColor } });
  };

  const handleDelete = async (id: number) => {
    try{
      await api.delete(`professional/${id}`);
      openNotification('Profissional excluído com sucesso', '#77DD77');
      loadProfessionals();
    } catch(err) {
      console.log(err);
      openNotification('Erro ao excluir profissional', '#FF6961');
    }
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
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Profissão',
      dataIndex: 'professionalType',
      key: 'professionalType',
      render: (professionalType: IProfessionalType) => {
        return professionalType.description
      }
    },
    {
      title: 'Situação',
      dataIndex: 'situation',
      key: 'situation',
      render: (situation: boolean) => {
        return situation ? 'Ativo' : 'Inativo'
      }
    },
    {
      title: 'Ações',
      dataIndex: 'id',
      key: 'actions',
      render: (id: number) => (
        <div key={id} className='professional-list-actions'>
          <Link to={{ pathname: `/professionals-edit/${id}` }}><EditOutlined /></Link>
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
      extra={<Link to="/professionals-add"><PlusOutlined /></Link>}
    >
      <Table dataSource={professionals} columns={columns} pagination={false} />
    </Card>
  );
}

export default List;
