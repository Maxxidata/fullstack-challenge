import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import i18next from 'i18next'
import { Content, DataGrid } from '@/presentation/components'

const ProfessionalList = ({ history }) => {
  const columns = useMemo(() => {
    return [
      {
        title: i18next.t('id'),
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: i18next.t('name'),
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: i18next.t('phone'),
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: i18next.t('email'),
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: i18next.t('type'),
        dataIndex: 'professionalType',
        key: 'professionalType',
        render: (professionalType) => professionalType.description
      },
      {
        title: i18next.t('status'),
        dataIndex: 'status',
        key: 'status',
        render: (status) =>
          status ? i18next.t('active') : i18next.t('inactive')
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
        path="/professional/professionals"
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
