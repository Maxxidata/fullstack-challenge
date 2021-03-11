import { DeleteTwoTone, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, notification, Popconfirm, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';

import { ListInterface } from '../../../../shared/Interfaces/List.interface';
import { actions } from '../../../../store/modules/professionals/actions';
import { IProfessionalType } from '../../../ProfessionalTypes/professional-type.interface';
import { IProfessional } from '../../professional.interface';

const List: React.FC<ListInterface> = ({ title = 'Profissionais' }: ListInterface) => {
  const dispatch = useDispatch();

  const professionals: IProfessional[] = useSelector((state: any) => state.professionals.data);
  const loadProfessionals: boolean = useSelector((state: any) => state.professionals.loading);

  useEffect(() => {
    dispatch(actions.getProfessionals());
  }, [dispatch]);
  const openNotification = (message: string, backgroundColor: string) => {
    notification.open({ message, style: { backgroundColor } });
  };

  const handleDelete = async (id: number) => {
    try{
      await api.delete(`professional/${id}`);
      openNotification('Profissional excluído com sucesso', '#77DD77');
      dispatch(actions.getProfessionals());
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
          <Popconfirm
            title="Tem certeza que deseja excluir este profissional?"
            onConfirm={() => { handleDelete(id) }}
            okText="Sim"
            cancelText="Não"
          >
            <DeleteTwoTone twoToneColor='#eb2f96'/>
          </Popconfirm>
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
      <Table
        loading={loadProfessionals}
        dataSource={professionals}
        columns={columns}
        pagination={false}
      />
    </Card>
  );
}

export default List;
