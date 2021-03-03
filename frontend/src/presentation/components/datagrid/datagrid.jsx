import React, { useCallback } from 'react'
import { Table, Space, Row, Button } from 'antd'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch.js'

const DataGrid = ({ columns, pagination, path, onNew, onEdit }) => {
  const { isLoading, data } = useFetch(path)

  const handleOnNew = useCallback(() => {
    if (typeof onNew === 'function') {
      onNew()
    }
  }, [onNew])

  const handleOnEdit = useCallback((record) => {
    if (typeof onEdit === 'function') {
      onEdit(record)
    }
  }, [onEdit])

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {onNew != null && (
        <Row align="middle" justify="end">
          <Button type="primary" onClick={handleOnNew}>
            Adicionar
          </Button>
        </Row>
      )}
      <Table
        columns={columns}
        dataSource={data.items}
        pagination={pagination}
        loading={isLoading}
        onRow={(record) => {
          return {
            onClick: () => handleOnEdit(record) // click row
          }
        }}
      />
    </Space>
  )
}

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dataIndex: PropTypes.string,
      key: PropTypes.string
    })
  ),
  pagination: PropTypes.exact({
    pageSize: PropTypes.number,
    current: PropTypes.number
  }),
  path: PropTypes.string.isRequired,
  onNew: PropTypes.func,
  onEdit: PropTypes.func
}

DataGrid.defaultProps = {
  columns: [],
  pagination: {
    pageSize: 5,
    current: 1
  },
  onNew: null,
  onEdit: null
}

export default DataGrid
