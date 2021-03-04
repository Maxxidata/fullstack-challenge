import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import i18next from 'i18next'
import { Content, DataGrid } from '@/presentation/components'

const ProfessionalTypeList = ({ history }) => {
  const columns = useMemo(() => {
    return [
      {
        title: i18next.t('id'),
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: i18next.t('description'),
        dataIndex: 'description',
        key: 'name'
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
