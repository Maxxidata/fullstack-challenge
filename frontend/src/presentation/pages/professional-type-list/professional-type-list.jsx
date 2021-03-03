import React, { useMemo } from 'react'

import { Content, DataGrid } from '@/presentation/components'

const ProfessionalTypeList = () => {
  const columns = useMemo(() => {
    return [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Descrição',
        dataIndex: 'description',
        key: 'name'
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
        path="/professional-types"
        columns={columns}
      />
    </Content>
  )
}

export default ProfessionalTypeList
