import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Content, DataGrid } from '@/presentation/components'

const ProfessionalTypeList = ({ history }) => {
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

  const handleNew = useCallback(() => {
    history.push('/professional-types/form/new')
  }, [history])

  const handleEdit = useCallback(
    (record) => {
      history.push(`/professional-types/form/${record.id}`)
    },
    [history]
  )

  return (
    <Content>
      <DataGrid
        path="/professional-types"
        columns={columns}
        onNew={handleNew}
        onEdit={handleEdit}
      />
    </Content>
  )
}

ProfessionalTypeList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}
export default withRouter(ProfessionalTypeList)
