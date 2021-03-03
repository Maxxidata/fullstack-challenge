import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Content, DataGrid } from '@/presentation/components'

const ProfessionalList = ({ history }) => {
  const columns = useMemo(() => {
    return [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
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
        dataIndex: 'professionalType',
        key: 'professionalType',
        render: (professionalType) => professionalType.description
      },
      {
        title: 'Situação',
        dataIndex: 'status',
        key: 'status',
        render: (status) => (status ? 'Ativo' : 'Inativo')
      }
    ]
  })

  const handleNew = useCallback(() => {
    history.push('/professionals/form/new')
  }, [history])

  const handleEdit = useCallback(
    (record) => {
      history.push(`/professionals/form/${record.id}`)
    },
    [history]
  )

  return (
    <Content>
      <DataGrid
        path="/professionals"
        columns={columns}
        onNew={handleNew}
        onEdit={handleEdit}
      />
    </Content>
  )
}

ProfessionalList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}
export default withRouter(ProfessionalList)
