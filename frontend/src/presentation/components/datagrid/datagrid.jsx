import React, { useCallback, useEffect } from 'react'
import { Table, Space, Row, Button } from 'antd'
import PropTypes from 'prop-types'

const DataGrid = ({ columns, dataSource, onSearch, pagination }) => {
  const handleTableChange = useCallback((params) => {
    console.log(params)
    if (onSearch === ' function') {
      onSearch(params)
    }
  }, [onSearch])

  useEffect(() => {
    handleTableChange(pagination)
  }, [])

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Row align="middle" justify="end">
        <Button type="primary">Adicionar</Button>
      </Row>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        loading={false}
        onChange={handleTableChange}
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
  dataSource: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
  pagination: PropTypes.exact({
    pageSize: PropTypes.number,
    current: PropTypes.number
  })
}

DataGrid.defaultProps = {
  columns: [],
  dataSource: [],
  pagination: {
    pageSize: 5,
    current: 1
  }
}
export default DataGrid
