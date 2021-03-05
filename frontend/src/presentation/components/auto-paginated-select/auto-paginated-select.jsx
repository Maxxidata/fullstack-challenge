import React from 'react'
import PropTypes from 'prop-types'
import Select from '../select/select.jsx'
import useFetch from '../../hooks/useFetch.js'

const AutoPaginatedSelect = ({ path, ...props }) => {
  const { loading, data } = useFetch(path)

  return <Select options={data ?? []} loading={loading} {...props} />
}

AutoPaginatedSelect.propTypes = {
  path: PropTypes.string.isRequired
}

export default AutoPaginatedSelect
