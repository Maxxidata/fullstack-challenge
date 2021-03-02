import React from 'react'
import { Table, Space, Row, Button } from 'antd'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch.js'

const DataGrid = ({ columns, pagination, path }) => {
  const { isLoading, data } = useFetch(path)

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Row align="middle" justify="end">
        <Button type="primary">Adicionar</Button>
      </Row>
      <Table
        columns={columns}
        dataSource={data.items}
        pagination={pagination}
        loading={isLoading}
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
  path: PropTypes.func.isRequired
}

DataGrid.defaultProps = {
  columns: [],
  pagination: {
    pageSize: 5,
    current: 1
  }
}
export default DataGrid
