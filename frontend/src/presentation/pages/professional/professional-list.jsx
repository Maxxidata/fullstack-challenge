import React, { useMemo } from 'react'
import Content from '../../components/layout/content/content.jsx'
import DataGrid from '../../components/datagrid/datagrid.jsx'

const ProfessionalList = () => {
  const columns = useMemo(() => {
    return [
      {
        title: 'id',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Telefone',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Tipo',
        dataIndex: 'type',
        key: 'type'
      },
      {
        title: 'Situação',
        dataIndex: 'status',
        key: 'status',
        render: (status) => (status ? 'Ativo' : 'Inativo')
      }
    ]
  })

  return (
    <Content>
      <DataGrid
        path="/professionals"
        columns={columns}
      />
    </Content>
  )
}

export default ProfessionalList
