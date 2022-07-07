import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Select as AntSelect } from 'antd'

const Select = ({ valueField, labelField, options, onChange, ...props }) => {
  const formattedOptions = useMemo(
    () =>
      options?.map((option) => ({
        label: option[labelField],
        value: option[valueField]
      })),
    [valueField, labelField, options]
  )

  const handleOnChange = useCallback(
    (value, ...params) => {
      if (typeof onChange === 'function') {
        onChange(
          options.find((option) => option[valueField] === value),
          ...params
        )
      }
    },
    [onChange, options]
  )

  return (
    <AntSelect
      options={formattedOptions}
      onChange={handleOnChange}
      {...props}
    />
  )
}

Select.propTypes = {
  valueField: PropTypes.string.isRequired,
  labelField: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
}

export default Select
